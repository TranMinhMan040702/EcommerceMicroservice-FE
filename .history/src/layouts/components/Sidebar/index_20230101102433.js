import { Link } from 'react-router-dom';
import './sidebar.scss';
import images from '../../../assets/images';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <img src={images.logo} alt="logo" />
                </Link>
            </div>
            <div className="center">
                <ul style={{ listStyle: 'none' }}>
                    <Link className="" to="/" style={{ textDecoration: 'none' }}>
                        <li>
                            <span>Users</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
