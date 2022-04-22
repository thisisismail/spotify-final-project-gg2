let initialState = [];

const searchResultReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCHRESULT':
      return action.payload
    default:
      return state
  }
}

export default searchResultReducer;