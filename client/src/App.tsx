import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function App() {
    const [products, setProducts] = useState<{ name: string, price: number }[]>([]);

    useEffect(() => {
        fetch('http://localhost:5045/api/product')
            .then(response => response.json())
            .then(data => setProducts(data));

    }, []);

    const addProduct = () => {
        setProducts(prevState => [...prevState, { name: 'product ' + (prevState.length + 1), price: 300.00 }]);
    }

    return (
        <div>
            <h1>Re-Store</h1>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
            </ul>
            <Button variant='contained' onClick={addProduct}>Add Product</Button>
        </div>
    );
}

export default App;