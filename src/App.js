import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Homepage from '../src/containers/Homepage/Homepage';
import Navigation from '../src/components/Navigation/Navigation';
import Footer from '../src/components/Footer/Footer';

import { ROUTES } from '../src/utils/constants';

import './App.scss';

function App() {
  return (
    <Fragment>
      <Router>
        <Navigation />
        <Route exact path={ROUTES.home} component={Homepage} />
        <Footer />
      </Router>
    </Fragment>
  );
}

export default App;
