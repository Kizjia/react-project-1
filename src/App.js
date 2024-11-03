import React, { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Items from './components/Items';
import Categories from './components/Categories';
import ShowFullItem from './components/ShowFullItem';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Диван',
      img: 'sofa.jpeg',
      decs: 'lorem ipsun dfole djia dkfdoaf, djfija-fka',
      category: 'sofa',
      price: '20.99',
    },
    {
      id: 2,
      title: 'Стул белый',
      img: 'chair-white.jpeg',
      decs: 'lorem ipsun dfole djia dkfdoaf, djfija-fka',
      category: 'chairs',
      price: '49.99',
    },
    {
      id: 3,
      title: 'Свет',
      img: 'wall-light.jpeg',
      decs: 'lorem ipsun dfole djia dkfdoaf, djfija-fka',
      category: 'light',
      price: '49.99',
    },
    {
      id: 4,
      title: 'Стул серый',
      img: 'chair-grey.jpeg',
      decs: 'lorem ipsun dfole djia dkfdoaf, djfija-fka',
      category: 'chairs',
      price: '49.99',
    },
    {
      id: 5,
      title: 'Стол',
      img: 'table.webp',
      decs: 'lorem ipsun dfole djia dkfdoaf, djfija-fka',
      category: 'tables',
      price: '59.99',
    },
  ]);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showFullItem, setShowFullItem] = useState(false);
  const [FullItem, setFullItem] = useState({});

  function chooseCategory(category) {
    if (category === 'all') {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter((el) => el.category === category));
  }

  function deleteOrder(id) {
    setOrders(orders.filter((el) => el.id !== id));
  }

  function addToOrder(item) {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id == item.id) isInArray = true;
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  }

  function onShowItem(item, addToOrder, onShowItem) {
    setFullItem(item);
    setShowFullItem(!showFullItem);
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories chooseCategory={chooseCategory} />
      <Items onShowItem={onShowItem} items={currentItems} onAdd={addToOrder} />

      {showFullItem && (
        <ShowFullItem
          item={FullItem}
          onAdd={addToOrder}
          onShowItem={onShowItem}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
