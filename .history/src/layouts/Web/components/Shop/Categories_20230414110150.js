import { useEffect, useState } from 'react';
import CategoryService from '../../../../services/CategoryService';
function Categories({ params, setParams }) {
    const [categorise, setCategorise] = useState([]);
    useEffect(() => {
        getCategory();
    }, []);
    const getCategory = async () => {
        try {
            const response = await CategoryService.getAllCategories();
            setCategorise(response.data);
        } catch (error) {
            console.log(error.message);
        }
    };
    const handleClick = (e) => {
        console.log(e.target.id);
        addActive();
    };
    const addActive = () => {
        const tags = document.getElementsByClassName('category-item');
        console.log(tags);
    };
    return (
        <div className="category">
            <h6>Danh sách thể loại</h6>
            {categorise &&
                categorise.map((category) => {
                    return (
                        <div className="box">
                            <span
                                className="category-item"
                                id={category.id}
                                onClick={(e) => handleClick(e)}
                            >
                                {category.name}
                            </span>
                        </div>
                    );
                })}
        </div>
    );
}

export default Categories;
