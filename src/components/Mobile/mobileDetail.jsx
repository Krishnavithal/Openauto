import { Grid, Typography,Button } from "@mui/material"
import "./mobileDetail.css";
import { pickup_Service } from "../../assets/images";

function Details() {
    return (
        <div className="detailsParent">
            <Grid container >
                <Grid item xs={6}>
                    <img className="pickupServiceImg" src={pickup_Service} alt="Not found" />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h4" component="div" color="white" >Focused on Time Saving</Typography>
                    <br />
                    <Typography variant="h6" component="div" color="gray" >Lorem Ipsum is simply dummied text of
                        the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.It was
                    </Typography>
                    <Button variant="outlined">Download the mobile app</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Details;