// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="row">
      <div className="col-4">
        <img src={props.image} alt={props.name} />
      </div>
      <div className="col-8">
        <h5>{props.name}</h5>
        <p>{props.price}</p>
        <p>{props.props.shortDescription}</p>
      </div>
    </div>

  );

}
