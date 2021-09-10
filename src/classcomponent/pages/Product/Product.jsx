import React, { Component, Fragment } from 'react';
import CardProduct from './CardProduct/CardProduct';
import './Product.css';
import { connect } from 'react-redux';

class Product extends Component {
  // state = {
  //   order: 4,
  // };

  // handleCounterChange = newValue => {
  //   this.setState({
  //     order: newValue,
  //   });
  // };

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
            <div className="count">{this.props.order}</div>
          </div>
        </div>
        <CardProduct
        // onCounterChange={value => this.handleCounterChange(value)}
        />
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.totalOrder,
  };
};

export default connect(mapStateToProps)(Product);
