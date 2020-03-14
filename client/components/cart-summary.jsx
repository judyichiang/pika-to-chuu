import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cartItem.length === 0) {
    return (
      <div>
        <h1>Cart is empty, go buy something!</h1>
      </div>
    );
  } else {
    const data = props.cartItem.map((product, index) =>
      <CartSummaryItem
        key={index}
        item={product}
        name={product.name}
        price={product.price}
        image={product.image}
        shortDescription={product.shortDescription}
      />
    );

    return (
      <div className="container">
        <div className="row">
          <div onClick={() => props.setView('catalog', {})}>
            &lt; Back to Catalog
          </div>

          <div>
            <div className="row p-4">{data}</div>
          </div>
          <h1>Total: </h1>
        </div>
      </div>
    );
  }

  // --------------------
}
