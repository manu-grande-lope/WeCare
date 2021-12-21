import React from 'react';
import { Grid } from '@mui/material';
import ServicesAndCarousel from '../../components/carouselEjemplo/index.jsx';
import Banner from '../../components/banner/index.jsx';







function Landing() {

  return (
    <Grid container>
      <Grid item container  xs={12} mt="20px" minHeight="50vh"  spacing={0} justifyContent="space-around" flexWrap="wrap" >
      <ServicesAndCarousel/>
        </Grid>
        <Grid item container xs={12} minHeight={700}>
        <Banner/>
        </Grid>
    </Grid>
  );
}

export default Landing;