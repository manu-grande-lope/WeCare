import React from 'react';
import { Grid } from '@mui/material';
import ServicesAndCarousel from '../../components/carouselFinal/index.jsx';
import Banner from '../../components/banner/index.jsx';







function Landing() {

  return (
    <Grid container>
      <Grid item container  xs={12} pl={2}  mt={5} minHeight="50vh"   justifyContent="space-around" flexWrap="wrap" >
      <ServicesAndCarousel/>
        </Grid>
        <Grid item container xs={12} min>
        <Banner/>
        </Grid>
    </Grid>
  );
}

export default Landing;