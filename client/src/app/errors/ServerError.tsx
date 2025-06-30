import { SearchOff } from "@mui/icons-material";
import { Button, Link, Paper, Typography } from "@mui/material";

export default function ServerError() {

    return (
        <Paper
            sx={{
                height: 300,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                p: 6
            }}
        >
            <SearchOff sx={{ fontSize: 100 }} color='primary' />
            <Typography gutterBottom variant="h5" color='primary'>Oops...Server Error occured</Typography>
            <Button fullWidth component={Link} color="primary" href="/catalog">
                Return to the main page
            </Button>

        </Paper>
    )
}