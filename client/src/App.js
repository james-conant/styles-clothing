import React, { useEffect, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ErrorBoundry from "./components/error-boundry/error-boundry.component";

import { GlobalStyles } from "./global.styles";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
const HomePage = lazy(() => import("./pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUp = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up.component")
);
const CheckoutPage = lazy(() =>
  import("./components/checkout/checkout.component")
);

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  console.log(currentUser);

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <ErrorBoundry>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout" component={CheckoutPage} />

            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
              }
            />
          </Switch>
        </Suspense>
      </ErrorBoundry>
    </div>
  );
};

export default App;
