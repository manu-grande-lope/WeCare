import { Grid } from "@mui/material";
import ResponsiveAppBar from "../appBar"
import TextClaim from '../textClaim/index.jsx';

export default function Header() {


    return (
        <Grid item container justifyContent="space-evenly" sx={{backgroundColor:'primary.main'}}>
                <ResponsiveAppBar/>
                {/* <Grid item container alignSelf="flex-start" ml={8}>
                <TextClaim/>
                </Grid> */}
                
        </Grid>
    )
}