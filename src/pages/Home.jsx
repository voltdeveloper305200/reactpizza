import React from 'react';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(c) => console.log(c)}
          items={['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']}></Categories>
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((p) => (
          <PizzaBlock key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
