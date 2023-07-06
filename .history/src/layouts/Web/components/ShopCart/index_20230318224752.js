/* eslint-disable react-hooks/exhaustive-deps */
import { useSelector } from 'react-redux';
import { cartUser } from '../../../../redux/selectors';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../../redux/slice';
import { ToastContainer, toast } from 'react-toastify';
import SummaryCart from './SummaryCart';
import CartItem from './CartItem';
import config from '../../../../config';
import './shopcart.scss';
import { addToCart, deleteAllProductInCartItem, deleteOneProductInCartItem } from '../../../../redux/slice/cartSlice';

function ShopCart() {
    const cart = useSelector(cartUser);
    const dispatch = useDispatch();

    // total price
    const handleTotalPrice = () => {
        const totalPrice = cart.reduce((acc, curr) => {
            return acc + curr.product.promotionalPrice * curr.count;
        }, 0);
        return totalPrice;
    };

    const handleIncreaseCount = (data) => {
        dispatch(addToCart(data));
    };

    const handleDecreaseCount = (id) => {
        dispatch(deleteOneProductInCartItem(id));
    };

    const handleRemoveItem = (id) => {
        dispatch(deleteAllProductInCartItem(id));
        toast.warning(config.message.removeItemInCart);
    };

    return (
        <div className="shop-cart">
            <ToastContainer autoClose={2000} />
            <div className="container cart-items d-flex justify-content-between">
                {cart.length !== 0 ? (
                    <>
                        <div className="cart-list">
                            {cart.map((item, i) => {
                                return (
                                    <CartItem
                                        key={i}
                                        item={item}
                                        handleIncreaseCount={handleIncreaseCount}
                                        handleDecreaseCount={handleDecreaseCount}
                                        handleRemoveItem={handleRemoveItem}
                                    />
                                );
                            })}
                        </div>
                        <SummaryCart handleTotalPrice={handleTotalPrice()} />
                    </>
                ) : (
                    <p>Giỏ hàng trống</p>
                )}
            </div>
        </div>
    );
}

export default ShopCart;
