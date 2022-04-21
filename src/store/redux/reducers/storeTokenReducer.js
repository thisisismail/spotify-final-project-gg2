let initialState = '';

const storeTokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOKEN':
      return action.payload;
    default:
      return state;
  }
}

export default storeTokenReducer;