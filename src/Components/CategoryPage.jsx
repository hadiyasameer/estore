import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function CategoryPage() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchCategoryProducts() {
            try {
                const res = await axios.get(`https://fakestoreapi.com/products/category/${categoryName}`);
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchCategoryProducts();
    }, [categoryName]); 

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2 className="text-dark my-4 text-center">Showing Products</h2>
            <div className="row" id="rowcategory">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 my-4">
                            <Card className="productItem">
                                <Card.Img variant="top" className="productImage" src={product.image} alt={product.title} />
                                <Card.Body className="card-body">
                                    <Card.Title className="productTitle">{product.title}</Card.Title>
                                    <div className="card-actions">
                                        <Link to={`/product/${product.id}`}>
                                            <Button variant="primary" className="viewButton">View</Button>
                                        </Link>
                                        <Button variant="info" className="addButton">Add to Cart</Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <div>No products found in this category.</div>
                )}
            </div>
            </div>
    );
}

export default CategoryPage;
