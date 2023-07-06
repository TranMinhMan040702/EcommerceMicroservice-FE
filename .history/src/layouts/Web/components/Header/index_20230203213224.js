import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';
import { faFacebook, faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import images from '../../../../assets/images';
import { faCartArrowDown, faCartShopping } from '@fortawesome/free-solid-svg-icons';
function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="announcement">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center display-none">
                            {/* <p>0964294799</p> */}
                            <p>mantm040702@gmail.com</p>
                        </div>
                        <ul className="col-lg-6 d-flex justify-content-lg-end align-items-center">
                            <li>
                                <Link>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FontAwesomeIcon icon={faGithub} />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FontAwesomeIcon icon={faYoutube} />
                                </Link>
                            </li>
                            <li>
                                <Link>
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="pc-header">
                    <div className="row">
                        <div className="col-md-3">
                            <Link>
                                <img src={images.logo} alt="" />
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <form className="input-group">
                                <input type="search" className="form-control search" placeholder="Search" />
                                <button type="submit" className="search-button">
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="col-md-3 d-flex justify-content-end align-items-center register-login-cart">
                            <Link className="cart">
                                <FontAwesomeIcon icon={faCartShopping} />
                            </Link>
                            <Link>REGISTER</Link>
                            <Link>LOGIN</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
