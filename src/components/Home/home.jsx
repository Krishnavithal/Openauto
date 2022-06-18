import { Grid, Typography } from "@mui/material"
import "./home.css";
import { Pickup_Illustration } from "../../assets/images";
import UserForm from "./userForm";
import Footer from "../Footer/footer";

function Home() {

    return (
        <div className="homeContent">
            <Grid container className="gridContainer">
                <Grid item container xs={6} direction="column" sx={{ rowGap: "32px" }}>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                        <Typography className="home-page-heading" variant="h4" component="div" color="white">Vehicle Maintenance</Typography>
                        <Typography className="home-page-heading" variant="h4" component="div" color="white">From The Comfort Of</Typography>
                        <Typography className="home-page-heading" variant="h4" component="div" color="white">Your Home</Typography>
                    </div>
                    <Typography variant="h6" component="div" color="gray" >Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</Typography>
                    <UserForm />
                </Grid>
                <Grid item xs={6}>
                    <img className="pickupIllustrationImg" src={Pickup_Illustration} alt="Not found" />
                </Grid>
            </Grid>
            <Footer hideCopyRightsLogo={true}/>
        </div>
    )
}

export default Home;