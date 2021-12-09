import React from 'react';
import { Grid } from '@mui/material';
import ServicesForm from '../../components/formServicios/index.jsx';
import RegisterForm from '../../components/registerForm/index.jsx';
import Login from '../../components/Login/index.jsx';


function Landing() {
    return (
        <Grid xs={12} container justifyContent="center">
            <Grid item container sx={12} mt="20px" justifyContent="space-around" mb="50px" flexDirection="row" flexWrap="wrap">
                <ServicesForm />
                <RegisterForm />
                <Login/>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
    );
}

export default Landing;