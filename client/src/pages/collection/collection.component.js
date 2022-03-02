import React from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";

import CollectionItem from "../../components/collection-item/collection-item.component";

import {
  CollectionPageContainer,
  Title,
  ItemsContainer,
} from "./collection.styles";

const CollectionPage = () => {
  const { categoryId } = useParams();
  const collection = useSelector(selectCollection(categoryId));

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Title>{title}</Title>
      <ItemsContainer>
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
