/**
     * Usage: Renders the details component;
*/

import { Grid, Typography, Button, useTheme, useMediaQuery } from "@mui/material"
import "./mobileDetail.css";
import { pickup_Service } from "../../assets/images";
import Footer from "../Footer/footer";
import Header from "../Header/header";

function Details() {
    const theme = useTheme();
    const xsView = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className="details-parent">
            <Grid container className="grid-container-details" direction={xsView ? "column-reverse" : "row"}>
                <Grid item xs={6} className="grid-container-details-item">
                    <img className="pickup-service-img" src={pickup_Service} alt="Not found" />
                </Grid>
                <Grid item direction="column" xs={6} className="grid-container-details-item" sx={{ display: "flex", rowGap: xsView ? "8px" : "32px", paddingBottom: xsView && "48px" }}>
                    <Typography variant="h4" component="div" color="white" className="detail-heading">Focused on Time Saving</Typography>
                    <Typography variant="h6" component="div" color="gray" sx={{ fontSize: xsView && "12px", textAlign: xsView && "center" }}>Lorem Ipsum is simply dummied text of
                        the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.It was
                    </Typography>
                    <Button variant="outlined" className="download" sx={{ color: "white", border: "solid", width: "50%" }}>Download the mobile app</Button>
                </Grid>
            </Grid>
            <Header hideDownloadButton={true} />
            <Footer showPolicies={xsView} />
        </div>
    )
}

export default Details;