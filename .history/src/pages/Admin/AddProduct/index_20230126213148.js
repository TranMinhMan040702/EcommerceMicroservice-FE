import './addProduct.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ProductService from '../../../services/ProductService';
import { useEffect } from 'react';
import CategoryService from '../../../services/CategoryService';
function AddProduct() {
    const [images, setImages] = useState([]);
    const [preview, setPreview] = useState(null);
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        promotionalPrice: '',
        quantity: '',
        category: '',
    });
    const [categorise, setCategory] = useState([]);

    useEffect(() => {
        CategoryService.getAllCategories()
            .then((resp) => {
                setCategory(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleUploadClick = (e) => {
        setImages((prev) => {
            if (prev.length === 0 || !prev.find((item) => item.name === e.target.name)) {
                const item = {
                    name: e.target.name,
                    file: e.target.files[0],
                    preview: URL.createObjectURL(e.target.files[0]),
                };
                setPreview(item.preview);
                return [...prev, item];
            } else {
                prev.forEach((item) => {
                    if (item.name === e.target.name) {
                        item.file = e.target.files[0];
                        item.preview = e.target.previews[0];
                        setPreview(item.preview);
                    }
                });
                return [...prev];
            }
        });
    };

    useEffect(() => {
        return () => {
            images && URL.revokeObjectURL(preview);
        };
    });

    const AddProduct = (e) => {
        const data = new FormData();
        images.forEach(({ file }) => data.append('files', file));
        data.append('model', JSON.stringify(product));
        ProductService.addProduct(data)
            .then((resp) => {
                alert('Thêm sản phẩm thành công');
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="product">
            <div className="content-header d-flex justify-content-between align-items-center">
                <div className="title">
                    <h2>Add Product</h2>
                </div>
                <Link className="btn btn-danger">Go to products</Link>
            </div>
            <div className="card shadow-sm">
                <div className="card-body">
                    <form enctype="multipart/form-data">
                        <div className="row">
                            <div class="mb-3 col-lg-6">
                                <label for="productname" class="form-label">
                                    Product name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="productname"
                                    required
                                    placeholder="Enter product name"
                                    name="name"
                                    value={product.name}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div class="mb-3 col-lg-6">
                                <label for="categoryid" class="form-label">
                                    Category
                                </label>
                                <select onChange={(e) => handleChange(e)} class="form-select" name="category">
                                    <option selected>Chọn thể loại</option>
                                    {categorise.map((category) => {
                                        return <option value={category.id}>{category.name}</option>;
                                    })}
                                </select>
                            </div>
                            <div class="mb-3 col-lg-6">
                                <label for="price" class="form-label">
                                    Price
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="price"
                                    required
                                    placeholder="Enter product price"
                                    name="price"
                                    value={product.price}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div class="mb-3 col-lg-6">
                                <label for="promotionalPrice" class="form-label">
                                    Promotional Price
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="promotionalPrice"
                                    required
                                    placeholder="Enter product promotional price"
                                    name="promotionalPrice"
                                    value={product.promotionalPrice}
                                    onChange={(e) => handleChange(e)}
                                />
                            </div>
                            <div class="mb-3 col-lg-6">
                                <label for="quantity" class="form-label">
                                    Quantity
                                </label>
                                <input
                                    type="number"
                                    class="form-control"
                                    id="quantity"
                                    required
                                    placeholder="Enter product quantity"
                                    name="quantity"
                                    value={product.quantity}
                                    onChange={(e) => handleChange(e)}
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
                                    placeholder="Enter product description"
                                    name="description"
                                    value={product.description}
                                    onChange={(e) => handleChange(e)}
                                ></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="formFileMultiple" class="form-label">
                                    Chooses image for product
                                </label>
                                <div className="row">
                                    <div className="col-lg-3">
                                        <input
                                            accept="image/*"
                                            onChange={handleUploadClick}
                                            class="form-control"
                                            type="file"
                                            name="image1"
                                        />
                                        <div className="image-product w-100 mt-3">
                                            <img
                                                className="img-thumbnail"
                                                src="http://localhost:8081/api/v1/products/pf85d6da2-acaa-42f9-8c2e-2482d3e122c2.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <input
                                            accept="image/*"
                                            onChange={handleUploadClick}
                                            class="form-control"
                                            type="file"
                                            name="image2"
                                        />
                                        <div className="image-product w-100 mt-3">
                                            <img
                                                className="img-thumbnail"
                                                src="http://localhost:8081/api/v1/products/pf85d6da2-acaa-42f9-8c2e-2482d3e122c2.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <input
                                            accept="image/*"
                                            onChange={handleUploadClick}
                                            class="form-control"
                                            type="file"
                                            name="image3"
                                        />
                                        <div className="image-product w-100 mt-3">
                                            <img
                                                className="img-thumbnail"
                                                src="http://localhost:8081/api/v1/products/pf85d6da2-acaa-42f9-8c2e-2482d3e122c2.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <input
                                            accept="image/*"
                                            onChange={handleUploadClick}
                                            class="form-control"
                                            type="file"
                                            name="image4"
                                        />
                                        <div className="image-product w-100 mt-3">
                                            <img
                                                className="img-thumbnail"
                                                src="http://localhost:8081/api/v1/products/pf85d6da2-acaa-42f9-8c2e-2482d3e122c2.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="md-3 d-flex justify-content-end">
                                <button onClick={(e) => AddProduct(e)} class="btn btn-success">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
