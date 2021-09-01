import React, {Component} from 'react';


class CardProduct extends Component {

    state = {
        order: 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {

            this.handleCounterChange(this.state.order)
        })

    }

    handleMinus = () => {
        if(this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    render() {
        return(
            
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://etanee-images.s3-ap-southeast-1.amazonaws.com/162b2fde-5d95-4c9b-8b7b-691fbbf51d63" alt="ayam product" />
                    </div>
                    <p className="product-title">Daging Ayama Bumbu Samyang</p>
                    <p className="product-price">Rp. 34.000,00</p>
                    <div className="counter">
                        <button className="minus" onClick ={this.handleMinus} > - </button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick ={this.handlePlus}> + </button>
                    </div>
                </div>
            
        );
    }
}

export default CardProduct;