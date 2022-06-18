import { AppBar, Container, Toolbar } from '@mui/material';
import { Facebook, Twitter, YouTube, LinkedIn, Instagram } from '@mui/icons-material';
import Typography from '@mui/material/Typography';

export default function Footer() {
    return (
        <AppBar position="static">
            <Container maxWidth="md">
                <Toolbar>
                    <Typography
                        variant="body1"
                        color="inherit"
                        style={{ width: '100%', textAlign: 'center' }}
                    >
                        Open Auto @ all rights reserved
                    </Typography>
                    <Facebook />
                    <Twitter />
                    <YouTube />
                    <LinkedIn />
                    <Instagram />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
