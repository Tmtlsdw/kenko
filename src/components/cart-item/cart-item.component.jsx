import React from "react";
import CartItemStyled from "./cart-item.styled.jsx";


const CartItemComponent = ({item: {imageUrl, price, name, quantity}}) => (
	<CartItemStyled>
		<img src={imageUrl} alt={"item"}/>
		<div className={"item-details"}>
			<span className={"name"}>{name}</span>
			<span className={"price"}>
        {quantity} x {price}€
      </span>
		</div>
	</CartItemStyled>
);
export default CartItemComponent