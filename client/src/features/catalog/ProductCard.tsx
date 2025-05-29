import { Product } from "../../app/models/product"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    product: Product
}
export default function ProductCard({product}: Props) {
    return (
        <Card
            elevation={3}
        >
            <CardMedia
                sx={{ height: 240, backgroundSize: 'cover' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    sx={{textTransform: 'uppercase'} }
                    variant="subtitle2">
                    {product.name}
                </Typography>
                
                <Typography
                    variant="h6"
                    sx={{color: 'seconadary.main'} }
                >
                    ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions
                sx={{ justifyContent: 'space-between' }}
            >
                <Button>Add to cart</Button>
                <Button>View the detail</Button>
            </CardActions>
        </Card>
    )
}