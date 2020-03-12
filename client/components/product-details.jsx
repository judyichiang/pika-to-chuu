/* eslint-disable no-console */
import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: null
    };
  }

  componentDidMount() {
    const productId = this.props.product.productId;
    fetch(`api/products/${productId}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data
        });
        console.log(data);
      })

      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div>&lt; Back to Catalog</div>
        <div className="row">
          <div className="col-4">
            <img src={this.state.product.image} alt={this.state.product.name} />
          </div>
          <div className="col-8">
            <h3>{this.state.product.name}</h3>
            <p>${(this.state.produce.price / Math.pow(10, 2)).toFixed(2)}</p>
            <p>{this.state.product.shortDescription}</p>
          </div>
        </div>
        <div className="row"></div>
        <div className="col">
          {this.state.product.longDescription}
        </div>
      </div>

    );
  }
}
