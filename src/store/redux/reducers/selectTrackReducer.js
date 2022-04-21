let initialState = [];

const selectTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SONGS':
      return state = state.concat(action.payload);
    default:
      return state;
  }
}

export default selectTrackReducer;