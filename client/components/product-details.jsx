import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      showModal: false
    };
    this.modalScreen = this.modalScreen.bind(this);

  }

  componentDidMount() {
    const productId = this.props.product.productId;

    fetch(`api/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data
        });
      })
      .catch(err => console.error(err));
  }

  modalScreen() {
    const product = this.state.product;
    this.props.addToCart(product);
    this.setState({
      showModal: true
    });
  }

  render() {

    if (this.state.showModal === true) {
      return (
        <div className="disclaimer container-fluid">

          <div className="modal-dialog modal-dialog-centered">

            {/* -- Modal content-- */}
            <div className="modal-content">
              <div className="modal-header d-flex justify-content-center">
                <h3 className="modal-title">Item Added</h3>

              </div>
              <div className="modal-footer d-flex justify-content-center">
                <button type="button" className="btn btn-primary" onClick={() => this.props.setView('catalog', {})}>Back to Catalog</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.props.setView('cart', {})}>Go to Cart</button>
              </div>
            </div>

          </div>
        </div>
      );
    }

    if (this.state.product) {
      return (
        <div className="container p-3">
          <div className="pointer" onClick={() => this.props.setView('catalog', {})}>
            &lt; Back to Catalog
          </div>
          <div className="row px-3 pt-5">

            <img className="col-xl-6 col-lg-5 col-md-6 col-xs-12 col-sm-6" src={this.state.product.image} alt={this.state.product.name} />

            <div className="col-xl-6 col-lg-5 col-md-6 col-xs-12 col-sm-6">
              <h3 className="mb-3">{this.state.product.name}</h3>
              <p className="mb-3">${(this.state.product.price / Math.pow(10, 2)).toFixed(2)}</p>
              <p>{this.state.product.shortDescription}</p>
              {/* <p><button className="btn btn-primary pl-3 pr-3 pt-2 pb-2" onClick={() => this.props.addToCart(this.state.product)} >Add to Cart</button></p> */}
              <p><button className="btn btn-primary pl-3 pr-3 pt-2 pb-2" onClick={this.modalScreen} >Add to Cart</button></p>
            </div>
          </div>
          <div className="row"></div>
          <div className="pl-4 pr-4 mt-3 col-12">
            {this.state.product.longDescription}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
