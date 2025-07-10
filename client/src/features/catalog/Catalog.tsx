import { Grid2 } from "@mui/material";
import ProductList from "./ProductList";
import { useFetchProductsQuery } from "./catalogApi";
import Filters from "./Filters";
import { useAppDispatch, useAppSelector } from "../../app/store/store";
import { setPageNumber } from "./catalogSlice";
import AppPagination from "../../app/shared/components/AppPagination";



export default function Catalog() {
    const productParams = useAppSelector(state => state.catalog);
    const { data, isLoading } = useFetchProductsQuery(productParams);
    const dispatch = useAppDispatch();

    if (isLoading || !data) return <h3></h3>
    

    return (
        <Grid2 container spacing={4}>
            <Grid2 size={3}>
                <Filters />
            </Grid2>
            <Grid2 size={9}>
                <ProductList products={data.items} />
                <AppPagination
                    metadata={data.pagination}
                    onPageChange={(page: number) => {
                        dispatch(setPageNumber(page))
                        window.scrollTo({
                            top: 0, behavior: 'smooth'
                        })
                        }}
                />
            </Grid2>
        </Grid2>
    );
}