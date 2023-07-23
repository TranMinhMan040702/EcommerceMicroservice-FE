/* eslint-disable react-hooks/exhaustive-deps */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './shopcart.scss';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import config from '../../../../config';
import { useSelector } from 'react-redux';
import { cartUser } from '../../../../redux/selectors';
import { useEffect, useState } from 'react';

function ShopCart() {
    const PRODUCT_URL = process.env.REACT_APP_BASE_URL + '/images/products';
    const cart = useSelector(cartUser);
    const [listProducts, setListProducts] = useState([]);

    // find product unique
    const handleUniqueCart = () => {
        let arr = [];
        cart.forEach((e) => {
            if (arr.length > 0) {
                if (arr.find((p) => p.id === e.id) === undefined) {
                    arr.push(e);
                }
            } else {
                arr.push(e);
            }
        });
        return arr;
    };
    useEffect(() => {
        // count amount product item
        const handleCountItem = () => {
            const uniqueCart = handleUniqueCart();
            setListProducts([]);
            uniqueCart.forEach((item) => {
                const count = cart.filter((e) => e.id === item.id).length;
                setListProducts((prev) => [
                    ...prev,
                    {
                        count: count,
                        product: item,
                    },
                ]);
            });
        };
        return handleCountItem();
    }, []);

    // total price
    const handleTotalPrice = () => {
        const totalPrice = listProducts.reduce((acc, curr) => {
            return acc + curr.product.promotionalPrice * curr.count;
        }, 0);
        return totalPrice;
    };

    return (
        <div className="shop-cart">
            <div className="container cart-items d-flex justify-content-between">
                <div className="cart-list">
                    {listProducts &&
                        listProducts.map((item, i) => {
                            return (
                                <div
                                    key={i}
                                    className="product cart-item d-flex justify-content-between"
                                    style={{ 'margin-bottom': '0' }}
                                >
                                    <div className="cart-details d-flex align-items-center">
                                        <div className="cart-image">
                                            <img src={PRODUCT_URL + '\\' + item.product.images[0]} alt="product" />
                                        </div>
                                        <div className="cart-info">
                                            <h4>{item.product.name}</h4>
                                            <h5>
                                                {item.product.promotionalPrice} * {item.count}
                                            </h5>
                                            <span>{item.product.promotionalPrice * item.count}</span>
                                        </div>
                                    </div>
                                    <div className="cart-item-function">
                                        <div className="cart-remove">
                                            <button>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </button>
                                        </div>
                                        <div className="cart-control">
                                            <button className="incBtn">
                                                <FontAwesomeIcon icon={faPlus} />
                                            </button>
                                            <button className="decBtn">
                                                <FontAwesomeIcon icon={faMinus} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className="product cart-total">
                    <h2>Giỏ hàng</h2>
                    <div className="d-flex justify-content-between">
                        <h4>Tổng giá :</h4>
                        <h3>{handleTotalPrice()}.00 vnd</h3>
                    </div>
                    <Link to={config.routes.web.checkout}>Thanh toán</Link>
                </div>
            </div>
        </div>
    );
}

export default ShopCart;
