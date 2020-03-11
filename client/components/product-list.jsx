import React from 'react';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => this.setState(prevState => ({
        products: data
      })))
      .catch(err => console.error(err));
  }

  render() {
    return null;
  }
}
