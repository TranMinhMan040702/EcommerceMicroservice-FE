/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import OrderService from '../../../../services/OrderService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { formatter } from '../../../../utils';
import Loading from '../../../../components/Loading';
import config from '../../../../config';
import { convertParams } from '../../../../utils';
function OrdersTable() {
    const [orders, setOrders] = useState();
    const [params, setParams] = useState({
        status: '',
        page: '',
        limit: '',
        sortBy: '',
        search: '',
    });
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    useEffect(() => {
        getAllOrders(convertParams(params));
    }, [params]);

    const getAllOrders = async (requestParams) => {
        try {
            const response = await OrderService.getAllOrders(requestParams);
            setOrders(response.data);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };
    const handleDate = (timeStamp) => {
        const date = new Date(timeStamp);
        return date.toDateString();
    };
    const handleStatus = (status) => {
        switch (status) {
            case 'NOT_PROCESSED':
                return <span className="badge not-process">Chưa xử lý</span>;
            case 'PROCESSING':
                return <span className="badge processing">Đang xử lý</span>;
            case 'SHIPPED':
                return <span className="badge shipped">Đang giao</span>;
            case 'DELIVERED':
                return <span className="badge delivered">Đã giao</span>;
            case 'CANCELLED':
                return <span className="badge cancelled">Đã hủy</span>;
            default:
                return <span className="badge not-process">Đang xử lý</span>;
        }
    };
    const handleSetState = async (e) => {
        setParams((prev) => {
            return { ...prev, status: e.target.value };
        });
    };
    const handleLimit = (limit) => {};
    const handleSearch = () => {};
    return (
        <>
            <div className="title">
                <h2>Orders</h2>
            </div>
            <div className="card mb-4 mt-3 shadow-sm">
                <div className="card-header bg-white">
                    <div className="row gx-3 py-2">
                        <div className="col-lg-5 col-md-6 me-auto d-flex">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search...."
                                style={{ width: '70%' }}
                            />
                            <button
                                className="btn btn-sm btn-success mx-3"
                                style={{ height: '36px' }}
                                onClick={() => handleSearch()}
                            >
                                Tìm kiếm
                            </button>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select
                                className="form-select d-inline-block"
                                name="state"
                                onChange={(e) => handleSetState(e)}
                            >
                                <option value="ALL">Tất cả</option>
                                <option value="NOT_PROCESSED">Chưa xử lý</option>
                                <option value="PROCESSING">Đang xử lý</option>
                                <option value="SHIPPED">Đang giao</option>
                                <option value="DELIVERED">Đã giao</option>
                                <option value="CANCELLED">Đã hủy</option>
                            </select>
                        </div>
                        <div className="col-lg-2 col-6 col-md-3">
                            <select className="form-select" onChange={(e) => handleLimit(e)}>
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
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Total</th>
                                <th scope="col">Paid</th>
                                <th scope="col">Date</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading ? (
                                <Loading />
                            ) : (
                                orders.map((order, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>
                                                <b>
                                                    {order.user.firstname +
                                                        ' ' +
                                                        order.user.lastname}
                                                </b>
                                            </td>
                                            <td>{order.phone}</td>
                                            <td>{order.address}</td>
                                            <td>{formatter(order.amountFromUser)}</td>
                                            <td>
                                                {order.paidBefore ? (
                                                    <span
                                                        className="badge alert-success"
                                                        style={{ borderRadius: '50rem' }}
                                                    >
                                                        Đã thanh toán
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="badge alert-danger"
                                                        style={{ borderRadius: '50rem' }}
                                                    >
                                                        Chưa thanh toán
                                                    </span>
                                                )}
                                            </td>
                                            <td>{handleDate(order.createdAt)}</td>
                                            <td>{handleStatus(order.status)}</td>
                                            <td>
                                                <Link
                                                    to={config.routes.admin.orders + '/' + order.id}
                                                >
                                                    <FontAwesomeIcon icon={faEye} />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default OrdersTable;
