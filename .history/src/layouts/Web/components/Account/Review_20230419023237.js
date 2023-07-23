/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Loading from '../../../../components/Loading';
import { convertUrlToJson } from '../../../../utils';
import images from '../../../../assets/images';
import { useLocation } from 'react-router-dom';
import OrderService from '../../../../services/OrderService';
import ProductService from '../../../../services/ProductService';

function Review() {
    const [loading, setLoading] = useState(true);
    const [star, setStar] = useState(5);
    const [date, setDate] = useState(null);
    const [product, setProduct] = useState(null);
    const location = useLocation();
    const paramJson = convertUrlToJson(location.search);

    useEffect(() => {
        getOrderbyId(paramJson.orderId);
        getProductById(paramJson.productId);
        setLoading(false);
    }, []);

    const getOrderbyId = async (orderId) => {
        try {
            const response = await OrderService.getOrderById(orderId);
            setDate(response.data.updatedAt);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const getProductById = async (productId) => {
        try {
            const response = await ProductService.getProductById(productId);
            setProduct(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    const handleSelectStar = (e) => {
        setStar(Number(e.target.id.split('-')[1]));
    };
    const handleTextStar = () => {
        switch (star) {
            case 1:
                return 'Rất tệ';
            case 2:
                return 'Không hài lòng';
            case 3:
                return 'Bình thường';
            case 4:
                return 'Hài lòng';
            case 5:
                return 'Tuyệt vời';
            default:
                return 'Tuyệt vời';
        }
    };
    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Viết đánh giá</h5>
            </div>
            <div className="review">
                <div className="review-header">
                    <div className="time">Giao hàng vào ngày 04 tháng 04 năm 2023</div>
                    <div className="des">
                        Nhận xét và đánh giá sản phẩm đã mua (5 sao: Rất Tốt - 1 sao: Rất Tệ):
                    </div>
                </div>
                <div className="review-rating d-flex align-items-start justify-content-start">
                    <div className="image">
                        <img className="img-thumbnail" src={images.products.p1} alt="" />
                    </div>
                    <div className="rating">
                        <div className="info-product">
                            <h6>Tên sản phẩm</h6>
                            <p>Mô tả sản phẩm</p>
                        </div>
                        <div className="star">
                            <div className="rating-star d-flex align-items-center">
                                <div className="container-star d-flex">
                                    <img
                                        className="star"
                                        src={star >= 1 ? images.star : images.star_no}
                                        alt=""
                                        id="star-1"
                                        onClick={(e) => handleSelectStar(e)}
                                    />
                                    <img
                                        className="star"
                                        src={star >= 2 ? images.star : images.star_no}
                                        alt=""
                                        id="star-2"
                                        onClick={(e) => handleSelectStar(e)}
                                    />
                                    <img
                                        className="star"
                                        src={star >= 3 ? images.star : images.star_no}
                                        alt=""
                                        id="star-3"
                                        onClick={(e) => handleSelectStar(e)}
                                    />
                                    <img
                                        className="star"
                                        src={star >= 4 ? images.star : images.star_no}
                                        alt=""
                                        id="star-4"
                                        onClick={(e) => handleSelectStar(e)}
                                    />
                                    <img
                                        className="star"
                                        src={star >= 5 ? images.star : images.star_no}
                                        alt=""
                                        id="star-5"
                                        onClick={(e) => handleSelectStar(e)}
                                    />
                                </div>
                                <div className="text-rating">{handleTextStar()}</div>
                            </div>
                        </div>
                        <div className="input-title">Đánh giá chi tiết</div>
                        <div className="input-wrap">
                            <span>
                                <textarea
                                    name="content"
                                    cols="100"
                                    rows="4"
                                    type="text"
                                    placeholder="Bạn nghĩ gì về sản phẩm này"
                                ></textarea>
                            </span>
                        </div>
                        <button className="btn btn-sm">Gửi</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Review;
