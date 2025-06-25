import { useState} from "react";
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function App() {
 
    const [darkMode, setDarkMode] = useState<boolean>(true); // This can be replaced with a state or context for dynamic theme switching]
    const paletteType = darkMode ? 'dark' : 'light';

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    const theme = createTheme({
        palette: {
            mode: paletteType,
            background: {
                default: paletteType === 'dark' ? '#121212' : '#eaeaea',
            }
        }
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Box sx={{
                minHeight: '100vh',
                background: darkMode
                    ? 'radial-gradient(circle, #1e3aBa, #111B27)'
                    : 'radial-gradient(circle, #baecf9, #f0f9ff)',
                    py: 6}}>
            <Container maxWidth='xl' sx={{mt:12}}>
            <Outlet/>
                </Container>
       </Box>
    </ThemeProvider>
    );
}

export default App;