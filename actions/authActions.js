export const login = (credentials) => async (dispatch) => {
  try {
      const response = await fetch('http://localhost:8081/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(credentials),
      });
      
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
          throw new Error(data.message || 'Đăng nhập thất bại');
      }

      // Lưu token vào localStorage
      localStorage.setItem('token', data.token);

      dispatch({
          type: 'LOGIN_SUCCESS',
          payload: {
              user: data.user,
              token: data.token,
          },
      });
  } catch (error) {
      dispatch({
          type: 'LOGIN_FAIL',
          payload: error.message,
      });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  dispatch({ type: 'LOGOUT' });
};

// src/actions/authActions.js
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const register = (userData) => async (dispatch) => {
  try {
    // Dispatch action để báo hiệu đang xử lý đăng ký
    dispatch({ type: REGISTER_REQUEST });

    const response = await fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    // Kiểm tra response.ok trước khi parse JSON
    if (!response.ok) {
      const data = await response.json().catch(() => ({})); // Nếu không parse được JSON, trả về object rỗng
      throw new Error(data.message || data.error || 'Đăng ký thất bại');
    }

    // Parse JSON nếu response.ok
    const data = await response.json();
    console.log(data);

    // Kiểm tra xem data có token và user không
    if (!data.token || !data.user) {
      throw new Error('Phản hồi từ server không hợp lệ: Thiếu token hoặc user');
    }

    // Dispatch action thành0 thành công
    dispatch({
      type: REGISTER_SUCCESS,
      payload: {
        user: data.user,
        token: data.token,
      },
    });

    // Lưu token vào localStorage sau khi dispatch thành công
    localStorage.setItem('token', data.token);
  } catch (error) {
    // Dispatch action thất bại
    dispatch({
      type: REGISTER_FAIL,
      payload: error.message || 'Đã có lỗi xảy ra trong quá trình đăng ký',
    });
  }
};