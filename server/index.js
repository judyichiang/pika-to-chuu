require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {
  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const sql = `
  select "productId","name","price","image", "shortDescription"
  from "products"
  `;

  db.query(sql)
    .then(result => {
      const products = result.rows;
      res.json(products);
    })
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const { productId } = req.params;
  if (!parseInt(productId, 10) || productId <= 0) {
    return res.status(400).json({ error: 'productId must be a positive integer' });
  }
  const sql = `
    select *
      from "products"
    where "productId" =$1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        res.status(404).json({ error: 'Cannot find the productId' });
      } else {
        res.json(product);
      }
    })
    .catch(err => next(err));

});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) {
    return res.status(200).json([]);
  }
  const sql = `
  select "c"."cartItemId",
       "c"."price",
       "p"."productId",
       "p"."image",
       "p"."name",
       "p"."shortDescription"
  from "cartItems" as "c"
  join "products" as "p" using ("productId")
  where "c"."cartId" = $1
  `;
  const val = [req.session.cartId];
  db.query(sql, val)
    .then(result => {
      const products = result.rows;
      res.status(201).json(products);
    })
    .catch(err => next(err));
});

app.post('/api/cart', (req, res, next) => {
  const { productId } = req.body;
  if (!parseInt(productId, 10) || productId <= 0) {
    return res.status(400).json({ error: 'productId must be a positive integer' });
  }
  const sql = `
    select "price"
      from "products"
    where "productId" =$1
  `;
  const params = [productId];
  db.query(sql, params)
    .then(result => {
      const product = result.rows[0];
      if (!product) {
        throw new ClientError('cannot find data', 400);
      }
      if ('cartId' in req.session) {
        return {
          cartId: req.session.cartId,
          price: result.rows[0].price
        };
      }
      const sql = `
      insert into "carts" ("cartId", "createdAt")
      values (default, default)
      returning "cartId"
      `;
      return db.query(sql)
        .then(result2 => {
          const price = {
            price: result.rows[0].price,
            cartId: result2.rows[0].cartId
          };
          return price;
        });
    })
  // --------------------------------------------
    .then(result3 => {
      req.session.cartId = result3.cartId;
      const price = result3.price;

      const sql = `
      insert into "cartItems" ("cartId", "productId", "price")
        values ($1, $2, $3)
      returning "cartItemId"
      `;
      const val = [result3.cartId, productId, price];

      return db.query(sql, val)
        .then(
          cartItemId => cartItemId.rows[0]
        );
    })
    .then(cartItemId => {
      const sql = `
      select "c"."cartItemId",
        "c"."price",
        "p"."productId",
        "p"."image",
        "p"."name",
        "p"."shortDescription"
      from "cartItems" as "c"
      join "products" as "p" using ("productId")
      where "c"."cartItemId" = $1
      `;
      const val = [cartItemId.cartItemId];
      db.query(sql, val)

        .then(data =>
          res.status(201).json(data.rows)
        );
    })
    .catch(err => next(err));
});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
