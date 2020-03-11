import React from 'react';

export default class ProductionListItem extends React.Component {
  render() {
    return (
      <div className="col-sm" >
        <img src={this.props.image} alt={this.props.name}/>
        <h3>{this.props.name}</h3>
        <p>{this.props.price}</p>
        <p>{this.props.shortDescription}</p>
      </div>
    );
  }
}
