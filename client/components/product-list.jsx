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
      .then(products => {
        this.setState({
          products
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    const data = this.state.products.map((product, index) =>
      <ProductionListItem
        key = {index}
        name = {product.name}
        price = {product.price}
        image = {product.image}
        shortDescription={product.shortDescription}
        setView = {this.props.setView}
      />
    );

    return (
      <div className="container">
        <div className="row p-4">{data}</div>
      </div>
    );
  }

}
