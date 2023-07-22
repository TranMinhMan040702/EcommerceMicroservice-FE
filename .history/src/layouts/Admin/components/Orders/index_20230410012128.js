import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import './orders.scss';
import { faEye } from '@fortawesome/free-regular-svg-icons';
function Orders() {
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Orders</h2>
            </div>
            <div className="card mb-4 mt-3 shadow-sm">
                <div className="card-header bg-white">
                    <div className="row gx-3 py-2">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input className="form-control" type="text" placeholder="Search...." />
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select" name="status" id="">
                                <option value="ALL">ALL</option>
                                <option value="NOT_PROCESSED">NOT_PROCESSED</option>
                                <option value="PROCESSING">PROCESSING</option>
                                <option value="SHIPPED">SHIPPED</option>
                                <option value="DELIVERED">DELIVERED</option>
                                <option value="CANCELLED">CANCELLED</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select" name="show" id="">
                                <option value="20">Show 20</option>
                                <option value="30">Show 30</option>
                                <option value="40">Show 40</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Total</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <b>Nhà giả Kim</b>
                                </td>
                                <td>man@gmail.com</td>
                                <td>70.000đ</td>
                                <td>
                                    <span
                                        className="badge alert-danger"
                                        style={{ borderRadius: '50rem' }}
                                    >
                                        Chưa thanh toán
                                    </span>
                                </td>
                                <td>10-04-2023</td>
                                <td>
                                    <span className="badge not-process">Đang xử lý</span>
                                </td>
                                <td>
                                    <Link>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <b>Nhà giả Kim</b>
                                </td>
                                <td>man@gmail.com</td>
                                <td>70.000đ</td>
                                <td>
                                    <span
                                        className="badge alert-success"
                                        style={{ borderRadius: '50rem' }}
                                    >
                                        Đã thanh toán
                                    </span>
                                </td>
                                <td>10-04-2023</td>
                                <td>
                                    <span className="badge delivered">Đang xử lý</span>
                                </td>
                                <td>
                                    <Link>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <b>Nhà giả Kim</b>
                                </td>
                                <td>man@gmail.com</td>
                                <td>70.000đ</td>
                                <td>
                                    <span
                                        className="badge alert-danger"
                                        style={{ borderRadius: '50rem' }}
                                    >
                                        Chưa thanh toán
                                    </span>
                                </td>
                                <td>10-04-2023</td>
                                <td>
                                    <span className="badge processing">Đang xử lý</span>
                                </td>
                                <td>
                                    <Link>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <b>Nhà giả Kim</b>
                                </td>
                                <td>man@gmail.com</td>
                                <td>70.000đ</td>
                                <td>
                                    <span
                                        className="badge alert-danger"
                                        style={{ borderRadius: '50rem' }}
                                    >
                                        Chưa thanh toán
                                    </span>
                                </td>
                                <td>10-04-2023</td>
                                <td>
                                    <span className="badge shipped">Đang xử lý</span>
                                </td>
                                <td>
                                    <Link>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">1</th>
                                <td>
                                    <b>Nhà giả Kim</b>
                                </td>
                                <td>man@gmail.com</td>
                                <td>70.000đ</td>
                                <td>
                                    <span
                                        className="badge alert-danger"
                                        style={{ borderRadius: '50rem' }}
                                    >
                                        Chưa thanh toán
                                    </span>
                                </td>
                                <td>10-04-2023</td>
                                <td>
                                    <span className="badge cancelled">Đang xử lý</span>
                                </td>
                                <td>
                                    <Link>
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Orders;
