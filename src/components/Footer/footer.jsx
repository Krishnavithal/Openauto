import { AppBar, Toolbar } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn, Instagram, ArrowCircleDown, ArrowCircleUp } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import "./footer.css"
import { useState } from 'react';

export default function Footer({ hideCopyRightsLogo }) {
    const [upArrow, setUpArrow] = useState(true);
    function handleScroll() {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }
    function handleHover() {
        setUpArrow(false);
    }
    return (
        <AppBar className='footer' position="static" sx={{ padding: "16px" }}>

            <Toolbar>
                {hideCopyRightsLogo ? <Typography

                    variant="body1"
                    color="inherit"
                    style={{ width: '100%', textAlign: 'center', fontSize: "32px" }}
                >
                    {!upArrow ? <ArrowCircleDown onClick={handleScroll} /> : <ArrowCircleUp sx={{ ":hover": {handleHover} }} />}

                </Typography> : <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                    Open Auto @ all rights reserved
                </Typography>}
                <div className="footerIcons">
                    <Facebook />
                    <Twitter />
                    <YouTube />
                    <LinkedIn />
                    <Instagram />
                </div>
            </Toolbar>
        </AppBar>
    );
}
