import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

function Products({ products }) {
    console.log("Products received in Products component:", products);

    return (

        <div className="row">
            {
                products?.map((product) => (
                    <div key={product.id} className="productlist col-lg-3 col-md-4 col-sm-6 my-4">
                        <Card key={product.id} className="productItem" >
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
                ))}
        </div>

    );
}

export default Products;
