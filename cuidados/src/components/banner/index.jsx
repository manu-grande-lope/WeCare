import { Grid, Stack, Typography } from "@mui/material";
import Dogs from '../../pages/assets/dogs-medium.jpg'; // Import using relative path
import Corgi from '../../pages/assets/icons8-corgi-100.png';
import './style.css';

const styles = {
    gridContainer: {
        backgroundImage: `url(${Dogs})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",

    }
};





export default function Banner() {
    return (
        <Grid item container >
            <Stack className="stackBanner__style"  direction='row' justifyContent='space-between' color={'logo.main'}>
                <Typography variant="h1">Cuidado de mascotas</Typography>
                <Typography variant="body2">En WECARE encontrarás cuidadores titulados y preparados para cualquier cuidado, tanto veterinario como usual para cualquiera de tus mascotas.
                    <Typography variant="body1">
                        ¿Te vas de vacaciones? Nuestros cuidadores se pueden quedar tu mascota, o ir a tu casa a cuidar de ella.
                    </Typography>
                    <Typography variant="body1">
                        ¿Tienes un animal enfermo que necesita cuidados? Cuenta con nosotros, nos desplazamos.
                    </Typography>
                    <Typography variant="body1">
                        ¿Necesitas paseos o cuidado eventual? Háblalo con el cuidador, tenemos una solución.
                    </Typography>
                </Typography>
            </Stack>
        </Grid>
    )
}