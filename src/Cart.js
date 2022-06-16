import { Component } from "react";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: 0,						// total
            price: 0,							// price
            keyboard1: 0,
            keyboard2: 0,
            keyboard3: 0
          }
    }

    render() {
        return(
            <div className="card summary mt-2">
                <div className="card-body summary-body">
                <h5>Total: 	  {this.state.price.toLocaleString("en-US")} <i className="fas fa-dollar-sign"></i></h5>
                <h5>Amount:   {this.state.amount} <i className="fas fa-shopping-cart"></i></h5> 
                    <div className="row">
                        <div className="col">
                            <button type="button" class="btn btn-light btn-block" onClick={this.checkOut}>Checkout</button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-outline-warning btn-block" onClick={this.clearItems}>Clear</button> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;