import { Grid } from "@mui/material";
import ResponsiveAppBar from "../appBar"

export default function Header() {


    return (
        <Grid item container justifyContent="space-evenly" sx={{backgroundColor:'primary.main'}}>
                <ResponsiveAppBar/>
                
        </Grid>
    )
}