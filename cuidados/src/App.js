import React from 'react';
import { Grid } from '@mui/material';
import './App.css';
import Hands from './pages/assets/hands.jpg'; // Import using relative path
import Landing from './pages/landing/index.jsx';
import Header from './components/header/index.jsx'
import TextClaim from './components/textClaim/index.jsx';
import Footer from './components/footer';


const styles = {
  gridContainer: {
    backgroundImage: `url(${Hands})`,


  }
};

function App() {
  return (
    <Grid xs={12} container justifyContent="center">
      <Grid item container style={styles.gridContainer} sx={{ backgroundSize: "100%", maxHeight: "300px" }} xs={12} >
        <Header />
        <TextClaim></TextClaim>
      </Grid>
      <Grid item>
      <Landing />
      </Grid>
      <Footer/>
    </Grid>
  );
}

export default App;
