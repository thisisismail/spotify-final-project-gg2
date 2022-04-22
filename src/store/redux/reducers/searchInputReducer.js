let initialState = '';

const searchInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INPUTSEARCH':
      return action.payload
    default:
      return state
  }
}

export default searchInputReducer;