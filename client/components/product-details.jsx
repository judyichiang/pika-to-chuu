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
      })

      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="container">
        <div className ="row">
          <div className="col-4"></div>
          <div className="col-8"></div>
        </div>
        <div className="row"></div>
        <div className="col"></div>
      </div>

    );
  }
}
