import StripeCheckout from "react-stripe-checkout";
import React from "react";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HRgpBHfLxiXD6kXl5pNsalZn5xVqQXDsFWZWrd3hexX82jTmn37zygqlK1cYSnEAqHPAodpOw021GDrfLAfmNCD00gEBx7dfH";

  const onToken = (token) => {
    axios({
      url: "http://localhost:5050/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((res) => {
        alert("Payment successful!");
      })
      .catch((error) => {
        console.log("Payment error: ", JSON.parse(error));
        alert(
          "Payment unsuccessful. Please check your written card details once again."
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
