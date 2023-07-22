import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList, faUser } from '@fortawesome/free-regular-svg-icons';
function Navbar() {
    return (
        <ul>
            <li>
                <Link>
                    <FontAwesomeIcon icon={faUser} />
                    <span>Tài khoản của tôi</span>
                </Link>
                <li>
                    <Link>Hồ sơ</Link>
                </li>
                <li>
                    <Link>Đổi mật khẩu</Link>
                </li>
            </li>
            <li>
                <Link>
                    <FontAwesomeIcon icon={faRectangleList} />
                    <span>Đơn mua</span>
                </Link>
            </li>
        </ul>
    );
}

export default Navbar;
