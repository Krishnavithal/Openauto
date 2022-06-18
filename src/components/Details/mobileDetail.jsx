import { Grid, Typography, Button } from "@mui/material"
import "./mobileDetail.css";
import { pickup_Service } from "../../assets/images";
import Footer from "../Footer/footer";
import Header from "../Header/header";

function Details() {
    return (
        <div className="detailsParent">
            <Grid container className="gridContainerDetails">
                <Grid item xs={6} className="gridContainerDetails-item">
                    <img className="pickupServiceImg" src={pickup_Service} alt="Not found" />
                </Grid>
                <Grid item direction="column" xs={6} className="gridContainerDetails-item" sx={{ display: "flex", rowGap: "32px" }}>
                    <Typography variant="h4" component="div" color="white" >Focused on Time Saving</Typography>
                    <Typography variant="h6" component="div" color="gray" >Lorem Ipsum is simply dummied text of
                        the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.It was
                    </Typography>
                    <Button variant="outlined" className="download" sx={{ color: "white", border: "solid", width: "50%" }}>Download the mobile app</Button>
                </Grid>
            </Grid>
            <Header hideDownloadButton={true} />
            <Footer />
        </div>
    )
}

export default Details;