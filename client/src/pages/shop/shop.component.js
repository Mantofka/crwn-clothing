import React, {useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "../../components/withRouter";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

const ShopPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);
  

    return (
      <div className='shop-page'>
        <Routes>
          <Route exact path={``} element={<CollectionsOverviewContainer />} />
          <Route path={`/:categoryId`} element={<CollectionPageContainer />} />
        </Routes>
      </div>
    );
}

export default withRouter(ShopPage);
