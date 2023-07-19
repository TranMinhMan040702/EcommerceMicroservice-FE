import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHeart, faSquarePlus, faStar } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { cartSlice } from '../../../../redux/slice';
import config from '../../../../config';

function ProductCard({ product }) {
    const PRODUCT_URL = process.env.REACT_APP_BASE_URL + '/images/products';
    const dispatch = useDispatch();

    const handleDiscount = (price, promotionalPrice) => {
        const discount = Math.floor(((price - promotionalPrice) / price) * 100);
        return discount;
    };
    const handleAddToCart = () => {
        dispatch(cartSlice.actions.addToCart({ ...product }));
        toast.success('Đã thêm vào giỏ hàng');
    };

    return (
        <div className="product">
            <span className="discount">{handleDiscount(product.price, product.promotionalPrice)}%</span>
            <Link to={config.routes.web.productDetails + '\\' + product.id} className="img-wrap">
                <img src={PRODUCT_URL + '\\' + product.images[0]} alt="product" />
            </Link>
            <div className="info-wrap">
                <Link to={config.routes.web.productDetails} className="title text-truncate">
                    {product.name}
                </Link>
                <div className="rate">
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                    <FontAwesomeIcon className="icon" icon={faStar} />
                </div>
                <div className="price">
                    <span className=" original-price">100000</span>
                    <span className="discount-price">90000</span>
                </div>
                <div className="like-add d-flex justify-content-between align-items-center">
                    <button>
                        <FontAwesomeIcon className="icon" icon={faHeart} />
                    </button>
                    <button onClick={handleAddToCart}>
                        <FontAwesomeIcon className="icon" icon={faSquarePlus} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
