import { Paper, Box, Typography, Grid2, IconButton } from "@mui/material"
import { Item } from "../../app/models/basket"
import { Remove, Add, Close } from "@mui/icons-material"
import { useAddBasketItemMutation, useRemoveBasketItemMutation } from "./basketApi"
import { currencyFormat } from "../../lib/util"

type Props = {
    item: Item
}
export default function BasketItem({ item }: Props) {
    const [removeBasketItem] = useRemoveBasketItemMutation();
    const [addBasketItem] = useAddBasketItemMutation();

    return (
        <Paper sx={{
            height: 140,
            width: 650,
            display: 'flex',
            borderRadius: 3,
            justifyContent: 'space-between',
            alighItems: 'center',
            mb: 2
        } }>
            <Box display='flex' alignItems='center'>
                <Box
                    component='img'
                    src={item.pictureUrl}
                    alt={item.name}
                    sx={{
                        height: 120,
                        width: 120,
                        borderRadius: '4px',
                        objectFit: 'cover',
                        mr: 8,
                        ml: 4
                    }}
                />
                <Box display='flex' flexDirection='column' gap={1}>
                    <Typography variant='h6'>
                        {item.name}
                    </Typography>

                    <Box display='flex' alignItems='center' gap={3}>
                        <Typography sx={{ fontSize: '1.1rem' }}>
                            {currencyFormat(item.price)} x {item.quantity}
                        </Typography>
                        <Typography sx={{ fontSize: '1.1rem' }} color='primary'>
                            {currencyFormat(item.price * item.quantity)}
                        </Typography>
                    </Box>

                    <Grid2 container spacing={1} alignItems='center'>
                        <IconButton
                            onClick={() => removeBasketItem({productId: item.productId, quantity: 1 })}
                            color='error'
                            size='small'
                            sx={{ border: 1, borderRadius: 1, minWidth: 0 }}>
                           <Remove/>
                        </IconButton>
                        <Typography variant="h6">{item.quantity}</Typography>
                        <IconButton
                            onClick={() => addBasketItem({ product: item, quantity: 1 })}
                            color='success'
                            size='small'
                            sx={{ border: 1, borderRadius: 1, minWidth: 0 }}>
                            <Add />
                        </IconButton>
                    </Grid2>
                </Box>
            </Box>
            <IconButton
                onClick={() => removeBasketItem({ productId: item.productId, quantity: item.quantity })}
                color='error' size='small' sx={{
                    border: 1,
                    borderRadius: 3,
                    minWidth: 0,
                    alignSelf: 's',
                    ml: 1,
                    mt:0
                }}>
            <Close />
            </IconButton>
        </Paper>
    )

}