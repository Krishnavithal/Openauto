import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Phone, Email } from '@mui/icons-material';
import "./header.css";

function Header({ hideDownloadButton }) {
    return (
        <AppBar className="header" position="static" sx={{ padding: "16px" }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "32px" }}>
                    OPENAUTO
                </Typography>
                <div className="left-actions">
                    <Button color="inherit" startIcon={<Phone />}>+769 586 4558</Button>
                    <Button color="inherit" startIcon={<Email />} sx={{ textTransform: "lowercase" }}>service@openauto.ca</Button>
                    {!hideDownloadButton ? <Button className="download" color="inherit" variant="outlined">Download the mobile app</Button> : null}
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;