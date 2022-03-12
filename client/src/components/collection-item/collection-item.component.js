import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { useNavigate, useLocation } from "react-router-dom";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  Image,
  CollectionFooterContainer,
  Name,
  Price,
  AddButton,
} from "./collection-item.styles";

import { CollectionItemVariants } from "./collection-item.variants";

const CollectionItem = ({ item, title = "" }) => {
  const { name, price, imageUrl } = item;
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <CollectionItemContainer
      variants={CollectionItemVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      onClick={() =>
        navigate(
          `${location.pathname}/${title && title.toLowerCase() + "/"}${item.id}`
        )
      }
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Image className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer className='collection-footer'>
        <Name>{name}</Name>
        <Price>{price}$</Price>
      </CollectionFooterContainer>
      <AnimatePresence initial={false}>
        {isHovered && (
          <AddButton
            key='button'
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ y: -30, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 30,
              opacity: 1,
              transition: { type: "spring", stiffness: 700, damping: 70 },
            }}
            exit={{
              y: 30,
              opacity: 0,
              transition: { type: "spring", stiffness: 700, damping: 70 },
            }}
            onClick={() => dispatch(addItem(item))}
          >
            Add to cart
          </AddButton>
        )}
      </AnimatePresence>
    </CollectionItemContainer>
  );
};


export default CollectionItem;
