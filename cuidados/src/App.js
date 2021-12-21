import {React, useState} from 'react';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import { Grid, Stack} from '@mui/material';
import './App.css';
import Landing from './pages/landing/index.jsx';
import Header from './components/header/index.jsx';
import RegisterForm from './components/registerForm/index.jsx';
import Login from './components/Login/index.jsx';
import Footer from './components/footer';
import Services from './pages/services';
import Pricing from './pages/pricing';
import About from './pages/about';
import PrivatePolicy from './pages/PrivatePolicy';
import Terms from './pages/terms';
import CaretakerProfile from './pages/caretakerProfile';
import ThemeProvider from './components/theme/theme-provider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFound from './pages/notfoud';
import CaretakerPublicProfile from './pages/caretakerPublicProfile/index.jsx';

function App() {

  return (
    <ThemeProvider>
    <BrowserRouter>
    <Stack sx={{minHeight:"100vh"}}>
    <Grid container  sx={{ backgroundSize: "100%", maxHeight: "300px"}}>
          <Header />
          </Grid>
          <main className='main__style'>
            {/* RUTAS PUBLICAS  */}
        <Switch>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/pricing">
            <Pricing/>
          </Route>
          <Route path="/register">
              <RegisterForm />
          </Route>
          <Route path="/login">
            <Grid item container justifyContent="center">
              <Login />
            </Grid>
          </Route>
          <Route path="/privatepolicy">
              <PrivatePolicy/>
          </Route>
          <Route path="/terms">
              <Terms/>
          </Route>
          <Route path="/aboutUs">
              <About/>
          </Route>
          <Route path="/notfound">
              <NotFound/>
          </Route>
          <Route path="/caretaker-public/:id">
              <CaretakerPublicProfile/>
          </Route>
          {/* RUTAS PUBLICAS  */}
          {/* RUTAS PRIVADAS  */}
          <PrivateRoute path="/account">
              <CaretakerProfile />
          </PrivateRoute>
          <Route path="/"> {/* debera tener una parte privada de usuario loggeado*/}
              <Landing/>
          </Route>
          
        </Switch>
        </main>
        <Footer/>
      </Stack>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
