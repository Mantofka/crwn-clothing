import React, { useCallback, useState } from "react";
import { selectItemFromCollection } from "../../redux/shop/shop.selectors";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { addItem } from "../../redux/cart/cart.actions";

import {
  ImageVariants,
  InfoOrchestrationVariants,
  InfoDetailVariants,
  SupportingDetailsVariants,
  ExitButtonVariants,
  TextVariants,
} from "./item.variants";

import {
  ItemPageContainer,
  Image,
  Title,
  Description,
  Price,
  InfoContainer,
  SupportingDetails,
  AddButton,
  ExitButton,
  Text,
} from "./item.styles";

const ItemPage = () => {
  const [isPressed, setIsPressed] = useState(false);
  const { categoryId, itemId } = useParams();
  const item = useSelector(selectItemFromCollection(categoryId, itemId));
  const { imageUrl, price, name } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePress = useCallback(() => {
    setIsPressed(true);
    setTimeout(() => {
      setIsPressed(false);
    }, 1000);
  }, []);

  return (
    <ItemPageContainer>
      <Image
        variants={ImageVariants}
        initial='hidden'
        animate='show'
        src={imageUrl}
        alt={name}
      />
      <InfoContainer
        variants={InfoOrchestrationVariants}
        initial='hidden'
        animate='visible'
      >
        <Title variants={InfoDetailVariants}>{name}</Title>
        <SupportingDetails variants={SupportingDetailsVariants}>
          Price:
        </SupportingDetails>
        <Price variants={InfoDetailVariants}>$ {price},00</Price>
        <SupportingDetails variants={SupportingDetailsVariants}>
          Description:
        </SupportingDetails>
        <Description variants={InfoDetailVariants}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Description>
        <AddButton
          onClick={() => dispatch(addItem(item))}
          onTapStart={handlePress}
        >
          <Text
            variants={TextVariants}
            initial='still'
            animate={isPressed ? "active" : "still"}
          >
            Add To Cart
          </Text>
        </AddButton>
      </InfoContainer>
      <ExitButton
        variants={ExitButtonVariants}
        initial='passive'
        whileHover='active'
        onClick={() => navigate(-1)}
      >
        &#10005;
      </ExitButton>
    </ItemPageContainer>
  );
};

export default ItemPage;
