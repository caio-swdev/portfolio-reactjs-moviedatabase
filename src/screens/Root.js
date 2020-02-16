import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ScreensMovieList from "./Movie/List";
import ScreensMovieDetail from "./Movie/Detail";
import Navbar from "../components/Navbar";

const ScreensRoot = () => (
  <div style={{ height: "100%" }}>
    <Router basename="/movies">
      <Navbar />
      <Switch>
        <Route exact path="/" component={ScreensMovieList} />
        <Route exact path="/:movie" component={ScreensMovieDetail} />
      </Switch>
    </Router>
  </div>
);

export default ScreensRoot;
