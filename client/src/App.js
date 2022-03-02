import React, {useEffect} from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { selectCurrentUser } from "./redux/user/user.selector";

import ShopPage from "./pages/shop/shop.component";
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import { checkUserSession } from "./redux/user/user.actions";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);


    return (
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop/*' element={<ShopPage />} />
          <Route exact path='/checkout' element={<CheckoutPage />} />
          <Route
            exact
            path='/signin'
            element={
              currentUser ? <Navigate to='/' /> : <SignInAndSignUp />
            }
          />
        </Routes>
      </div>
    );
}

export default App;
