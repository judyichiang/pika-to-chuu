import React from 'react';

export default class ProductionListItem extends React.Component {
  render() {

    return (

      <div className="col-4 mb-4">
        <div className="card">
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
