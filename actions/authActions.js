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

export const register = (userData) => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:8081/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();
    console.log(data);

    if (!response.ok) {
      throw new Error(data.message || 'Đăng ký thất bại');
    }

    // Lưu token vào localStorage (nếu backend trả về token sau khi đăng ký)
    localStorage.setItem('token', data.token);

    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: {
        user: data.user,
        token: data.token,
      },
    });
  } catch (error) {
    dispatch({
      type: 'REGISTER_FAIL',
      payload: error.message,
    });
  }
};