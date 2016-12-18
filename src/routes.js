import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import AlbumSearchComponent from './components/AlbumSearch/AlbumSearchComponent';
import FeaturedTracksComponent from './components/Featured/FeaturedTracksComponent';
import { Router, browserHistory } from 'react-router';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={FeaturedTracksComponent} />
    <Route path="album" component={AlbumSearchComponent} />
  </Route>
);
