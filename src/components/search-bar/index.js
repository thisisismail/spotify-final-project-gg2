import React from 'react';
import { InputBase, Button, Stack, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {connect} from 'react-redux';
import actions from '../../store/redux/actions/index.js';
import {FetchSearch} from '../../API-call/index.js';


const Input = styled(InputBase)(({theme}) => ({
  backgroundColor: 'whitesmoke',
  borderRadius: theme.shape.borderRadius,
  border: '1px solid whitesmoke',
  fontSize: theme.typography.button.fontSize,
  padding: '0px 5px',
}))

const Search = styled('div')(({ theme }) => ({
  display: 'inline-block',
  position: 'relative',
  margin: '0px auto',
  padding: '10px',
}))

function SearchBarComp(props) {
 
  const handleInputSearch = v => {
    props.storeSearchInputToRedux(v.target.value);
  }

  const handleBtnSearch = (e) => {
    if(props.tokenFromRedux === '' || props.searchInputFromRedux === ''){return 0};
    console.log("Searching for " + props.searchInputFromRedux);
    FetchSearch(props.tokenFromRedux, props.searchInputFromRedux)
      .then(e => e.json())
      .then(result => { return props.storeSearchResultToRedux(result.tracks.items)})
      .then((v) => console.log(v))
      .then(() => console.log('Finish....'))
      .catch((err) => console.error(err));
  }

  return (
    <div>
      <Search>
        <Stack spacing={1} direction="row">
          <Input placeholder="Search..." variant="contained" onChange={handleInputSearch}></Input>
          <Button color="primary" variant="contained" onClick={handleBtnSearch}><SearchIcon/></Button>
        </Stack>
      </Search>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchBarComp);




