import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KI2OmIbTAKFcH5GkNhBcYxtE6MShCK5gpoMW3NI22zZhPswHBCM4NQQOLgKMUbUP2yzdsCELT5ndCCI77KksAOM00kCuoGFAV";
  let onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="SeedCrunch Ltd."
      billingAddress
      shippingAddress
      image="https://svgsilh.com/svg_v2/152207.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
