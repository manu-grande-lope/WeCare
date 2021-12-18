import { Grid, Paper, Stack, Typography } from "@mui/material";
import { width } from "@mui/system";
import Splatter from '../../pages/assets/backservices.jpg';



const styles = {
    gridContainer: {
        backgroundImage: `url(${Splatter})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",

    }
};


export default function Banner() {
    return (

        <Grid display='flex' flexDirection="row" xs={12} p={6} flexWrap="wrap" style={styles.gridContainer} border={1} borderColor={'primary.main'}>
            <Grid item container justifyContent="center" p={6} >
                <Paper sx={{ padding: "20px" }} elevation={1}  >
                    <Typography variant="h5">Cuidado de mascotas</Typography>
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
                </Paper>
            </Grid>
            <Grid item container justifyContent="center" p={6} >
                <Paper sx={{ padding: "20px" }} elevation={6} >
                    <Typography variant="h5">Cuidado de mascotas</Typography>
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
                </Paper>
            </Grid>
            <Grid item container justifyContent="center" p={6} >
                <Paper sx={{ padding: "20px" }} elevation={6} >
                    <Typography variant="h5">Cuidado de mascotas</Typography>
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
                </Paper>
            </Grid>
        </Grid >
    )
}