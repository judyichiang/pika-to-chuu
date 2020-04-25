import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: { name: 'catalog', params: {} },
      cart: [],
      modalView: true
    };
    this.setModalView = this.setModalView.bind(this);
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setModalView() {
    this.setState({
      modalView: false
    });
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  getCartItems() {
    fetch('api/cart')
      .then(res => res.json())
      .then(cart => {
        this.setState({
          cart
        });
      })
      .catch(err => console.error(err));
  }

  addToCart(product) {
    fetch('api/cart', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(product => {
        this.setState({
          cart: this.state.cart.concat(product)
        });
      })
      .catch(err => console.error(err));
  }

  placeOrder(obj) {
    fetch('api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obj)
    })
      .then(res => res.json())
      .then(obj => {
        this.setState({
          view: { name: 'catalog', params: {} },
          cart: []
        });
        // -------------
      })
      .catch(err => console.error(err));
    // ----------------------
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div className="mb-2">
          <Header name="Pika-to-Chuu"
            cartItemCount={this.state.cart.length}
            setView={this.setView}
          />
          <ProductList
            setView={this.setView}
            setModalView={this.setModalView}
            modalView={this.state.modalView}
          />
        </div>
      );
    }

    if (this.state.view.name === 'details') {
      return (
        <div className="mb-2">
          <Header name="Pika-to-Chuu"
            cartItemCount={this.state.cart.length}
            setView={this.setView} />
          <ProductDetails
            setView={this.setView}
            product={this.state.view.params}
            addToCart={this.addToCart} />
        </div>
      );
    }

    if (this.state.view.name === 'cart') {
      return (
        <div className="mb-2">
          <Header name="Pika-to-Chuu"
            cartItemCount={this.state.cart.length}
            setView={this.setView} />
          <CartSummary
            cartItem={this.state.cart}
            product={this.state.view.params}
            setView={this.setView} />
        </div>

      );
    }

    if (this.state.view.name === 'checkout') {
      return (
        <div className="mb-2">
          <Header name="Pika-to-Chuu"
            cartItemCount={this.state.cart.length}
            setView={this.setView} />
          <CheckoutForm
            onSubmit={this.placeOrder}
            cartItem={this.state.cart}
            setView={this.setView}
          />

        </div>
      );
    }

    // ------------------------------------
  }
}
