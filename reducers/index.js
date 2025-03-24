import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Import reducer cụ thể

const allReducers = combineReducers({
  auth: authReducer, // Gán reducer vào state với key 'auth'
  // Thêm các reducer khác nếu có, ví dụ:
  // hotel: hotelReducer,
});

export default allReducers;