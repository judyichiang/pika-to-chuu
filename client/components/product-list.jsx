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
        productId = {product.productId}
      />
    );

    return (
      <div className="container-fluidr">
        {/* <div className="row p-4">{data}</div> */}
        <div className="d-flex flex-wrap justify-content-center">{data}</div>
      </div>
    );
  }

}
