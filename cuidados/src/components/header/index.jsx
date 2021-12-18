import { Grid } from "@mui/material";
import ResponsiveAppBar from "../appBar"
import TextClaim from '../textClaim/index.jsx';

export default function Header() {


    return (
        <Grid container justifyContent="space-around" p={4}>
                <ResponsiveAppBar/>
                <TextClaim/>
                
        </Grid>
    )
}