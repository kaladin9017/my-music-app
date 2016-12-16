import axios from 'axios';

export const FETCH_ALBUM = "FETCH_ALBUM"
const API_KEY = '114fa2b39c2f07b3041f7432b6181566';
const ROOT_URL = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=Awaken,+My+Love&api_key=${API_KEY}&format=json`;


export function fetchAlbum () {
  const url = ROOT_URL;
  const request = axios.get(url)

  return {
    type: FETCH_ALBUM,
    payload: request
  }
}
