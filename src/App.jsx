import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import { connect } from 'react-redux';
import { setPizzas } from './redux/actions/pizzas';

class App extends Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home items={this.props.items} />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

const mapDispatchToProps = {
  setPizzas,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
