import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {
  if (props.cartItemCount === 0) {
    return (
      <div>
        <h1>Cart is empty, go buy something!</h1>
      </div>
    );
  } else {
    const data = props.products.map((product, index) =>
      <CartSummaryItem
        key={index}
        name={product.name}
        price={product.price}
        image={product.image}
        shortDescription={product.shortDescription}
      />
    );
    return (
      <div className>
        <div onClick={() => this.props.setView('catalog', {})}>
          &lt; Back to Catalog
        </div>

        <div>
          <div className="row p-4">{data}</div>
        </div>
      </div>
    );

  }

  // --------------------
}
