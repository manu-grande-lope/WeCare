import * as React from 'react';
import {Button, CssBaseline, Grid} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';
import {myTheme} from './components/theme/theme.jsx';
import './App.css';
import Header from './components/header/index.jsx';
import RegisterForm from './components/formRegistro/index.jsx';
import Hands from './pages/assets/hands.jpg'; // Import using relative path
import TextClaim from './components/textClaim/index.jsx';

const styles = {
  gridContainer: {
      backgroundImage: `url(${Hands})`,
      
      
  }
};


function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <CssBaseline/>
        <Grid xs={12} container justifyContent="center">
          <Grid item container style={styles.gridContainer}  sx={{ backgroundSize:"100%", maxHeight:"300px"}} xs={12} >
          <Header/>
          <TextClaim></TextClaim>
          </Grid>
          <Grid item container sx={12} mt="20px" justifyContent="space-around" mb="50px"  flexDirection="row" flexWrap="wrap">
          <RegisterForm/>
          </Grid>
        </Grid>
    </ThemeProvider>
  );
}

export default App;
