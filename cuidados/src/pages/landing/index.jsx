import React from 'react';
import { Grid } from '@mui/material';
import ServicesForm from '../../components/formServicios/index.jsx';
import CarouselCaretakers from '../../components/carouselEjemplo/index.jsx';
import Banner from '../../components/banner/index.jsx';

function Landing() {

  return (
    <Grid xs={12} container justifyContent="center" >
      <Grid item container sx={12} mt="20px" justifyContent="space-around" flexDirection="row" flexWrap="wrap">
        <ServicesForm />
        <CarouselCaretakers />
          <Banner/>
        </Grid>
    </Grid>
  );
}

export default Landing;