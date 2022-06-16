import React from "react";

const ItemCard = (props) => {
    return (
        <div className="col-sm-4">
            <div className="card">
			  <img src={props.img} className="card-img-top" alt="kb1" />
			  <div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text price">$ {props.price}</p>
                <p>Quantity {props.quantity}</p>
				<button type="button" className="btn btn-primary btn-block" name={props.title} value={props.price}>Buy Now!</button>
			  </div>
			</div>
        </div>
    );
}

export default ItemCard;