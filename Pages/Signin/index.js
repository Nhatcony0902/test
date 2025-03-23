import { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {  login} from '../../store/authSlice';
import { useNavigate} from 'react-router-dom';
import "./style.scss";
function Login() {
    const unameRef = useRef(null);
    const passRef = useRef(null);
    const [message, setMessage] = useState('');
    const [msgColor, setMsgColor] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [btnPosition, setBtnPosition] = useState('no-shift');
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        setBtnDisabled(true); // Khởi tạo disabled

    }, []);

    const shiftButton = () => {
        // Chỉ di chuyển nút khi nó đang bị vô hiệu hóa
        if (btnDisabled) {
            showMsg();
            const positions = ['shift-left', 'shift-top', 'shift-right', 'shift-bottom'];
            const currentIndex = positions.indexOf(btnPosition);
            const nextPosition = positions[(currentIndex + 1) % positions.length];
            setBtnPosition(nextPosition);
        }
    };


    const showMsg = () => {
        const isEmpty = unameRef.current?.value === '' || passRef.current?.value === '';

        if (isEmpty) {
            setBtnDisabled(true);
            setMsgColor('rgb(218, 49, 49)');
            setMessage('Please fill the input fields before proceeding');
        } else {
            setMessage('Great! Now you can proceed');
            setMsgColor('#92ff92');
            setBtnDisabled(false);
            setBtnPosition('no-shift'); // Đặt lại vị trí bình thường
        }
    };

    //xử lí đăng nhập
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(login({ username, password }));
        navigate("/");
    };


    return (
        <div className="main-container centered-flex">
            <div className="form-container">
                <div className="icon fa fa-user"></div>
                <form className="centered-flex" onInput={showMsg} onSubmit={handleSubmit}>
                    <div className="title">LOGIN</div>
                    <div className="msg" style={{ color: msgColor }}>{message}</div>
                    <div className="field">
                        <input type="text" placeholder="Username" id="uname" ref={unameRef} value={username} onChange={(e) => setUsername(e.target.value)}/>
                        <span className="fa fa-user"></span>
                    </div>
                    <div className="field">
                        <input type="password" placeholder="Password" id="pass" ref={passRef} value={password} onChange={(e) => setPassword(e.target.value)} />
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