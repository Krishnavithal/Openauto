/**
     * Usage: Renders the footer component;
     * @prop {*} hideCopyRightsLogo toggle the rendering the copyrights label
     * @prop {*} showPolicies toggle the rendering the policies label
*/

import { AppBar, Toolbar, useTheme, useMediaQuery } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn, Instagram, ArrowCircleUp } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import "./footer.css"

export default function Footer({ hideCopyRightsLogo, showPolicies }) {

    const theme = useTheme();
    const xsView = useMediaQuery(theme.breakpoints.down('sm'));

    const handleScroll = () => {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0,
            behavior: 'smooth',
        });
    }
    return (
        <AppBar className='footer' position="static" sx={{ padding: "16px" }}>
            <Toolbar sx={{ display: xsView && "flex", flexDirection: xsView && "column", rowGap: "16px" }}>
                {hideCopyRightsLogo ?
                    !xsView ? <ArrowCircleUp className='go-down-button' sx={{ fontSize: "32px", flexGrow: 1 }} onClick={handleScroll} /> : null
                    : <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
                        Open Auto @ all rights reserved
                    </Typography>}
                {xsView && showPolicies && <div className='policies'>
                    <span>Privacy policy</span>
                    <span>Terms of use</span>
                    <span>Cookie policy</span>
                </div>}
                <div className="footer-icons">
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
