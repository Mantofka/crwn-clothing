import React, { lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlock,
  Total,
  TestWarningContainer,
  Line,
} from "./checkout.styles";

import Spinner from "../../components/spinner/spinner.component";

const CheckoutItem = lazy(() =>
  import("../../components/checkout-item/checkout-item.component")
);
const StripeCheckoutButton = lazy(() =>
  import("../../components/stripe-button/stripe-button.component")
);

const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <CheckoutPageContainer>
      <Suspense fallback={<Spinner />}>
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
        <AnimatePresence>
          {cartItems.map((cartItem, id) => (
            <CheckoutItem key={id} cartItem={cartItem} />
          ))}
        </AnimatePresence>
        <Line />
        <Total>
          <span>TOTAL: {total} $</span>
        </Total>
        <TestWarningContainer>
          *Please use the following credit card for payments in order to test*
          <br />
          4242 4242 4242 4242 - Exp: 01/26 - CVV: 123
        </TestWarningContainer>
        <StripeCheckoutButton price={total} />
      </Suspense>
    </CheckoutPageContainer>
  );
};

export default CheckoutPage;
