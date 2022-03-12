import React, { useEffect, lazy, Suspense } from "react";

import { GlobalStyle } from "./global.styles";

import { Route, Routes, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selector";

import Header from "./components/header/header.component";
import { checkUserSession } from "./redux/user/user.actions";

import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/shop/*' element={<ShopPage />} />
            <Route exact path='/checkout' element={<CheckoutPage />} />
            <Route
              exact
              path='/signin'
              element={currentUser ? <Navigate to='/' /> : <SignInAndSignUp />}
            />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;
