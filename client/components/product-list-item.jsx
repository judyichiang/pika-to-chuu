/* eslint-disable no-console */
import React from 'react';

export default class ProductionListItem extends React.Component {

  render() {

    return (

      <div className="col-md-4 mb-3"
        onClick={() => this.props.setView('details', { productId: this.props.productId })} >
        <div className="card h-100 pointer">
          <img className="card-img-top h-50 mt-3" src={this.props.image} alt={this.props.name} />
          <div className="card-body px-5 pb-0 sizing">
            <h5 className="card-title ">{this.props.name}</h5>
            <p className="card-subtitle">${(this.props.price / Math.pow(10, 2)).toFixed(2)}</p>
            <p className="card-text">{this.props.shortDescription}</p>
          </div>
        </div>
      </div>

    );
  }
}
