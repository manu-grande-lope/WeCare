import React from 'react';
import { BrowserRouter, Switch, Route,} from 'react-router-dom';
import { Grid, Stack  } from '@mui/material';
import './App.css';
import Hands from './pages/assets/hands.jpg'; // Import using relative path
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


const styles = {
  gridContainer: {
    backgroundImage: `url(${Hands})`,
    backgroundRepeat: 'no-repeat'
  }
};

function App() {
  return (
    <BrowserRouter>
    <Stack sx={{minHeight:"100vh"}}>
        <Grid xs={12} container justifyContent="center" style={styles.gridContainer} sx={{ backgroundSize: "100%", maxHeight: "300px" }} xs={12}>
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
              <Login/>
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
          {/* RUTAS PUBLICAS  */}
          {/* RUTAS PRIVADAS  */}
          {/* METER PERFIL DE USUARIO  */}
          <Route path="/"> {/* debera tener una parte privada de usuario loggeado*/}
              <Landing/>
          </Route>
          
        </Switch>
        </main>
        <Footer/>
      </Stack>
    </BrowserRouter>
  );
}

export default App;
