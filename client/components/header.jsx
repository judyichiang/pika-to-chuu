import React from 'react';

export default function Header(props) {
  return (
    <header className="container-lg p-3 px-5 text-white bg-dark">
      <span className="font-weight-bold">{props.name}</span>
      <span className="float-right pointer " onClick={() => {
        props.setView('cart', {});
      }} >{props.cartItemCount} Items <i className="fas fa-shopping-cart"></i>
      </span>

    </header>
  );
}
