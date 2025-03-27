const initialState = {
    isAuthenticated: false,
    user: null,
    token: null,
    error: null,
    loading: false, // Thêm trạng thái loading
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
              isAuthenticated: true,
              user: action.payload.user,
              token: action.payload.token,
              error: null,
              loading: false,
            };
          case 'REGISTER_FAIL':
            return {
              ...state,
              isAuthenticated: false,
              user: null,
              token: null,
              error: action.payload,
              loading: false,
            };
      default:
          return state;
  }
};