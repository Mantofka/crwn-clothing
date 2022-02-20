import React from "react";

import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Arrow,
  Value,
  RemoveButton,
  Text,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt='item' />
      </ImageContainer>
      <Text>{name}</Text>
      <Text quantity>
        <Arrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>
      </Text>

      <Text>{price} $</Text>
      <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
