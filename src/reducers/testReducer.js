const initialState = {
  data : 42
};

import { FETCH_ALBUM } from '../actions/index';

export default function testReducer(state = [], action) {
  switch (action.type) {
    case FETCH_ALBUM:
      return action.payload
  }
  return state;
}
