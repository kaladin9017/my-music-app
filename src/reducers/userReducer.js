import { FETCH_FEATURED_TRACKS } from '../actions/index';

export default function userReducer(state = [], action) {

  switch (action.type) {
    case FETCH_FEATURED_TRACKS:
      return action.payload
  }
  return state;
}
