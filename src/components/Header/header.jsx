import { AppBar, Toolbar, Typography, Button, useTheme, useMediaQuery } from "@mui/material";
import { Phone, Email } from '@mui/icons-material';
import "./header.css";

function Header({ hideDownloadButton, hideLeftActions }) {
    const theme = useTheme();
    const xsView = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <AppBar className="header" position="static" sx={{ padding: "16px" }}>
            <Toolbar sx={{ display: xsView && "flex", flexDirection: xsView && "column", padding: xsView && "0px" }}>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: "32px" }}>
                    OPENAUTO
                </Typography>
                {!hideLeftActions && <div className="left-actions">
                    <Button color="inherit" startIcon={<Phone />}>+769 586 4558</Button>
                    <Button color="inherit" startIcon={<Email />} sx={{ textTransform: "lowercase" }}>service@openauto.ca</Button>
                    {!hideDownloadButton ? <Button className="download" color="inherit" variant="outlined">Download the mobile app</Button> : null}
                </div>}
            </Toolbar>
        </AppBar>
    )
}

export default Header;