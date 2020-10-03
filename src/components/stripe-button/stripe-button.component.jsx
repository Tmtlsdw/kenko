import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HSmv9IRVfj47VgK57Ad1KRSRvhqpL1Ns402igPIDdcApB6gfiiZcV92JUUv7tzpbhAxB6Fsc18jhM2jlmN4AcNg00wsFPYFPB";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful.");
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
