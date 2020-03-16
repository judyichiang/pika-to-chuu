import React from 'react';

export default class CheckoutForm extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="col">
          <h1>My Cart</h1>
          <p>Order Total: $</p>
          <form >

          </form>
        </div>
        <div onClick={() => this.props.setView('catalog', {})}>
          &lt; Back to Catalog
        </div>
      </div>
    );
  }
// --------------------
}
