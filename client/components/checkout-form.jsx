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
        <div className="col my-4"><button type="submit" className="btn btn-primary"
          onClick={() => this.props.setView('catalog', {})}
        >Place Order</button></div>
        <div onClick={() => this.props.setView('catalog', {})}>
          &lt; Back to Catalog
        </div>
      </div>
    );
  }
// --------------------
}
