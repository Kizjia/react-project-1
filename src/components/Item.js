import React from 'react';

export default function Item({ item, onAdd, onShowItem }) {
  console.log(`'item': ${item}`);
  return (
    <div className="item">
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
  );
}
