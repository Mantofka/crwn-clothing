import React, { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "../../components/withRouter";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import { useDispatch } from "react-redux";
import Spinner from "../../components/spinner/spinner.component";
import { AnimatePresence } from "framer-motion";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const ItemPageContainer = lazy(() => import("../item/item.container"));

const ShopPage = ({ location }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStart());
  }, [dispatch]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route exact path={``} element={<CollectionsOverviewContainer />} />
            <Route
              path={`/:categoryId`}
              element={<CollectionPageContainer />}
            />
            <Route
              path={`/:categoryId/:itemId`}
              element={<ItemPageContainer key={location.pathname} />}
            />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </div>
  );
};

export default withRouter(ShopPage);
