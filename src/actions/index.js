import axios from 'axios';

export const FETCH_ALBUM = "FETCH_ALBUM"
export const FETCH_FEATURED_TRACKS = "FETCH_FEATURED_TRACKS";

const API_KEY = '114fa2b39c2f07b3041f7432b6181566';
const usr ="kaladin9017"


export function fetchAlbum (artist) {
  artist= artist.split(' ').join('+')
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${API_KEY}&format=json`;

  const request = axios.get(url)

  return {
    type: FETCH_ALBUM,
    payload: request
  }
}

export function fetchFeaturedTracks () {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${usr}&api_key=${API_KEY}&format=json`;

  const request = axios.get(url)

  return {
    type: FETCH_FEATURED_TRACKS,
    payload: request
  }
}
