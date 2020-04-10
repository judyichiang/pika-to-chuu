/* eslint-disable no-console */
import React from 'react';

export default class ProductionListItem extends React.Component {

  render() {

    return (

      <div className="card col-xl-3 col-lg-3 col-md-5 col-sm-12 col-xs-12 ml-4 mr-4 mt-4 pointer"
        onClick={() => this.props.setView('details',
          { productId: this.props.productId })} >
        <img className="card-img-top h-50" src={this.props.image} alt={this.props.name}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="text-secondary">${(this.props.price / Math.pow(10, 2)).toFixed(2)}</p>
          <p className="card-text">{this.props.shortDescription}</p>
        </div>
      </div>

    );
  }
}
