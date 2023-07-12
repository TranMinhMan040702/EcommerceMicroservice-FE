import { useEffect } from 'react';
import DataTable from '../../components/Datatable/Datatable';
import CategoryService from '../../services/categoryService';
function List() {
    useEffect(() => {
        CategoryService.getAllCategories().then((resp) => {
            console.log(resp.data);
        }, []);
    });
    const data = 'datatable of ';
    return (
        <div className="list">
            <DataTable />
        </div>
    );
}

export default List;