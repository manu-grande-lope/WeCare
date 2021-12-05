import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import CuidadorPerro from '../../pages/assets/cuidadorperro1.jpg';
import '../carousel/style.css';

export default function Carousel() {

    return (
        <Box className="carousel_style" variant="scrollable">
            <Card elevation="3" sx={{m:2}}>
                <CardMedia
                    component="img"
                    height="400"
                    image={CuidadorPerro}
                    alt="Cuidador perrro"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nombre del cuidador
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador.
                    </Typography>
                </CardContent>
                
            </Card>
            <Card elevation="3" sx={{m:2}}>
                <CardMedia
                    component="img"
                    height="400"
                    image={CuidadorPerro}
                    alt="Cuidador perrro"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nombre del cuidador
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador.
                    </Typography>
                </CardContent>
                
            </Card>
            <Card elevation="3" sx={{m:2}}>
                <CardMedia
                    component="img"
                    height="400"
                    image={CuidadorPerro}
                    alt="Cuidador perrro"/>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Nombre del cuidador
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador, Descripción del cuidador.
                    </Typography>
                </CardContent>
                
            </Card>
        </Box>
    )
}