import React, {memo} from 'react';
import {Route, Switch, Link} from "react-router-dom";
import Tabs from "../tabs/tabs.jsx";

const MovieDetailsNav = ({url, path}) => (
  <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className="movie-nav__item">
          <Link to={`${url}`} className="movie-nav__link">
          Overview
          </Link>
        </li>
        <li className="movie-nav__item">
          <Link to={`${url}/details`} className="movie-nav__link">
          Details
          </Link>
        </li>
        <li className="movie-nav__item">
          <Link to={`${url}/reviews`} className="movie-nav__link">
          Reviews
          </Link>
        </li>
      </ul>
    </nav>

    <div>
      <Switch>
        <Route exact path={`${path}`}>
          <Tabs />
        </Route>
        <Route path={`${path}/:tab`}>
          <Tabs />
        </Route>
      </Switch>
    </div>
  </div>
);

export default memo(MovieDetailsNav)
