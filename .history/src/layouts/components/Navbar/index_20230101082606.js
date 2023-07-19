import { faBell, faMoon } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.scss';

function Navbar() {
    return (
        <div className="navbar">
            <div className="wrapper d-flex ">
                <div className="search">
                    <input type="text" className="form-control" placeholder="Search term" />
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
                <div className="items">
                    <div className="item">
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                    <div className="item">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="item">
                        <span>English</span>
                    </div>
                    <div className="item">
                        <div>AccountItem</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
