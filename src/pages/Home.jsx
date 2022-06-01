import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import SortPopup from '../components/SortPopup';
import PizzaLoadingBlock from '../components/PizzaBlock/PizzaLoadingBlock';

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const { category, sortBy } = useSelector(({ filters }) => filters);

  useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategory = useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const categoryNames = ['Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые'];
  const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'name' },
  ];

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeCategory={category}
          onClickItem={onSelectCategory}
          items={categoryNames}></Categories>
        <SortPopup
          activeSortItem={sortBy}
          onClickSortType={onSelectSortType}
          items={sortItems}></SortPopup>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((p) => <PizzaBlock key={p.id} {...p} isLoading={true} />)
          : Array(12)
              .fill()
              .map((_, idx) => <PizzaLoadingBlock key={idx} />)}
      </div>
    </div>
  );
}

export default Home;
