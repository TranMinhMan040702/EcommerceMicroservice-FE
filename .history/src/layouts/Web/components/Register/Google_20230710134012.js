/* eslint-disable no-undef */
import { GoogleLogin } from '@react-oauth/google';
import { ToastContainer, toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import EmailService from '../../../../services/EmailService';
import AuthService from '../../../../services/AuthService';

function RegisterGoogle({ setRegister, setLoading }) {
    const navigate = useNavigate();

    const responseGoogle = async (response) => {
        const userDecode = jwtDecode(response.credential);
        const resp = await AuthService.register(userDecode.email);
        try {
            setLoading(true);
            await AuthService.register(userDecode.email);
            setLoading(false);
            setRegister({
                firstName: userDecode.given_name,
                lastName: userDecode.family_name,
                email: userDecode.email,
                password: userDecode.sub,
            });
            navigate('/register/verify');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <ToastContainer autoClose={1000} pauseOnHover={false} />
            <GoogleLogin
                render={(renderProps) => (
                    <button
                        type="button"
                        className="btn btn-sm"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                    ></button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
            />
        </>
    );
}

export default RegisterGoogle;
