import React, { Component } from 'react';
import Counter from './Counter';

class CardProduct extends Component {
  render() {
    return (
      <div className="card">
        <div className="img-thumb-prod">
          <img
            src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/162b2fde-5d95-4c9b-8b7b-691fbbf51d63"
            alt="ayam product"
          />
        </div>
        <p className="product-title">Daging Ayama Bumbu Samyang</p>
        <p className="product-price">Rp. 34.000,00</p>
        <Counter
        // onCounterChange={value => this.props.onCounterChange(value)}
        />
      </div>
    );
  }
}

export default CardProduct;
