import { useState, useEffect } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Button, Container, Typography } from "@mui/material";

function App() {
    const [products, setProducts] = useState<{
        id: number,
        name: string,
        price: number, quantityInStock: number,
        description: string,
        pictureUrl: string,
        type: string,
        brand: string
    }[]>([]);


    useEffect(() => {
        fetch('http://localhost:5045/api/product')
            .then(response => response.json())
            .then(data => setProducts(data));

    }, []);

    const addProduct = () => {
        setProducts(prevState => [...prevState,
            {
            id: prevState.length + 1,
            name: 'product ' + (prevState.length + 1),
            price: (prevState.length + 100) + 100,
            quantityInStock: 100,
            description: 'test',
            pictureUrl: 'https://picsum.photo/200',
            type: 'test',
            brand: 'test'
            }])
    }

    return (
        <Container maxWidth='xl'>
            <Typography variant='h3'>Re-Store</Typography>
            <Button variant='contained' onClick={addProduct}>Add Product</Button>
            <Catalog products={products} addProduct={addProduct} />
     
        </Container>
    );
}

export default App;