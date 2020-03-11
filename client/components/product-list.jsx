import React from 'react';
import ProductionListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }

  componentDidMount() {
    this.getProducts();

  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data
        });

      })
      .catch(err => console.error(err));
  }

  render() {

    return (
      <div>
        <ProductionListItem products={this.state.products}/>
      </div>
    );
  }
}
