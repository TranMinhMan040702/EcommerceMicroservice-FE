import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { useAuth } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../../../redux/slice/accountSlice';
import { getCart } from '../../../../redux/slice/cartSlice';
import { getAddresses } from '../../../../redux/slice/addressSlice';
import { getDeliveries } from '../../../../redux/slice/deliverySlice';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthService from '../../../../services/AuthService';
import config from '../../../../config';

function LoginGoogle() {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const responseGoogle = async (response) => {
        const userDecode = jwtDecode(response.credential);
        console.log(userDecode);
        try {
            const response = await AuthService.login({
                email: userDecode.email,
                password: userDecode.sub,
            });
            if (response.data.status === 404) {
                navigate(config.routes.web.register);
            } else {
                const accessToken = response?.data?.accessToken;
                const refreshToken = response?.data?.refreshToken;
                const roles = response?.data?.roles;
                const userId = response?.data?.userId;
                localStorage.setItem('token', accessToken);
                localStorage.setItem('refreshToken', refreshToken);
                localStorage.setItem('userId', userId);
                setAuth({
                    email: userDecode.email,
                    password: userDecode.sub,
                    accessToken,
                    roles,
                    userId,
                });
                setUser({ email: '', password: '' });
                // thunk function
                dispatch(createAccount(userId));
                dispatch(getCart(userId));
                dispatch(getAddresses(userId));
                dispatch(getDeliveries());
                navigate(roles.includes('ADMIN') ? config.routes.admin.home : from, {
                    replace: true,
                });
            }
        } catch (err) {
            toast.error(config.message.error.login);
            console.log(err);
        }
    };

    return (
        <>
            <GoogleLogin
                render={(renderProps) => (
                    <button
                        type="button"
                        className=""
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    >
                        Sign in with google
                    </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
            />
            <ToastContainer autoClose={1000} pauseOnHover={false} />
        </>
    );
}

export default LoginGoogle;
