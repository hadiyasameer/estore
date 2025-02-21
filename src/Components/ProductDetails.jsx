import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchProduct();
    }, [productId]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await axios.get('https://fakestoreapi.com/products');
                setProducts(res.data);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoadingProducts(false);
            }
        }
        fetchProducts();
    }, []);

    if (loading) return <div>Loading product details...</div>;
    if (loadingProducts) return <div>Loading more products...</div>;

    const currentIndex = products.length > 0 ? products.findIndex((p) => p.id === parseInt(productId)) : -1;

    let moreProducts = [];
    if (currentIndex !== -1) {
        for (let i = 1; i <= 4; i++) {
            moreProducts.push(products[(currentIndex + i) % products.length]);
        }
    }

    return (
        <>
            <Link to="/estore/">
                <Button variant="info" className="backButton">Back</Button>
            </Link>
            <h1 className="title">{product.title}</h1>
            <div className="showProductDetails">
                <div className="img-div">
                    <img src={product.image} className="detail-img" alt={product.title} />
                </div>
                <div className="description-div">
                    <h4 className="details">Details:</h4>
                    <h5 className="description">{product.description}</h5>
                    <h5 className="price">Price: $ {product.price}</h5>
                    <div className="detailsButtons-div">
                        <Button variant="info" className="addbutton">Add to Cart</Button>
                        <Button variant="info" className="viewcartbutton">View Cart</Button>
                    </div>
                </div>
            </div>

            <div className="more-items">
                <h3>You may also like...</h3>
                <div className="row">
                    {moreProducts.length > 0 ? (
                        moreProducts.map((product) => (
                            <div key={product.id} className="productlist col-lg-3 col-md-4 col-sm-6 my-4">
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
                        <div>No similar products</div>
                    )}
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
