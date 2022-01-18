import { Grid, Typography} from "@mui/material";
import { useTranslation } from "react-i18next";
import people from '../assets/people.jpg';
import { 
    Card, 
    CardContent 
} from "@mui/material";
import {URL} from '../constantes/globales.js';

const styles = {
    paperContainer: {
        backgroundImage: `url(${people})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: '90vh',

    }
};


export default function About(){

    const [i] = useTranslation("global");

    return(
        <Grid item container xs={12} justifyContent="center" style={styles.paperContainer} >
        <Grid item container xs={12} lg={6}  mt={20} ml={10} mr={10} mb={20} height="40vh">
        <Card>
                <CardContent>
                <img src={`${URL}/public/images/aboutus.png`}/>
                    <Typography gutterBottom variant="body1" component="div">
                    {i ("aboutUs.main")}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                    {i ("aboutUs.textOne")}
                    </Typography>
                </CardContent>
        </Card>    
        </Grid>
        </Grid>
    )
}