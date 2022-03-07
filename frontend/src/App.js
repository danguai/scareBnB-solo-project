import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from 'react-router-dom';

import SignupFormPage from "./components/SignUpFormPage";
import LoginFormPage from "./components/LoginFormPage";
import Navigation from "./components/Navigation";
import Splashpage from "./components/Splashpage";
import BookingFormPage from "./components/BookingFormPage";

import * as sessionActions from './store/session';

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path='/booking'>
            <BookingFormPage />
          </Route>
          <Route path='/login'>
            <LoginFormPage />
          </Route>
          <Route path='/signup'>
            <SignupFormPage />
          </Route>
          <Route>
            <Splashpage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
