import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from 'react-router-dom';

import SignupFormPage from "./components/SignUpFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";

import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  // }, [dispatch]);

  // return isLoaded && (
  return (
    <>
      <Navigation />
      <Switch>
        <Route path='/login'>
          <LoginFormPage />
        </Route>
        <Route path='/signup'>
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
