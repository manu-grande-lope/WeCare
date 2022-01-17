import { 
    Grid, 
    Typography, 
    Card, 
    CardContent, 
    CardMedia 
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Dogs from '../../pages/assets/dogs-medium.jpg'; // Import using relative path
import Elder from '../../pages/assets/elder2.jpg';
import Children from '../../pages/assets/children.jpg';
import { Fragment } from "react";


export default function Banner() {
    const [i] = useTranslation("global");
    return (
        <Fragment>
        <Grid item container xs={12} lg={4}>
        <Card>
                <CardMedia
                    component="img"
                    image={Dogs}
                    alt="Perro cuidados"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {i("banner.titlePets")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("banner.pets")}
                    </Typography>
                </CardContent>
        </Card>    
        </Grid>
        <Grid item container  xs={12} lg={4}>
        <Card>
                <CardMedia
                    component="img"
                    image={Elder}
                    alt="Elder"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {i("banner.titleElder")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("banner.elders")}
                    </Typography>
                </CardContent>
        </Card>    
        
    </Grid>
    <Grid item container xs={12} lg={4}>
    <Card>
                <CardMedia
                    component="img"
                    image={Children}
                    alt="Chlidren"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {i("banner.titleChild")}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {i("banner.elders")}
                    </Typography>
                </CardContent>
        </Card>    
</Grid>
</Fragment>
    )
}