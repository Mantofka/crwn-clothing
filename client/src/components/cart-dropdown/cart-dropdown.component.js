import React, {lazy, Suspense} from "react";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMessage,
} from "./cart-dropdown.styles";
import Spinner from "../spinner/spinner.component";

const CustomButton = lazy(() => import("../custom-bottom/custom-button.component"));
const CartItem = lazy(() => import("../cart-item/cart-item.component"));

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <CartDropdownContainer>
      <Suspense fallback={<Spinner />}>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItemsContainer>
      <CustomButton
        onClick={() => {
          navigate("./checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
      </Suspense>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
