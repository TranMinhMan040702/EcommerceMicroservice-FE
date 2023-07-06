import { useEffect, useState } from 'react';
import OrderService from '../../../../services/OrderService';
import OrdersTable from './OrdersTable';
import OrderDetail from './OrderDetail';
import './orders.scss';
import { useLocation, useParams } from 'react-router-dom';

function Orders() {
    const [orders, setOrders] = useState();
    const [loading, setLoading] = useState(true);
    const param = useParams()['slug'];
    const location = useLocation();
    const from = location.pathname + loading?.search;

    useEffect(() => {
        getAllOrders();
    }, []);

    const getAllOrders = async () => {
        try {
            const response = await OrderService.getAllOrders();
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
    return (
        <div className="container-fluid">
            {!param ? (
                <OrdersTable
                    orders={orders}
                    loading={loading}
                    handleDate={handleDate}
                    handleStatus={handleStatus}
                />
            ) : (
                <OrderDetail orderId={param} from={from} />
            )}
        </div>
    );
}

export default Orders;
