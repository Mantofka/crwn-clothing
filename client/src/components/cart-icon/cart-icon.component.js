import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import {
  CartIconContainer,
  IconShopping,
  ItemCountContainer,
} from "./cart-icon.styles";

const CartIcon = () => {
  const itemCount = useSelector(selectCartItemsCount);
  const dispatch = useDispatch();
  return (
    <CartIconContainer
      className='cart-icon'
      onClick={() => dispatch(toggleCartHidden())}
    >
      <IconShopping />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
  );
};

export default CartIcon;
