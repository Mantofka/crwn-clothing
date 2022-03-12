import React from "react";

import {
  CartItemContainer,
  Image,
  ItemDetailsContainer,
  Text,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt='item' />
      <ItemDetailsContainer>
        <Text>{name}</Text>
        <Text>
          {quantity} x {price}$
        </Text>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
