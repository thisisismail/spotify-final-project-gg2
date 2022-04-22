/* eslint-disable react-hooks/exhaustive-deps */
import './styles/index.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { Alert, Dialog} from '@mui/material';
import {FetchUserID, FetchCreateNewPlaylist, FetchInputTracksToPlaylist} from '../../API-call/index.js';
import actions from '../../store/redux/actions/index.js';

const PlaylistCard = (props) => {

  // const albumItems = selectedsongTitle.map((v) => {
  //   return(<div key={v}>{v}</div>)
  // })
  const [playlistid, setPlaylistid] = useState('');
  const [playlist, setPlaylist] = useState({
    title: '',
    description: '',
    button: false,
  });

  useEffect(() => {
    createNewPlaylist()
  }, [props.userIDFromRedux])

  useEffect(() => {
    inputToPlaylist()
  }, [playlistid])

  const getUserID = (e) => {
    if(props.tokenFromRedux === ''){return 0}
    e.preventDefault();
    FetchUserID(props.tokenFromRedux)
      .then(response => response.json())
      .then(result => {props.storeUserIDToRedux(result.id); console.log(result.id)})
  }

  const createNewPlaylist = async () => {
    if(props.userIDFromRedux === ''){return 0}
    let newP = {
      "name": playlist.title,
      "description": playlist.description,
      "public": false,
    };
    FetchCreateNewPlaylist(props.tokenFromRedux, props.userIDFromRedux, newP)
      .then(response => response.json())
      .then(result => setPlaylistid(result.id))
  };

  const inputToPlaylist = async () => {
    if(playlistid === ''){return 0};
    let tracks = props.tracksFromRedux
      .toString()
      .replace(/:/g,"%3A")
      .replace(/,/g,"%2C"); //convert array songs, so that can be processed directly in URL
    FetchInputTracksToPlaylist(props.tokenFromRedux, playlistid, tracks)
      .then(response => response.json())
      .then(result => console.log(result))
      .then(() => console.log('Playlist Created'))
      .then(() => setPlaylist(previousState => {return { ...previousState, button: true }}))
  };

  const getInputPlaylist = v => {
    const {name, value} = v.target;
    setPlaylist({...playlist, [name]: value});
  }

  const handleBtnCloseAlert = () => {
    setPlaylist(previousState => {return { ...previousState, button: false }})
  };

  const alert = (
    <div>
      <Dialog
        open={playlist.button}
        onClose={handleBtnCloseAlert}
      > 
        <Alert severity="success">Successfully added new playlist</Alert>
      </Dialog>
    </div>
  );

  return (
      <div className="Album-item">
        {alert}
        <form onSubmit={getUserID}>
          <ul>
            <li>
              <label>Title</label><br></br>
              <input 
                type="text" 
                name="title" 
                value={playlist.title} 
                onChange={getInputPlaylist}>
              </input>
            </li>
            <li>
              <label>Description</label><br></br>
              <textarea 
                type="text" 
                name="description" 
                value={playlist.description} 
                onChange={getInputPlaylist}>
              </textarea>
            </li>
            {/* <li>
              <label>Songs</label><br></br>
              <div id="playlist-songs">{albumItems}</div>
            </li> */}
          </ul>
          <button type="submit" className="btn-submit">CREATE PLAYLIST</button>
        </form>
      </div>
  );
};

const mapStateToProps = state => { // call global state
  return{
    tokenFromRedux: state.storeToken,
    searchInputFromRedux: state.storeSearch,
    tracksFromRedux: state.storeTracks,
    searchResultFromRedux: state.storeSearchResult,
    userIDFromRedux: state.storeUserID,
  }
}

const mapDispatchToProps = dispatch => { // change global state
  return{
    storeTokenToRedux: (v) => dispatch(actions.tokenAction(v)),
    storeSelectedTrackToRedux: (v) => dispatch(actions.selectTrackAction(v)),
    storeSearchInputToRedux: (v) => dispatch(actions.searchInput(v)),
    storeSearchResultToRedux: (v) => dispatch(actions.searchResult(v)),
    storeUserIDToRedux: (v) => dispatch(actions.userID(v)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaylistCard);