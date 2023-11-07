import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "./actions";
import styleLogin from './login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { users } from '../../../db.json';

const Login = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({ email: '', password: '' });
    const error = useSelector(state => state.loginReducer.error);
    const navigate = useNavigate();

    const handleLogin = () => {
        if (!user.email || !user.password) {
            alert("Email dan password harus diisi.");
            return;
        }
        const findUser = users.find(u => u.email === user.email && u.password === user.password);

        if (findUser) {
            dispatch(loginUser(user));
            alert("Berhasil login.");
            navigate('/home');
        } else {
            alert("Email atau password salah.");
        }
    }

    return (
        <div className={styleLogin.container}>
            <div className={styleLogin.wrapper}>
                <h1>Login</h1>
                <form>
                    <div className={styleLogin.inputItem}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className={styleLogin.inputItem}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>
                    <button className={styleLogin.buttonLogin} onClick={handleLogin}>Login</button>
                    {error && <p className={styleLogin.error}>{error}</p>}
                </form>
                <p>Don't have an account? klik <Link to='/register'>here</Link></p>
            </div>
        </div>
    );
}

export default Login;
