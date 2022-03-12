import React, {lazy, Suspense} from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import Spinner from "../spinner/spinner.component";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionPreview = lazy(() => import("../preview-collection/collection-preview.component"));

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer className='collections-overview'>
      <Suspense fallback={<Spinner />}>
      {collections.map(({ id, ...restProps }) => (
        <CollectionPreview key={id} {...restProps} />
      ))}
      </Suspense>
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
