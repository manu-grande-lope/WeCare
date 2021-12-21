import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import perrito from "../../pages/assets/dogs-medium.jpg";

export default function CardBanner() {
    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={perrito}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        CUIDAMOS A TUS MASCOTAS
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    En WECARE encontrarás cuidadores titulados y preparados para cualquier cuidado, tanto veterinario como usual para cualquiera de tus mascotas.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
