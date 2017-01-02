import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import SpotifySearchComponent from './components/SpotifySearch/SpotifySearchComponent';
import FeaturedTracksComponent from './components/Featured/FeaturedTracksComponent';
import { Router, browserHistory } from 'react-router';
import SoundCloudTracksComponent from './components/SoundCloud/SoundCloudTracksComponent';
import CreatePlaylistComponent from './components/playlist/CreatePlaylistComponent';
export default (
  <Route path="/" component={App}>
    <IndexRoute component={FeaturedTracksComponent} />
    <Route path="album" component={SpotifySearchComponent} />
    <Route path="soundcloud" component={SoundCloudTracksComponent} />
    <Route path="create" component={CreatePlaylistComponent} />
  </Route>
);
