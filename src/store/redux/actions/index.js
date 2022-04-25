const actions = {
  tokenAction : (text) =>{
    return {
      type: 'TOKEN',
      payload: text,
    }  
  },
  selectTrackAction : (song) => {
    return {
      type: 'TRACKS',
      payload: song,
    }
  },
  selectTitleAction : (song) => {
    return {
      type: 'TITLES',
      payload: song,
    }
  },
  searchInput : (text) => {
    return {
      type: 'INPUTSEARCH',
      payload: text,
    }
  },
  searchResult : (text) => {
    return {
      type: 'SEARCHRESULT',
      payload: text,
    }
  },
  userID : (text) => {
    return {
      type: 'USERID',
      payload: text,
    }
  }
}

export default actions;