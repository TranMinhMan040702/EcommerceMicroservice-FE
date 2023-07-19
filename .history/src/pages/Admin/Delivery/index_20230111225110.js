import DataTable from '../../../components/Datatable/Datatable';
function Delivery() {
    const columns = [];
    const data = [];
    const actionColumns = [];

    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Delivery</h2>
            </div>
            <div className="card mb-4 shadow-sm bg-white">
                <div className="card-body">
                    <div className="row">
                        <div className="col-4">
                            <form action="">
                                <div class="mb-3">
                                    <label for="deliveryname" class="form-label">
                                        Delivery name
                                    </label>
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="deliveryname"
                                        required
                                        placeholder="Enter delivery name"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="price" class="form-label">
                                        Price
                                    </label>
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="price"
                                        required
                                        placeholder="Enter product price"
                                    />
                                </div>
                                <div class="mb-3">
                                    <label for="description" class="form-label">
                                        Description
                                    </label>
                                    <textarea
                                        class="form-control"
                                        id="description"
                                        rows="5"
                                        required
                                        placeholder="Enter delivery description"
                                    ></textarea>
                                </div>
                                <div className="md-3 d-flex justify-content-end">
                                    <button type="submit" class="btn btn-success">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-8">
                            <DataTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Delivery;
