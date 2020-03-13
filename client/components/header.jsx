import React from 'react';

export default function Header(props) {
  return (
    <header className="container">
      <div> <h3>{props.name}</h3> </div>
      <div>

        <i className="fas fa-shopping-cart"></i>
      </div>

    </header>
  );
}
