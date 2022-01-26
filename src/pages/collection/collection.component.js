import React from "react";
import { withRouter } from "../../components/withRouter";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";
import "./collection.styles.scss";

const CollectionPage = ({ params, collection }) => {
  console.log(collection);
  return (
    <div className='category'>
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.params.categoryId)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionPage));
