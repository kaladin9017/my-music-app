import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import AlbumSearchComponent from './components/AlbumSearch/AlbumSearchComponent';
import { Router, browserHistory } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute path="home" component={AlbumSearchComponent} />
    <Route path="portfolio" component={AlbumSearchComponent} />
  </Route>
);
