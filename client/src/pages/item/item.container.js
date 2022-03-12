import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import ItemPage from "./item.component";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const ItemPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ItemPage);

export default ItemPageContainer;
