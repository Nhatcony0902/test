import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../actions/authActions';
import "./style.scss";

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');
    const [msgColor, setMsgColor] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btnPosition, setBtnPosition] = useState('no-shift');

    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const { error, isAuthenticated } = useSelector(state => state.auth || {});

    useEffect(() => {
        setBtnDisabled(true); // Khởi tạo disabled
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/'); 
        }
    }, [isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newFormData = { ...prev, [name]: value };
            showMsg(newFormData); // Gọi showMsg với dữ liệu mới
            return newFormData;
        });
    };

    const shiftButton = () => {
        if (btnDisabled) {
            const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
            const currentIndex = positions.indexOf(btnPosition);
            const nextPosition = positions[(currentIndex + 1) % positions.length];
            setBtnPosition(nextPosition);
        }
    };

    const showMsg = (data = formData) => {
        const isEmpty = data.email === '' || data.password === '';
        if (isEmpty) {
            setBtnDisabled(true);
            setMsgColor('rgb(218, 49, 49)');
            setMessage('Please fill the input fields before proceeding');
        } else {
            setMessage('Great! Now you can proceed');
            setMsgColor('#92ff92');
            setBtnDisabled(false);
            setBtnPosition('no-shift');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
        navigate("/");
    };

    return (
        <div className="main-container centered-flex">
            <div className="form-container">
                <div className="icon fa fa-user"></div>
                <form className="centered-flex" onSubmit={handleSubmit}>
                    <div className="title">LOGIN</div>
                    <div className="msg" style={{ color: msgColor }}>{message}</div>
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                    <div className="field">
                        <input 
                            type="text" 
                            placeholder="Username" 
                            id="uname" 
                            name="email" // Thêm name để khớp với formData
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span className="fa fa-user"></span>
                    </div>
                    <div className="field">
                        <input 
                            type="password" 
                            placeholder="Password" 
                            id="pass" 
                            name="password" // Thêm name để khớp với formData
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span className="fa fa-lock"></span>
                    </div>
                    <div className="action centered-flex">
                        <label htmlFor="remember" className="centered-flex">
                            <input type="checkbox" id="remember" /> Remember me
                        </label>
                        <a href="#">Forget Password ?</a>
                    </div>
                    <div
                        className="btn-container"
                        onMouseOver={shiftButton}
                        onTouchStart={shiftButton}
                    >
                        <input
                            type="submit"
                            id="login-btn"
                            value="Login"
                            disabled={btnDisabled}
                            className={btnPosition}
                            onMouseOver={shiftButton}
                            onTouchStart={shiftButton}
                        />
                    </div>
                    <div className="signup">Don't have an Account?<a href="#"> Sign up</a></div>
                </form>
            </div>
        </div>
    );
}

export default Login;