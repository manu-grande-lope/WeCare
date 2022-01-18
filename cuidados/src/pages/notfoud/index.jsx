import { Grid, Typography} from "@mui/material";
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

export default function NotFound(){

    return(
        <Grid item container xs={12} justifyContent="center" style={styles.paperContainer} >
        <Grid item container xs={12} lg={12}  m={20} width={20} >
        <Card>
                <CardContent>
                <img src={`${URL}/public/images/error.png`}/>
                    <Typography gutterBottom fontSize={40}>
                    404 FOUND 
                    </Typography>
                </CardContent>
        </Card>    
        </Grid>
        </Grid>
    )
}