import React from 'react';

export default function Header(props) {
  return (
    <header className="row">
      <div className="col-md pl-3 h1-center text-md-left"> <h3>{props.name}</h3> </div>
      <div className="col mt-2 h3-center text-md-right" onClick={() => {
        props.setView('cart', {});
      }} >{props.cartItemCount} Items <i className="fas fa-shopping-cart"></i>
      </div>

    </header>
  );
}
