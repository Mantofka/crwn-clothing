import React from "react";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "../../components/withRouter";
import { updateCollections } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import WithSpinner from "../../components/with-spinner/with-spinner.component";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");

    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        updateCollections(collectionsMap);
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Routes>
          <Route
            exact
            path={``}
            element={<CollectionsOverviewWithSpinner isLoading={loading} />}
          />
          <Route
            path={`/:categoryId`}
            element={<CollectionPageWithSpinner isLoading={loading} />}
          />
        </Routes>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default withRouter(connect(null, mapDispatchToProps)(ShopPage));
