import {Typography } from "@mui/material"
import services from '../assets/services.jpg';
import { 
    Grid, 
    Card, 
    CardContent, 
} from "@mui/material";
import { useTranslation } from "react-i18next";






export default function Pricing(){
    const [i] = useTranslation("global");

    return(
        <Grid  container xs={12} flexDirection="column" justifyContent="center" spacing={8} paddingTop={8} paddingBottom={8}>
        <Grid item container xs={12} lg={6} alignSelf="center"  >
        <Card>
                <CardContent>
                <img src="http://localhost:3001/public/images/corgi.png"/>

                    <Typography gutterBottom variant="h5" component="div">
                    {i("banner.titlePets")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("banner.pets")}
                    </Typography>
                </CardContent>
        </Card>    
        </Grid>
        <Grid item container  xs={12} lg={6} alignSelf="center">
        <Card>
                <CardContent>
                <img src="http://localhost:3001/public/images/ancianos.png"/>
                    <Typography gutterBottom variant="h5" component="div">
                    {i("banner.titleElder")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("banner.elders")}
                    </Typography>
                </CardContent>
        </Card>    
        
    </Grid>
    <Grid item container xs={12} lg={6} alignSelf="center">
    <Card>
                <CardContent>
                <img src="http://localhost:3001/public/images/cigueña.png"/>
                    <Typography gutterBottom variant="h5" component="div">
                    {i("banner.titleChild")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("banner.elders")}
                    </Typography>
                </CardContent>
        </Card>    
</Grid>
</Grid>
    )
}