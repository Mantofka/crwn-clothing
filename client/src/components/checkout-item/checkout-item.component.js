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
  TextAbsolute,
} from "./checkout-item.styles";

const ItemVariants = {
  intial: { x: -50 },
  animate: { x: 0 },
  exit: {
    y: [10, -30],
    zIndex: -10,
    opacity: [1, 0],
    transition: { ease: [0.17, 0.67, 0.83, 0.67], delay: 0.1 },
  },
};

const RemoveVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.2 },
  tap: { scale: 0.85 },
};

const CheckoutItem = ({ cartItem }) => {
  const { name, price, quantity, imageUrl } = cartItem;
  const dispatch = useDispatch();

  return (
    <CheckoutItemContainer
      variants={ItemVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <ImageContainer>
        <Image src={imageUrl} alt='item' />
        <TextAbsolute>{quantity}</TextAbsolute>
      </ImageContainer>
      <Text>{name}</Text>
      <Text quantity>
        <Arrow onClick={() => dispatch(removeItem(cartItem))}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={() => dispatch(addItem(cartItem))}>&#10095;</Arrow>
      </Text>

      <Text>{price},00 $</Text>
      <RemoveButton
        variants={RemoveVariants}
        initial='initial'
        whileHover='hover'
        whileTap='tap'
        onClick={() => dispatch(clearItemFromCart(cartItem))}
      >
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
