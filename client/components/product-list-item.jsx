/* eslint-disable no-lone-blocks */
import React from 'react';

export default class ProductionListItem extends React.Component {
  render() {
    return (
      <div className="card" style="width: 18rem" >
        <img src={this.props.image} alt={this.props.name}/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.price}</p>
          <p className="card-text">{this.props.shortDescription}</p>
        </div>

      </div>
    );
  }
}

{ /* <div className="col-sm" >
  <img src={this.props.image} alt={this.props.name} />
  <h3>{this.props.name}</h3>
  <p>{this.props.price}</p>
  <p>{this.props.shortDescription}</p>
</div> */ }
