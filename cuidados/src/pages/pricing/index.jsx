import {Typography } from "@mui/material"
import money from '../assets/money.jpg';
import { 
    Grid, 
    Card, 
    CardContent
} from "@mui/material";
import { useTranslation } from "react-i18next";
import {URL} from '../../components/constantes/globales.js';

const styles = {
    paperContainer: {
        backgroundImage: `url(${money})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: '90vh',

    }
};



export default function Pricing(){
    const [i] = useTranslation("global");

    return(
        <Grid item container xs={12} justifyContent="center"  style={styles.paperContainer}>
        <Grid item container xs={12} lg={6}  mt={20} ml={10} mr={10} mb={20} height="40vh">
        <Card>
                <CardContent>
                <img src={`${URL}/public/images/money.png`}/>
                    <Typography gutterBottom variant="h5" component="div">
                    {i("pricing.titlePricing")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("pricing.pricingText")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("pricing.pricingText2")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("pricing.pricingText3")}
                    </Typography>
                </CardContent>
        </Card>    
        </Grid>
        </Grid>
    )
}