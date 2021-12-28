// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './style.css'

class App extends Component {
  constructor(props) {
	super(props);
	this.state = {
	  amount: 0,
	  price: 0,
	  keyboard1: 0,
	  keyboard2: 0,
	  keyboard3: 0
	}
	this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
	event.preventDefault();
	
	let name = event.target.name;
	let value = parseInt(event.target.value);
	this.setState({
		amount: this.state.amount + 1,
		price: this.state.price + value,
		[name]: this.state[name] + 1
	})
	
	console.log(name, value, this.state.keyboard1);
  }

  render() {
	return (
	  <div className="container">
		<h3>Mechanical Keyboard</h3>
  
		<div className="row">

		  <div className="col-12 col-sm-4">
			<div class="card">
			  <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/264526942_330829168514002_1249309576758359862_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=MWyQzvEiLRAAX-KfYQB&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8zsu5Eh34KlcnH7gZvdnaNK8MvpArE3rcp9okTLNprtQ&oe=61D02FE6" class="card-img-top" alt="..." />
			  <div class="card-body">
				<h5 class="card-title">V3 Mechanical Keyboard - Gradient</h5>
				<p class="card-text price">$ 260</p>
				<p>Quantity: {this.state.keyboard1}</p>
				<button type="button" class="btn btn-primary btn-block" name="keyboard1" value="260" onClick={this.handleClick}>Buy Now!</button>
			  </div>
			</div>
		  </div>

		  <div className="col-12 col-sm-4">
			<div class="card">
			  <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/249408203_408305084119115_4935847234732016134_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=jxlnJdGKkZ4AX-LApex&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-BZSWCM8D4Yj0UgDGuVpR9t2PrLHi0FkcQ7Zdm6q71-g&oe=61CF33E4" class="card-img-top" alt="..." />
			  <div class="card-body">
				<h5 class="card-title">V3 Mechanical Keyboard - Sweet Candy</h5>
				<p class="card-text price">$ 300</p>
				<p>Quantity: {this.state.keyboard2}</p>
				<button type="button" class="btn btn-primary btn-block" name="keyboard2" value="300" onClick={this.handleClick}>Buy Now!</button>
			  </div>
			</div>
		  </div>

		  <div className="col-12 col-sm-4">
			<div class="card">
			  <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/253405796_844561252905439_876426436679273526_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=I7abqZ-T46YAX9dON0E&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT-e7hF1FHLUQmohayAnyFnMxs--WRE1yWiaejXzEjrkVw&oe=61CFCBB6" class="card-img-top" alt="..." />
			  <div class="card-body">
				<h5 class="card-title">V3 Mechanical Keyboard - Halloween</h5>
				<p class="card-text price">$ 350</p>
				<p>Quantity: {this.state.keyboard3}</p>
				<button type="button" class="btn btn-primary btn-block" name="keyboard3" value="350" onClick={this.handleClick}>Buy Now!</button>
			  </div>
			</div>
		  </div>  

		</div>

		<div class="card summary mt-2">
		  <div class="card-body summary-body">
			<h5>Total: {this.state.price} <i class="fas fa-dollar-sign"></i></h5>
			<h5>Amount: {this.state.amount} <i class="fas fa-shopping-cart"></i></h5>  
		  </div>
		</div>
	  </div>
	);
  }
}

export default App;
