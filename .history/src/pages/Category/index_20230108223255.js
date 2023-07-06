import './category.scss';
import DataTable from '../../components/Datatable/Datatable';
import CategoryService from '../../services/CategoryService';
import { useEffect, useState } from 'react';
function Category() {
    const [categorise, setCategorise] = useState([]);
    useEffect(() => {
        CategoryService.getAllCategories().then((resp) => {
            setCategorise(resp.data);
        });
    }, []);
    console.log(categorise);
    return (
        <div className="container-fluid">
            <div className="title">
                <h2>Categorise</h2>
            </div>
            <div className="row category-content">
                <div className="col-4">
                    <div className="create-category">
                        <form action="">
                            <div class="mb-3">
                                <label for="categoryname" class="form-label">
                                    Category Name
                                </label>
                                <input type="text" id="categoryname" required placeholder="Enter category name" />
                            </div>
                            <div className="md-3">
                                <button type="submit" class="btn btn-success btn-lg btn-create-category">
                                    Create Category
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-8">
                    <div className="list-category">
                        <DataTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
