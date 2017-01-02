import {combineReducers} from "redux";

import playlistReducer from './playlistReducer';
import testReducer from "./testReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  test : testReducer,
  userTracks : userReducer,
  playlists : playlistReducer
});

export default rootReducer;
