import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
  CollectionPreviewContainer,
  Title,
  PreviewContainer,
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <Title>{title.toUpperCase()}</Title>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} title={title} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
