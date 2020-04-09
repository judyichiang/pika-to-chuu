import React from 'react';

export default function Header(props) {
  return (
    <header className="row">
      <div className="col-md pl-3 h1-center text-md-left"> <h3>{props.name}</h3> </div>
      <div className="text-right pointer col-xl-2 col-lg-3 col-md-4 col-sm-4 col-xs-4 pr-4" onClick={() => {
        props.setView('cart', {});
      }} >{props.cartItemCount} Items <i className="fas fa-shopping-cart"></i>
      </div>

    </header>
  );
}
