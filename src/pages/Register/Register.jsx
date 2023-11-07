import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from "./actions";
import styleRegister from '../Login/login.module.scss';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    const handleRegister = () => {
        if (!user.fullName || !user.email || !user.password) {
            alert("Semua field harus diisi.");
            return;
        }
        if (user.password.length < 6) {
            alert("Password harus minimal 6 karakter.");
            return;
        }

        dispatch(createUser(user));
        alert("Akun berhasil terdaftar");
        navigate("/login")
    }

    return (
        <div className={styleRegister.container}>
            <div className={styleRegister.wrapper}>
                <h1>Register</h1>
                <form>
                    <div className={styleRegister.inputItem}>
                        <label htmlFor="">Full Name</label>
                        <input id="fullName" name="fullName" type="text" onChange={(e) => setUser({ ...user, fullName: e.target.value })} />
                    </div>
                    <div className={styleRegister.inputItem}>
                        <label htmlFor="">Email</label>
                        <input id="email" name="email" type="text" onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>
                    <div className={styleRegister.inputItem}>
                        <label htmlFor="">Password</label>
                        <input id="password" name="password" type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </div>
                    <button className={styleRegister.buttonRegister} onClick={handleRegister}>Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;
