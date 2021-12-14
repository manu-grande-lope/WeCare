import React from 'react';
import { Grid } from '@mui/material';
import ServicesForm from '../../components/formServicios/index.jsx';
import CarouselCaretakers from '../../components/carouselEjemplo/index.jsx';
import splatter from "/Users/ManuGrande/Desktop/BOOTCAMP/PROYECTO FINAL/proyecto-final-front/cuidados/src/pages/assets/backservices.jpg"


function Landing() {

    const styles = {
        gridContainer: {
          backgroundImage: `url(${splatter})`,
          backgroundRepeat: 'repeat'
        }
      };
    return (
        <Grid xs={12} container justifyContent="center" style={styles.gridContainer}>
            <Grid item container sx={12} mt="20px" justifyContent="space-around" flexDirection="row" flexWrap="wrap">
                <ServicesForm />
                <CarouselCaretakers/>
                </Grid>
            </Grid>
    );
}

export default Landing;