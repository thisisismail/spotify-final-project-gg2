let initialState = '';

const userIDReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USERID':
      return action.payload;
    default:
      return state;
  }
}

export default userIDReducer;