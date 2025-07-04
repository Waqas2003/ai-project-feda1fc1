import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleAddToCart = (product) => {
        setCart({ ...cart, [product.id]: product });
    };

    return (
        <div>
            <h1>Ecommerce Website</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <a href="#" onClick={() => handleAddToCart(product)}>
                            {product.name}
                        </a>
                    </li>
                ))}
            </ul>
            <h2>Cart:</h2>
            <ul>
                {Object.keys(cart).map((key) => (
                    <li key={key}>{cart[key].name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
```

This is a basic e-commerce website with a Django backend and a React frontend. The Django backend provides an API for the React frontend to fetch products and create orders. The React frontend displays a list of products and allows users to add them to their cart.