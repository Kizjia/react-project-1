import React from 'react';
import { useState } from 'react';

export default function Categories({ chooseCategory }) {
  const [categories, setCategories] = useState([
    {
      key: 'all',
      name: 'Всё',
    },
    {
      key: 'chairs',
      name: 'Стулья',
    },
    {
      key: 'tables',
      name: 'Столы',
    },
    {
      key: 'sofa',
      name: 'Диваны',
    },
    {
      key: 'light',
      name: 'Свет',
    },
  ]);
  return (
    <div className="categories">
      {categories.map((el) => (
        <div key={el.key} onClick={() => chooseCategory(el.key)}>
          {el.name}
        </div>
      ))}
    </div>
  );
}
