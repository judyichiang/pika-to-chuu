// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="card m-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img mt-3" src={props.image} alt={props.name} />
        </div>
        <div className="col-md-8">

          <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-subtitle text-muted">${(props.price / Math.pow(10, 2)).toFixed(2)}</p>
            <p className="card-text">{props.shortDescription}</p>
          </div>

        </div>
      </div>
    </div>

  );

}
