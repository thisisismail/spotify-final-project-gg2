const FetchSearch = async (token, search) => {
  return await fetch(`https://api.spotify.com/v1/search?q=${search}&type=track&limit=12`, { 
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
};

const FetchLogin = () => {
  const ID = process.env.REACT_APP_API_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  return `https://accounts.spotify.com/authorize?response_type=token&client_id=${ID}&scope=playlist-modify-private%20user-read-private&redirect_uri=${REDIRECT_URI}`;
}

const FetchUserID = async (token) => {
  return await fetch(`https://api.spotify.com/v1/me`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
};

const FetchCreateNewPlaylist = async (token, userID, newPlaylist) => {
  return await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
      method: 'POST',
      body: JSON.stringify(newPlaylist),
      headers: {
        Authorization: `Bearer ${token}`
      },
    })
};

const FetchInputTracksToPlaylist = async (token, playlistid, tracks) => {
    return await fetch(`https://api.spotify.com/v1/playlists/${playlistid}/tracks?uris=${tracks}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
    })
};


export {FetchSearch, FetchLogin, FetchUserID, FetchCreateNewPlaylist, FetchInputTracksToPlaylist};





