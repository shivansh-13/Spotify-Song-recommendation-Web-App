const BASE_URL = "https://api.spotify.com/v1"

// uses Spotify's Search API to search tracks by track name and artist
const searchArtists = async (http, { artist1 }) => {

  const config = {
  method: 'get',
  url:`${BASE_URL}/search?type=artist&q=${artist1}`
};
 
  return http(config).then((res) => res.data);
}
const searchArtists2 = async (http, { artist2 }) => {

  const config = {
  method: 'get',
  url:`${BASE_URL}/search?type=artist&q=${artist2}`
};
  
  return http(config).then((res) => res.data);
  
}
const searchArtists3 = async (http, { artist3 }) => {

  const config = {
  method: 'get',
  url:`${BASE_URL}/search?type=artist&q=${artist3}`
};
  
  return http(config).then((res) => res.data);
  
}


/// uses Spotify's Browse API to get song recommendations
const getRecommendations = async (http,  artistId1,artistId2,artistId3 ) => { 
  console.log(artistId1)
  
  const config = {
    method: 'get',
    url: `${BASE_URL}/recommendations?seed_artists=${artistId1},${artistId2},${artistId3}`
  };
  
  return http(config).then((res) => res.data);
}

module.exports = { searchArtists, searchArtists2, searchArtists3, getRecommendations }