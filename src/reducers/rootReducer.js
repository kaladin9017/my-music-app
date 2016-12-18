import {combineReducers} from "redux";

import testReducer from "./testReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  test : testReducer,
  userTracks : userReducer,
});

export default rootReducer;
