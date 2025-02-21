import React from 'react'
import Discount from './Discount'
import Products from './Products'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Main() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data)
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.error("Error fetching products:", err)
            })
    }, [])
    console.log("Products in Main:", products);

    return (
        <div className='body'>
            <Discount />
            <div className='productContainer' id="products">
                {loading ? (
                    <div>Loading...</div>
                ) : products.length > 0 ? (
                    <Products products={products} />
                ) : (
                    <div>No products available</div>
                )}
            </div>

        </div>
    )
}

export default Main