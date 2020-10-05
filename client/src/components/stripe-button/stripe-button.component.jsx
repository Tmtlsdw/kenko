import axios from "axios";
import React from "react";
import StripeCheckout from "react-stripe-checkout";


const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51HYKBZCExJzWYRrX5TNVtrRbxp4Z2ssCXQDDeTb0Jma2g8hpGkBf9iopScigLyY8RMD8RFMgojzngBZF6mdYZLYd00HLAIesEh";
	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token,
			},

		}).then(response => {
			alert("Payment successful");
		}).catch(error => {
			console.log("Payment error: ", JSON.parse(error));
			alert("Payment failed, be sure to use the provided AMEX.");
		});
	};

	return (
		<StripeCheckout
			currency={"EUR"}
			label={"Pay here"}
			name={"Kenko"}
			billingAddress
			shippingAddress
			image={"https://sendeyo.com/up/d/f3eb2117da"}
			description={`Your total is ${price}€`}
			amont={priceForStripe}
			panelLabel={`Pay ${price}€`}
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
