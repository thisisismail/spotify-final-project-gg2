const actions = {
  tokenAction : (text) =>{
    return {
      type: 'TOKEN',
      payload: text,
    }  
  },
  selectSongAction : (song) => {
    return {
      type: 'SONGS',
      payload: song,
    }
  }
}

export default actions;