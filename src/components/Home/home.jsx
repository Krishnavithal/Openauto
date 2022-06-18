import { Grid, Typography } from "@mui/material"
import "./home.css";
import { Pickup_Illustration } from "../../assets/images";
import UserForm from "./userForm";

function Home() {

    return (
        <div className="homeContent">
            <Grid container className="gridContainer">
                <Grid item container xs={6} direction="column">
                    <Typography variant="h4" component="div" color="white" >Vehicle Maintenance From The Comfort Of Your Home</Typography>
                    <Typography variant="h6" component="div" color="gray" >Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free.</Typography>
                    <UserForm />
                </Grid>
                <Grid item xs={6}>
                    <img className="pickupIllustrationImg" src={Pickup_Illustration} alt="Not found" />
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;