let initialState = [];

const selectTrackReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TRACKS':
      return action.payload;
    default:
      return state;
  }
}

export default selectTrackReducer;