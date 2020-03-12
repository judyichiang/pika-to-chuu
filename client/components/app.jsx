import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      isLoading: true,
      view: { name: 'catalog', params: {} }
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch('/api/health-check')
      .then(res => res.json())
      .then(data => this.setState({ message: data.message || data.error }))
      .catch(err => this.setState({ message: err.message }))
      .finally(() => this.setState({ isLoading: false }));
  }

  setView(name, params) {
    this.setState({
      view: { name, params }
    });
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <div>
          <Header name="$Wicked Sales" />
          <ProductList
            setView={this.setView}
            product={this.state.view.params} />
        </div>
      );
    }

    if (this.state.view.name === 'details') {
      return (
        <div>
          <Header name="$Wicked Sales" />
          <ProductDetails
            setView={this.setView}
            product={this.state.view.params} />
        </div>
      );
    }

  }
}
