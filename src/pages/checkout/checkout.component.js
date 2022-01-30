import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  Total,
  TestWarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeaderContainer>
      {cartItems.map((cartItem, id) => (
        <CheckoutItem key={id} cartItem={cartItem} />
      ))}

      <Total>
        <span>TOTAL: {total} $</span>
      </Total>
      <TestWarningContainer>
        *Please use the following credit card for payments in order to test*
        <br />
        4242 4242 4242 4242 - Exp: 01/26 - CVV: 123
      </TestWarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
