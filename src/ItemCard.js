import React, { Component } from "react";

class ItemCard extends Component {
	constructor(props) {
		super(props);
		this.state = props;
		this.test = this.test.bind(this);
	}

	test() {
		
	}

	render() {
		return(
			<>
				<div className="col-sm-4">
					<div className="card">
						<img src={this.state.img} className="card-img-top" alt="kb1" />
						<div className="card-body">
							<h5 className="card-title">{this.state.title}</h5>
							<p className="card-text price">$ {this.state.price}</p>
							<p>Quantity {this.state.quantity}</p>
							<button type="button" className="btn btn-primary btn-block" name={this.state.title} value={this.state.price} onClick={this.test}>Buy Now!</button>
						</div>
					</div>
				</div>
			</>
		);
	}
}

/*
const ItemCard = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card">
			  <img src={props.img} className="card-img-top" alt="kb1" />
			  <div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text price">$ {props.price}</p>
                <p>Quantity {props.quantity}</p>
				<button type="button" className="btn btn-primary btn-block" name={props.title} value={props.price} onClick={this.test}>Buy Now!</button>
			  </div>
			</div>
        </div>
    );
}
*/

export default ItemCard;