import { axiosPrivate } from '../api/axios';

class CategoryService {
    getAllCategories() {
        return axiosPrivate.get('/categorise');
    }
    addCategory(category) {
        return axiosPrivate.post('/admin/categorise', category);
    }
    updateCategory(category) {
        return axiosPrivate.put('/admin/categorise/' + category.id, category);
    }
    deletedPermanentlyCategory(listIds) {
        return axiosPrivate.delete('/admin/categorise/' + listIds);
    }
}

export default new CategoryService();
