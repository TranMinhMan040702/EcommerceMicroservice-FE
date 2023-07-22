import images from '../../../../assets/images';

function ProductLike() {
    return (
        <div className="wapper">
            <div className="header d-flex justify-content-between align-items-center">
                <h5>Sản phẩm yêu thích của tôi</h5>
            </div>
            <div className="product-like-list">
                <div className="cart-details">
                    <div
                        className="name d-flex align-items-center justify-content-between"
                        style={{ width: '70%' }}
                    >
                        <div className="cart-image d-flex" style={{ width: '13%' }}>
                            <img className="img-thumbnail" src={images.products.p1} alt="product" />
                        </div>
                        <h4>Nhà giả kim</h4>
                    </div>
                    <div className="infor d-flex justify-content-center">
                        <button className="btn btn-sm btn-success">Bỏ thích</button>
                        <button className="btn btn-sm btn-success">Thêm vào giỏ hàng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductLike;
