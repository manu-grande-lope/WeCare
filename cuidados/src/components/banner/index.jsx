import { Grid, Stack, Typography, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import Dogs from '../../pages/assets/dogs-medium.jpg'; // Import using relative path
import Elder from '../../pages/assets/elder2.jpg';
import Children from '../../pages/assets/children.jpg';
import { Fragment } from "react";


export default function Banner() {
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
                        CUIDAMOS A TUS MASCOTAS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    En WECARE encontrarás cuidadores titulados y preparados para cualquier cuidado, tanto veterinario como usual para cualquiera de tus mascotas.
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
                        A TUS MAYORES
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    En WECARE encontrarás cuidadores titulados y preparados para cualquier cuidado, tanto veterinario como usual para cualquiera de tus mascotas.
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
                        O A TUS HIJOS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    En WECARE encontrarás cuidadores titulados y preparados para cualquier cuidado, tanto veterinario como usual para cualquiera de tus mascotas.
                    </Typography>
                </CardContent>
        </Card>    
</Grid>
</Fragment>
    )
}