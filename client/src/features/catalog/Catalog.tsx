import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";



export default function Catalog() {
    const { data, isLoading } = useFetchProductsQuery();

    if (isLoading || !data) return <h3></h3>
    

    return (
        <>
            <ProductList products={data} />
        </>
    );
}