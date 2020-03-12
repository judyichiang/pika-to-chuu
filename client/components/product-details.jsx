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
      <div className="container p-3">
        <div onClick={() => this.props.setView('catalog', {})}>
          &lt; Back to Catalog
        </div>
        <div className="row p-3">
          <div className="col-4">
            <img src={this.props.image} alt={this.props.name} />
          </div>
          <div className="col-8">
            <h3>{this.props.name}</h3>
            <p>${(this.props.price / Math.pow(10, 2)).toFixed(2)}</p>
            <p>{this.props.shortDescription}</p>
          </div>
        </div>
        <div className="row"></div>
        <div className="col">
          {this.props.longDescription}
        </div>
      </div>

    );
  }
}
