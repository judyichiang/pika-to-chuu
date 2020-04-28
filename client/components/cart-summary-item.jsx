// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="card card-body mb-2">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img className="card-img mt-1" src={props.image} alt={props.name} />
        </div>
        <div className="col-md-8">

          <h5 className="card-title">{props.name}</h5>
          <p className="card-subtitle text-muted">${(props.price / Math.pow(10, 2)).toFixed(2)}</p>
          <p className="card-text">{props.shortDescription}</p>
          <button type="button" className="btn btn-danger" onClick={() => props.deleteItem(props.cartItemId)}>Delete</button>
        </div>

      </div>
    </div>

  );

}
