import { useState } from 'react';
import Loading from '../../../../components/Loading';
import images from '../../../../assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Review() {
    const [loading, setLoading] = useState(true);

    const handleSelectStar = (e) => {
        console.log(e.target.id);
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
                                    <li id="star-1" onClick={(e) => handleSelectStar(e)}>
                                        <FontAwesomeIcon className="icon-rating" icon={faStar} />
                                    </li>
                                    <li id="star-2" onClick={(e) => handleSelectStar(e)}>
                                        <FontAwesomeIcon className="icon-rating" icon={faStar} />
                                    </li>
                                    <li id="star-3" onClick={(e) => handleSelectStar(e)}>
                                        <FontAwesomeIcon className="icon-rating" icon={faStar} />
                                    </li>
                                    <li id="star-4" onClick={(e) => handleSelectStar(e)}>
                                        <FontAwesomeIcon className="icon-rating" icon={faStar} />
                                    </li>
                                    <li id="star-5" onClick={(e) => handleSelectStar(e)}>
                                        <FontAwesomeIcon className="icon-rating" icon={faStar} />
                                    </li>
                                </div>
                                <div className="text-rating">Tuyệt vời</div>
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
