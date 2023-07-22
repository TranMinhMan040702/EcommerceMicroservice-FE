import images from '../../assets/images';
function Empty({ title, image }) {
    return (
        <div
            className="d-flex flex-column align-items-center justify-content-center"
            style={{ height: '500px' }}
        >
            <img style={{ height: '100px', width: '100px' }} src={images.orderEmpty} alt="" />
            <h5 className="mt-3">Chưa có đơn hàng</h5>
        </div>
    );
}

export default Empty;
