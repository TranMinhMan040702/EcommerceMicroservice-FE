/* eslint-disable no-undef */
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from 'jwt-decode';
import { useAuth } from '../../../../hooks';
import { useDispatch } from 'react-redux';
import { createAccount } from '../../../../redux/slice/accountSlice';
import { getCart } from '../../../../redux/slice/cartSlice';
import { getAddresses } from '../../../../redux/slice/addressSlice';
import { getDeliverise } from '../../../../redux/slice/deliverySlice';
import { useNavigate } from 'react-router-dom';
import AuthService from '../../../../services/AuthService';
import config from '../../../../config';

function RegisterGoogle() {
    const { setAuth } = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const responseGoogle = async (response) => {
        const userDecode = jwtDecode(response.credential);
        try {
            const response = await AuthService.register({
                firstname: userDecode.given_name,
                lastname: userDecode.family_name,
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
                setAuth({ email, password, accessToken, roles, userId });
                dispatch(createAccount(userId));
                dispatch(getCart(userId));
                dispatch(getAddresses(userId));
                dispatch(getDeliverise());
                navigate('/');
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <GoogleLogin
            render={(renderProps) => (
                <button
                    type="button"
                    className="btn btn-sm"
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
    );
}

export default RegisterGoogle;
