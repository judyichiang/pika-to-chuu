/* eslint-disable no-console */
import React from 'react';

export default class ProductionListItem extends React.Component {

  render() {

    return (

      <div className="col-xl-3 col-lg-3 col-md-5 col-sm-12 col-xs-12 ml-4 mr-4 mt-4">
        <div className="card"
          onClick={() => this.props.setView('details',
            { productId: this.props.productId })}
        >
          <img src={this.props.image} alt={this.props.name} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">${(this.props.price / Math.pow(10, 2)).toFixed(2)}</p>
            <p className="card-text">{this.props.shortDescription}</p>
          </div>
        </div>

      </div>

    );
  }
}
