import React from 'react';

export default function ShowFullItem({ item, onAdd, onShowItem }) {
  return (
    <div className="full-item">
      <div>
        <img
          src={'./img/' + item.img}
          onClick={() => onShowItem(item, onAdd, onShowItem)}
        />
        <h2>{item.title}</h2>
        <p>{item.decs}</p>
        <b>{item.price}$</b>
        <div className="add-to-cart" onClick={() => onAdd(item)}>
          +
        </div>
      </div>
    </div>
  );
}
