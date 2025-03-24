// src/components/Register.js
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../actions/authActions';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, isAuthenticated } = useSelector(state => state.auth || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(formData));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/'); // Chuyển hướng sau khi đăng ký thành công
    }
  }, [isAuthenticated, navigate]);

  return (
    <></>
  );
}

export default Register;