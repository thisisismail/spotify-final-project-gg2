/* eslint-disable react-hooks/exhaustive-deps */
import './styles/index.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import actions from '../../store/redux/actions/index.js';

const ButtonSelectTrack = ({uri, title, selectedtracks, setSelectedtracks, selectedtitles, setSelectedtitles}) => {
  const btnOn = {backgroundColor: "rgb(100, 120, 237)", color: "rgb(255, 255, 255)"};
  const btnOff = {backgroundColor: "rgb(229, 233, 240)"};

  const [btnstatus, setBtnstatus] = useState(false);
  const [btnmessage, setBtnmessage] = useState("select");
  const [btncolor, setBtncolor] = useState(btnOff);

  useEffect(() => {
    if(btnstatus){
      setBtnmessage('selected');
      setBtncolor(btnOn);
      setSelectedtracks(selectedtracks.concat(uri));
      setSelectedtitles(selectedtitles.concat(title));
    }else{
      setBtnmessage('select');
      setBtncolor(btnOff);
      deleteHandler(uri, title)
    }
  }, [btnstatus])

  const clickHandler = () => {
    setBtnstatus(!btnstatus);
    console.log(uri+' '+title);
  }

  const deleteHandler = (deletedUri, deletedTitle) => {
    setSelectedtracks(selectedtracks.filter(v => v !== deletedUri))
    setSelectedtitles(selectedtitles.filter(v => v !== deletedTitle))
  }

  return(
    <div className='Item-button addPlaylist'>
          <button style={btncolor} onClick={() => {clickHandler()}}>{btnmessage}</button>
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(ButtonSelectTrack);


