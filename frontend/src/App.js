import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { Switch, Route } from 'react-router-dom';

import Navigation from "./components/Navigation";
import Splashpage from "./components/Splashpage";
import BookingFormPage from "./components/BookingFormPage";
import PlacesPage from "./components/PlacesPage";
import OnePlacePage from "./components/OnePlacePage";

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
          <Route exact path='/'>
            <Splashpage />
          </Route>
          <Route path='/booking'>
            <BookingFormPage />
          </Route>
          <Route path='/places/:id'>
            <OnePlacePage />
          </Route>
          <Route exact path='/places'>
            <PlacesPage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
