import { useState, useEffect } from "react";

function App() {
    const [products, setProducts] = useState<{ name: string, price: number }[]>([]);

    useEffect(() => {
        fetch('http://localhost:5045/api/product')
            .then(response => response.json())
            .then(data => setProducts(data));

    }, []);

    return (
        <div>
            <h1>Re-Store</h1>
            <ul>
                {products.map((item, index) => (
                    <li key={index}>{item.name} - {item.price}</li>
                ))}
            </ul>
           
        </div>
    );
}

export default App;