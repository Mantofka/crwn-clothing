import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";
import { useParams } from "react-router-dom";

import {
  CollectionPageContainer,
  Title,
  ItemsContainer,
} from "./collection.styles";
import Spinner from "../../components/spinner/spinner.component";

const CollectionItem = lazy(() =>
  import("../../components/collection-item/collection-item.component")
);

const CollectionPage = () => {
  const { categoryId } = useParams();
  const collection = useSelector(selectCollection(categoryId));

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <Suspense fallback={<Spinner />}>
        <Title>{title}</Title>
        <ItemsContainer>
          {items.map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </ItemsContainer>
      </Suspense>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
