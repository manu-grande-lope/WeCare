import React from 'react';
import {Grid} from '@mui/material';
import ServicesAndCarousel from '../../components/carouselFinal/index.jsx';
import Banner from '../../components/banner/index.jsx';
import Map from '../../components/map/index.jsx'


function Landing() {

// useEffect para los datos del getCurrentPosition
// useState para verificar si están los datos, y si están cargar mapa
// variable de estado isLoaded = false





  return (
    <Grid container>
      <Grid item container  xs={12} pl={2}  mt={5} minHeight="50vh"   justifyContent="space-around" flexWrap="wrap" >
      <ServicesAndCarousel/>
        </Grid>
        
        <Grid item container xs={12} >
        <Banner/>
        </Grid>
        <Grid  item container xs={12} lg={12}>
          <Map/>
        {/* { isLoaded && <Map />} cargamos mapa si la variable isLoaded está cargada */}
        </Grid>
        
    </Grid>
  );
}

export default Landing;