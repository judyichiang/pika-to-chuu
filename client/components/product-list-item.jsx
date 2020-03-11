import React from 'react';

export default class ProductionListItem extends React.Component {
  render() {

    return (
      this.props.products.map((product, index) =>

        <div className="col-4 mb-4" key={index}>
          <div className="card">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.price}</p>
              <p className="card-text">{product.shortDescription}</p>
            </div>
          </div>

        </div>

      ));
  }
}
