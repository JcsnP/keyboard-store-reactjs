// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './style.css';

class App extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  amount: 0,					// price
	  price: 0,							// total
	  keyboard1: 0,
	  keyboard2: 0,
	  keyboard3: 0,
	  cart: [
		
	  ],
	}

	this.handleClick = this.handleClick.bind(this);
	this.clearItems = this.clearItems.bind(this);
	this.checkOut = this.checkOut.bind(this);
  }

  handleClick(event) {
	event.preventDefault();

	let name = event.target.name;
	let value = parseInt(event.target.value);
	let cartItem = name === 'keyboard1' ? 'Gradient' : name === 'keyboard2' ? 'Sweet Candy' : 'Halloween';
	let newItem = {
		name: cartItem,
		price: value,
		id: Date.now()
	}
	
	this.setState({
		amount: this.state.amount + 1,
		price: this.state.price + value,
		[name]: this.state[name] + 1,
	})

	this.setState(state => ({
		cart: state.cart.concat(newItem)
	}));
  }

  clearItems() {
	console.log("clear");
		this.setState({
		amount: 0,
		price: 0,
		keyboard1: 0,
		keyboard2: 0,
		keyboard3: 0,
		cart: [							// clear items in cart

		]
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

		  <div className="col-12 col-sm-4">
			<div className="card">
			  <img src={require('./assets/kb1.jpg')} className="card-img-top" alt="..." />
			  <div className="card-body">
				<h5 className="card-title">V3 Mechanical Keyboard - Gradient</h5>
				<p className="card-text price">$ 260</p>
				<p>Quantity: {this.state.keyboard1}</p>
				<button type="button" className="btn btn-primary btn-block" name="keyboard1" value="260" onClick={this.handleClick}>Buy Now!</button>
			  </div>
			</div>
		  </div>

		  <div className="col-12 col-sm-4">
			<div className="card">
			  <img src={require('./assets/kb2.jpg')}  className="card-img-top" alt="..." />
			  <div className="card-body">
				<h5 className="card-title">V3 Mechanical Keyboard - Sweet Candy</h5>
				<p className="card-text price">$ 300</p>
				<p>Quantity: {this.state.keyboard2}</p>
				<button type="button" className="btn btn-primary btn-block" name="keyboard2" value="300" onClick={this.handleClick}>Buy Now!</button>
			  </div>
			</div>
		  </div>

		  <div className="col-12 col-sm-4">
			<div className="card">
			  <img src={require('./assets/kb3.jpg')} className="card-img-top" alt="..." />
			  <div className="card-body">
				<h5 className="card-title">V3 Mechanical Keyboard - Halloween</h5>
				<p className="card-text price">$ 350</p>
				<p>Quantity: {this.state.keyboard3}</p>
				<button type="button" className="btn btn-primary btn-block" name="keyboard3" value="350" onClick={this.handleClick}>Buy Now!</button>
			  </div>
			</div>
		  </div>  

		</div>

		<div className="card summary mt-2">
		<div className="card-body summary-body">
		  <h5>Total: 	  {this.state.price} <i className="fas fa-dollar-sign"></i></h5>
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
	  </div>
	);
  }
}

export default App;

// 63102230 Chitsanupong Paenyoi
// 63114607 Sarith Issara