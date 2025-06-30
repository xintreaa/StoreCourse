import { useParams } from "react-router-dom"
import {Button, Divider, Grid2, Table, TableBody, TableCell, TableContainer, TableRow, TextField, Typography } from "@mui/material/";
import { useFetchProductDetailsQuery } from "./catalogApi";


export default function ProductDetails() {

    const { id } = useParams();

    const { data: product, isLoading } = useFetchProductDetailsQuery(id ? +id:0)

    if (isLoading) return <Typography variant="h5" sx={{ mt: 2, textAlign: 'center' }}>Loading...</Typography>;

    if (!product) return <Typography variant="h5" sx={{ mt: 2, textAlign: 'center' }}>Product not found</Typography>;
    const productDetails = [
        { label: 'Description', value: product.description },
        { label: 'Quanity in stock', value: product.quantityInStock},
        { label: 'Brand', value: product.brand },
        { label: 'Type', value: product.type }
    ]

    return (
        <Grid2 container spacing={6} maxWidth='lg' sx={{mx: 'auto'} }>
            <Grid2 size={6}>
                <img src={product?.pictureUrl} alt={product?.name} style={{ width: '100%', height: 'auto' }} />
            </Grid2>
            <Grid2 size={6}>
                <Typography variant="h3">{product?.name}</Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="h4" color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
                <TableContainer>
                    <Table sx={{
                        '& td': { fontSize: '1rem' }
                    } }>
                        <TableBody>
                                {productDetails.map((detail, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ fontWeight: 'bold' }}>{detail.label}</TableCell>
                                        <TableCell>{detail.value}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Grid2 container spacing={2} marginTop={3}>
                    <Grid2 size={6}>
                        <TextField
                            variant="outlined"
                            type="number"
                            label="Quantity in cart"
                            fullWidth
                            defaultValue={1}
                        />
                    </Grid2>
                    <Grid2 size={6}>
                        <Button
                            sx={{height:'55px'} }
                            color="primary"
                            size="large"
                            variant="contained"
                            fullWidth
                        >
                            Add to cart
                        </Button>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Grid2>
    )
}