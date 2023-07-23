import { Link, useLocation, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../../../assets/images';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
function Purchase() {
    const url = useLocation();
    console.log(url.search);
    const handleOnClick = (e) => {};
    return (
        <div className="purchase">
            <div className="nav-purchase wapper mb-3">
                <ul className="d-flex justify-content-between align-items-center">
                    <li onClick={(e) => handleOnClick(e)} id="ALL">
                        <Link>Tất cả</Link>
                    </li>
                    <li onClick={(e) => handleOnClick(e)} id="NOT_PROCESSED">
                        <Link>Chờ thanh toán</Link>
                    </li>
                    <li onClick={(e) => handleOnClick(e)} id="PROCESSING">
                        <Link>Vận chuyển</Link>
                    </li>
                    <li onClick={(e) => handleOnClick(e)} id="SHIPPED">
                        <Link>Đang giao</Link>
                    </li>
                    <li onClick={(e) => handleOnClick(e)} id="DELIVERED">
                        <Link>Hoàn thành</Link>
                    </li>
                    <li onClick={(e) => handleOnClick(e)} id="CANCELLED">
                        <Link>Đã hủy</Link>
                    </li>
                </ul>
            </div>
            <div className="cart-list">
                <div className="wapper cart-item">
                    <div className="cart-header d-flex justify-content-end align-items-center">
                        <FontAwesomeIcon icon={faTruck} />
                        <span>Đơn hàng đang giao</span>
                    </div>
                    <div className="cart-details d-flex align-items-center justify-content-between">
                        <div className="name d-flex align-items-center">
                            <div className="cart-image d-flex">
                                <img src={images.products.p1} alt="product" />
                            </div>
                            <h4>Nhà giả kim</h4>
                        </div>
                        <div className="price">
                            <span>Đơn giá</span>
                            <h5>100.000.00</h5>
                        </div>
                        <div className="quatity">
                            <span>Số lượng</span>
                            <h5>2</h5>
                        </div>
                        <div className="total">
                            <span>Thành tiền</span>
                            <h5>200.000.00</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Purchase;
