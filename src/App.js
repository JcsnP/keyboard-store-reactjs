// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import './style.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      price: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    
    let value = parseInt(event.target.value);
    let price = this.state.price;
    let amount = this.state.amount;
    this.setState({
      amount: amount + 1,
      price: price + value
    });
  }

  render() {
    return (
      <div className="container">
        <h3>Mechanical Keyboard</h3>
  
        <div className="row">

          <div className="col-sm-4">
            <div class="card">
              <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/269845945_123113830193959_5982488078570530859_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=XTZ60mjW7bIAX_ewykm&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8XLJoLziIpOG8pl4MUc6Zg0goQG53xIiq6DeXmnL8mKw&oe=61CE5450" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Keyboard XD</h5>
                <p class="card-text">$ 260</p>
                <button type="button" class="btn btn-primary btn-block" value="260" onClick={this.handleClick}>Buy Now!</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div class="card">
              <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/269845945_123113830193959_5982488078570530859_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=XTZ60mjW7bIAX_ewykm&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8XLJoLziIpOG8pl4MUc6Zg0goQG53xIiq6DeXmnL8mKw&oe=61CE5450" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Keyboard XD</h5>
                <p class="card-text">$ 300</p>
                <button type="button" class="btn btn-primary btn-block" value="300" onClick={this.handleClick}>Buy Now!</button>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div class="card">
              <img src="https://scontent-frx5-1.cdninstagram.com/v/t51.29350-15/269845945_123113830193959_5982488078570530859_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=XTZ60mjW7bIAX_ewykm&_nc_ht=scontent-frx5-1.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AT8XLJoLziIpOG8pl4MUc6Zg0goQG53xIiq6DeXmnL8mKw&oe=61CE5450" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Keyboard XD</h5>
                <p class="card-text">$ 350</p>
                <button type="button" class="btn btn-primary btn-block" value="350" onClick={this.handleClick}>Buy Now!</button>
              </div>
            </div>
          </div>  

        </div>

        <div class="card summary">
          <div class="card-body summary-body">
            <p>Total: {this.state.price}</p>
            <p>Amount: {this.state.amount}</p>  
          </div>
        </div>
      </div>
    );
  }
}

export default App;
