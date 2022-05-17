import React, { useState } from 'react';

function Categories({ items, onClick }) {
  const [activeItem, setActiveItem] = useState(0);

  const onSelectItem = (index) => {
    setActiveItem(index);
  };

  return (
    <div className="categories">
      <ul>
        {/* <li className="active">Все</li> */}
        {items &&
          items.map((c, idx) => (
            <li
              className={activeItem === idx ? 'active' : ''}
              onClick={() => onSelectItem(idx)}
              key={`${c}_${idx}`}>
              {c}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
