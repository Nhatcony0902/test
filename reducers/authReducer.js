const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  token: localStorage.getItem('token') || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'LOGIN_SUCCESS':
          return {
              ...state,
              user: action.payload.user,
              token: action.payload.token,
              isAuthenticated: true,
              loading: false,
              error: null,
          };
      case 'LOGIN_FAIL':
          return {
              ...state,
              error: action.payload,
              loading: false,
          };
      case 'LOGOUT':
          return {
              ...state,
              user: null,
              token: null,
              isAuthenticated: false,
          };
      case 'REGISTER_SUCCESS':
          return {
              ...state,
              user: action.payload,
              isAuthenticated: true,
              loading: false,
          };
      case 'REGISTER_FAIL':
          return {
              ...state,
              error: action.payload,
              loading: false,
          };
      default:
          return state;
  }
};