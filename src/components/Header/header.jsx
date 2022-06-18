import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Phone, Email } from '@mui/icons-material';
import "./header.css";

function Header() {
    return (
        <Box className="header">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Openauto
                    </Typography>
                    <Button color="inherit" startIcon={<Phone />}>+769 586 4558</Button>
                    <Button color="inherit" startIcon={<Email />}>service@openauto.ca</Button>
                    <Button color="inherit" variant="outlined">Download the mobile app</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;