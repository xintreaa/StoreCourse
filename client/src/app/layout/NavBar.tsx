import { DarkMode, LightMode, ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Toolbar, Typography} from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
];

const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' }
];

const navStyles = {
    color: 'inherit', typography: 'h6', textDecoration: 'none',
    '&:hover':
    {
        color: '#7965C1',
    },
    '&.active': {
        color: '#483AA0',
    },
}

type Props = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export default function NavBar({ darkMode, toggleDarkMode }: Props) {
    return (
        <AppBar position="fixed">
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center'} }>
                <Box display='flex' alignItems='center'>
                    <Typography component={NavLink} sx={navStyles} to='/' variant="h6">Re-Store</Typography>
                    <IconButton onClick={toggleDarkMode}>
                        {darkMode ? <DarkMode /> : <LightMode />}
                    </IconButton>
                </Box>

                <List sx={{display: 'flex'}}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>

                <Box display='flex' alignItems='center'>
                    <IconButton size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent='6' color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>

                    <List sx={{ display: 'flex' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
               
            </Toolbar>
        </AppBar>
    );
}