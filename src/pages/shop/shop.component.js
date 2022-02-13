import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "../../components/withRouter";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = ({fetchCollectionsStart}) => {

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  

    return (
      <div className='shop-page'>
        <Routes>
          <Route exact path={``} element={<CollectionsOverviewContainer />} />
          <Route path={`/:categoryId`} element={<CollectionPageContainer />} />
        </Routes>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
