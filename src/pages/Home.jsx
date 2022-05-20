import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';

function Home() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClick={(c) => console.log(c)}
          items={['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']}></Categories>
        <SortPopup items={['популярности', 'цене', 'алфавиту']}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {pizzas.map((p) => (
          <PizzaBlock key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}

export default Home;
