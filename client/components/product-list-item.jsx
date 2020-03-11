/* eslint-disable no-lone-blocks */
import React from 'react';

export default class ProductionListItem extends React.Component {
  render() {

    return (
      this.props.products.map((product, index) =>

        <div className="card" key={index}>
          <img src={product.image} alt={product.name} />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.price}</p>
            <p className="card-text">{product.shortDescription}</p>
          </div>

        </div>

      ));
  }
}
