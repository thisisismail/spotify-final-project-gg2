let initialState = [];

const selectTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TITLES':
      return action.payload;
    default:
      return state;
  }
}

export default selectTitleReducer;