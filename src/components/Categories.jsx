import React from 'react';

const Categories = React.memo(function Categories({ activeCategory, items, onClickItem }) {
  const onSelectItem = (index) => {
    onClickItem(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickItem(null)}>
          Все
        </li>
        {items &&
          items.map((c, idx) => (
            <li
              className={activeCategory === idx ? 'active' : ''}
              onClick={() => onSelectItem(idx)}
              key={`${c}_${idx}`}>
              {c}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Categories;
