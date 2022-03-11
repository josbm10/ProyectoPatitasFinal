const initialState = {
  isLogin: false,
  userData: {},
  userToken: {},
};

function authReducer(state = initialState, action) {
  console.log('action', action);
  switch (action.type) {
    case 'SET_LOGIN':
      return { ...state, isLogin: action.payload };
    case 'SET_USER':
      return { ...state, userData: action.payload };
    case 'SET_TOKEN':
      return { ...state, userToken: action.payload };
    case 'RESET_USER':
      return initialState;
    default:
      return state;
  }
}

export { authReducer };
