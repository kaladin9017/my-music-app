import { CREATE_PLAYLIST } from '../actions/index';

export default function playlistReducer(state = [], action) {

  switch (action.type) {
    case CREATE_PLAYLIST:
      return action.payload
  }

  return state;
}
