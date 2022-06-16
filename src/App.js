// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './style.css';
import data from './Items';
import ItemCard from './ItemCard';

class App extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  amount: 0,					// total
	  price: 0,							// price
	  keyboard1: 0,
	  keyboard2: 0,
	  keyboard3: 0
	}

	this.handleClick = this.handleClick.bind(this);
	this.clearItems = this.clearItems.bind(this);
	this.checkOut = this.checkOut.bind(this);
  }

  handleClick(event) {
	event.preventDefault();

	let name = event.target.name;
	let value = parseInt(event.target.value);
	
	this.setState({
		amount: this.state.amount + 1,
		price: this.state.price + value,
		[name]: this.state[name] + 1,
	})
  }

  clearItems() {
	console.log("clear");
		this.setState({
		amount: 0,
		price: 0,
		keyboard1: 0,
		keyboard2: 0,
		keyboard3: 0
	});
  }

  checkOut() {
	  alert("จ่ายด้วยเกรด A เท่านั้น");
  }

  render() {
	  // console.log(this.state.keyboard1, this.state.keyboard2, this.state.keyboard3, this.state.amount);
	return (
	  <div className="container">
		<h3>Mechanical Keyboard</h3>

		<div className="row">
		{data.product.map((item, index) => {
					return(
						<ItemCard title={item.title} img={item.img} price={item.price} quantity={item.quantity} key={index} />
					)
				})}
		</div>		 

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

export default App;

// 63102230 Chitsanupong Paenyoi
// 63114607 Sarith Issara