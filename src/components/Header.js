import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import Order from './Order';

export default function Header({ orders, onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);

  const showOrders = (orders) => {
    // let summa = orders.reduce((acc, i) => acc + i, 0);
    return (
      <div>
        {orders.map((el) => (
          <Order onDelete={onDelete} key={el.id} item={el} />
        ))}
        <p className="summa">
          {' '}
          Сумма:{' '}
          {new Intl.NumberFormat().format(
            orders.reduce((acc, el) => acc + Number.parseFloat(el.price), 0)
          )}
        </p>
      </div>
    );
  };

  const showNothing = () => {
    return (
      <div className="empty">
        <h2>Товаров нет</h2>
      </div>
    );
  };
  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <CiShoppingCart
          onClick={() => setCartOpen((cartOpen = !cartOpen))}
          className={`shop-cart-button ${cartOpen && 'active'}`}
        />

        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? showOrders(orders) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
