import './styles/index.css';
import React from 'react';
import {connect} from 'react-redux';
import {useState, useEffect} from 'react';
import {Box, Card, CardContent} from '@mui/material/';
import actions from '../../store/redux/actions/index.js';
import ButtonSelectTrack from '../button-select-track/index.js';

function TracksList(props) {

  const [selectedtracks, setSelectedtracks] = useState([]);

  useEffect(() => {
    props.storeSelectedTrackToRedux(selectedtracks);
  })

  let iteration = 0;

  function msecToSec(ms) {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  const tracks = props.searchResultFromRedux?.map( v => (
    <Box key={v.id} sx={{width: '100%', minWidth: 500}}>
      <Card  sx={{ mb: 1}}>
        <CardContent>
        <div className="TrackItem-Container" >
          <div id="numbering">{iteration += 1}</div>
          <div id="track-image"><img src={v.album.images[2].url} alt="GIF"></img></div>
          <div id="track-title">{v.name}</div>
          <div id="track-artist">{v.album.artists[0].name}</div>
          <div id="track-type"> {v.type}</div>
          <div id="duration">{msecToSec(v.duration_ms)}</div>
          <div id="select-btn">
            <ButtonSelectTrack 
              uri={v.uri} 
              title={v.name} 
              setSelectedtracks={setSelectedtracks} 
              selectedtracks={selectedtracks} 
            />
          </div>
        </div>
        </CardContent>
      </Card>
    </Box>
  ))

  return (
    <div className="TracksList-Container">
      {tracks}
    </div>
  )
}

const mapStateToProps = state => { // call global state
  return{
    tokenFromRedux: state.storeToken,
    searchInputFromRedux: state.storeSearch,
    tracksFromRedux: state.storeTracks,
    searchResultFromRedux: state.storeSearchResult,
  }
}

const mapDispatchToProps = dispatch => { // change global state
  return{
    storeTokenToRedux: (v) => dispatch(actions.tokenAction(v)),
    storeSelectedTrackToRedux: (v) => dispatch(actions.selectTrackAction(v)),
    storeSearchInputToRedux: (v) => dispatch(actions.searchInput(v)),
    storeSearchResultToRedux: (v) => dispatch(actions.searchResult(v)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TracksList);