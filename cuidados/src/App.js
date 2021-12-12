import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import './App.css';
import Hands from './pages/assets/hands.jpg'; // Import using relative path
import Landing from './pages/landing/index.jsx';
import Header from './components/header/index.jsx';
import RegisterForm from './components/registerForm/index.jsx';
import Login from './components/Login/index.jsx';
import Footer from './components/footer';


const styles = {
  gridContainer: {
    backgroundImage: `url(${Hands})`,
    backgroundRepeat: 'no-repeat'
  }
};

function App() {
  return (
    <BrowserRouter>
      <Grid xs={12} container justifyContent="center">
        <Grid item container style={styles.gridContainer} sx={{ backgroundSize: "100%", maxHeight: "300px" }} xs={12}>
          <Header />
        </Grid>
        <Switch>
          <Route path="/register">
            <Grid item container>
              <RegisterForm />
            </Grid>
          </Route>
          <Route path="/login">
            <Grid item container justifyContent="center">
              <Login />
            </Grid>
          </Route>
          <Route path="/">
            <Grid item>
              <Landing />
            </Grid>
          </Route>
        </Switch>
        <Footer />
      </Grid>
    </BrowserRouter>
  );
}

export default App;
