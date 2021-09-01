import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';

class Product extends Component {
  state = {
    order: 4,
  };

  handleCounterChange = newValue => {
    this.setState({
      order: newValue,
    });
  };

  render() {
    return (
      <>
        <p>Product Name</p>
        <hr />
        <div className="header">
          <div className="logo">
            <img src="" alt="logo" />
          </div>
          <div className="trolley">
            <img src="" alt="trolley" />
            <div className="count">{this.state.order}</div>
          </div>
        </div>
        <CardProduct
          onCounterChange={value => this.handleCounterChange(value)}
        />
      </>
    );
  }
}

export default Product;
