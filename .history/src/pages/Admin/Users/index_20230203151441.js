import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import images from '../../../assets/images';
import UserService from '../../../services/UserService';
import './users.scss';
function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        UserService.getUsers()
            .then((resp) => {
                setUsers(resp.data);
                console.log(resp.data);
            })
            .catch((err) => {
                console.log(err.response.data);
            });
    }, []);

    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Customers</h2>
            </div>
            <div className="card mb-4 mt-3 shadow-sm">
                <div className="card-header">
                    <div className="row gx-3 py-3">
                        <div className="col-lg-4 col-md-6 me-auto">
                            <input className="form-control" type="text" placeholder="Search...." />
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
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {users &&
                            users.map((user) => {
                                return (
                                    <div className="col">
                                        <div className="card card-user shadow-sm">
                                            <div className="card-header card-header-user">
                                                <img
                                                    src={user.avatar || images.noAvatar}
                                                    alt="avatar user"
                                                    className="img-avatar"
                                                />
                                            </div>
                                            <div className="card-body text-center">
                                                <div className="card-title mt-5">
                                                    <h5>Admin</h5>
                                                </div>
                                                <div className="card-text text-muted">
                                                    <p>Admin</p>
                                                    <p className="m-0">
                                                        <Link>admin@gmail.com</Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                </div>
                <nav className="pagination justify-content-center mt-4" aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item disabled">
                            <Link class="page-link" href="#">
                                Previous
                            </Link>
                        </li>
                        <li class="page-item active">
                            <Link class="page-link" href="#">
                                1
                            </Link>
                        </li>
                        <li class="page-item">
                            <Link class="page-link" href="#">
                                2
                            </Link>
                        </li>
                        <li class="page-item">
                            <Link class="page-link" href="#">
                                3
                            </Link>
                        </li>
                        <li class="page-item">
                            <Link class="page-link" href="#">
                                Next
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Users;
