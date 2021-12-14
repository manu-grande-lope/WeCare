import { Grid, Paper, Stack, Typography } from "@mui/material";


export default function Banner() {
    return(

        <Grid height='500px' justifyContent="center" spacing={2} display='flex'>
                <Paper elevation={4} sx={{ width: '70%' }}>
                    <Stack direction="column" justifyContent='flex-start' spacing={2} flexWrap='wrap' elevation="4">
                        <Typography variant="h5">Nuestros servicios</Typography>
                        <Typography variant="body2">En WeCARE unimos gente que necesita un tipo de cuidado específicos con profesionales que los ofrecen, en unas tarifas pactadas por usuario y cuidador y en las que nosotros sólo fijamos un máximo y un mínimo.
                            Somos un portal de contacto, que busca dar un servicio de calidad, eficaz y que genere relaciones profesionales y humanas positivas.</Typography>
                    </Stack>
                    <Stack direction="column" justifyContent='flex-start' spacing={2} flexWrap='wrap'>
                        <Typography variant="h5">Nuestros servicios</Typography>
                        <Typography variant="body2">En WeCARE unimos gente que necesita un tipo de cuidado específicos con profesionales que los ofrecen, en unas tarifas pactadas por usuario y cuidador y en las que nosotros sólo fijamos un máximo y un mínimo.
                            Somos un portal de contacto, que busca dar un servicio de calidad, eficaz y que genere relaciones profesionales y humanas positivas.</Typography>
                    </Stack>
                </Paper>
        </Grid >
    )
}