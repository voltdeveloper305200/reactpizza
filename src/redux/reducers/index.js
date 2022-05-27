import { combineReducers } from "redux";
import { filters as filtersReducers } from "./filters";
import { pizzas as pizzasReducers } from "./pizzas";

export const rootReducer = combineReducers({
  filters: filtersReducers,
  pizzas: pizzasReducers
})