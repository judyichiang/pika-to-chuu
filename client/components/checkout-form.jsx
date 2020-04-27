import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };

    this.handleName = this.handleName.bind(this);
    this.handleCreditCard = this.handleCreditCard.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }

  handleCreditCard(event) {
    this.setState({ creditCard: event.target.value });
  }

  handleAddress(event) {
    this.setState({ shippingAddress: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const obj = {
      name: this.state.name,
      creditCard: this.state.creditCard,
      shippingAddress: this.state.shippingAddress
    };
    this.props.onSubmit(obj);
  }

  render() {
    const array = this.props.cartItem;
    let num = 0;
    for (let i = 0; i < array.length; i++) {
      num += array[i].price;
    }
    const total = (num / Math.pow(10, 2)).toFixed(2);

    let button;
    if (this.state.name && this.state.creditCard && this.state.shippingAddress) {

      button = <div className="col my-4 mb-5"><button type="submit" className="btn btn-primary float-right  mr-5 "
        onClick={() => this.props.setView('checkout', {})}
      >Place Order</button></div>;

    } else {
      button = <div className="col my-4 mb-5"><button type="submit" className="btn btn-primary float-right  mr-5 disabled"
        disabled={true}
      >Place Order</button></div>;
    }

    const data = this.props.cartItem.map((product, index) =>
      <CartSummaryItem
        key={index}
        item={product}
        name={product.name}
        price={product.price}
        image={product.image}
      />
    );

    return (
      <div className="container">
        <div className="d-flex flex-row m-0 p-5">

          <div className="col-md-8 slide-in">
            <h1>Place Order</h1>
            <h3>Order Total: ${total}</h3>
            <form className="mb-5" onSubmit={this.handleSubmit}> {/* ----------form-------------- */}
              {/* ------------name-------------- */}
              <div className="form-group">
                <label className="my-2">
                  <p>Name on Credit Card</p>
                  <input type="text" className="form-control" value={this.state.name} onChange={this.handleName} />
                </label>
              </div>
              {/* ------------credit card-------------- */}
              <div className="form-group">
                <label className="my-2">
                  <p>Credit Card</p>
                  <input type="text" className="form-control" name="creditCard" value={this.state.creditCard} onChange={this.handleCreditCard} />
                </label>
              </div>
              {/* ------------address-------------- */}
              <div className="form-group">
                <label className="my-2">
                  <p>Shipping Address</p></label>
                <textarea className="form-control" id="shippingAddress" cols="30" rows="10" value={this.state.shippingAddress} onChange={this.handleAddress}></textarea>

              </div>

              {button}

              <div className="pointer" onClick={() => this.props.setView('catalog', {})}>
                &lt; Back to Catalog
              </div>

            </form> {/* ----------form-------------- */}
          </div>

          {/* in the cart */}
          <div className="col-md-4 d-md-block d-none cart-sum">
            <p>Cart Summary</p>
            <div>
              <div className="row p-4 hide-del">{data}</div>
            </div>
          </div>

        </div>
      </div>
    );
  }
  // --------------------
}
