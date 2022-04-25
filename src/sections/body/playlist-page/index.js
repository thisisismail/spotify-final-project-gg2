import './styles/index.css';
import React from 'react';
import {connect} from 'react-redux';
import actions from '../../../store/redux/actions/index.js';
import TracksList from '../../../components/tracks-list/index.js';
import PlaylistCard from '../../../components/card-playlist/index.js';
import Dummy from '../../../components/card-playlist/dummy.js';

function BodyPage(props) {

  return (
    <>
    <div className="BodyPage">
      <div className="Playlist-Card">
        {/* <PlaylistCard/> */}
        <Dummy/>
      </div>
      <div className="TracksList-Container">
        <TracksList/>
      </div>
    </div>
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(BodyPage);