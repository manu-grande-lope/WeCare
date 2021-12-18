import React from 'react';
import { Grid } from '@mui/material';
import ServicesForm from '../../components/formServicios/index.jsx';
import CarouselCaretakers from '../../components/carouselEjemplo/index.jsx';
import Banner from '../../components/banner/index.jsx';
import TextClaim from '../../components/textClaim/index.jsx';

function Landing() {

  return (
    <Grid container>
      <Grid item container xs={12} mt="20px" spacing={2} justifyContent="space-around" flexDirection="row-reverse" flexWrap="wrap" >
      <CarouselCaretakers />
        <ServicesForm />
       
        </Grid>
        <Grid>
        <Banner/>

        </Grid>
    </Grid>
  );
}

export default Landing;