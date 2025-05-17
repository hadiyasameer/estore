import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Products from './Products';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function SearchResults() {
    const query = useQuery();
    const searchTerm = query.get('q')?.toLowerCase() || '';
    const [products, setProducts] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);
    useEffect(() => {
        const filteredData = products.filter(p =>
            p.title.toLowerCase().includes(searchTerm)
        );
        setFiltered(filteredData);
    }, [searchTerm, products]);

    if (loading) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h4>{filtered.length} results found for "{searchTerm}"</h4>
            <Products products={filtered} />
        </div>
    );
}

export default SearchResults;
