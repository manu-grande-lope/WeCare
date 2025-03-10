import { React, useState } from 'react';
import { Stack, Modal, TextField, Box, IconButton } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Button from '@mui/material/Button';
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import {URL} from '../constantes/globales.js';


export default function RegisterForm() {

    const history = useHistory()

    const [passValue, setPassValue] = useState({
        password: '',
        showPassword: false,
    });
    const [userType, setUserType] = useState(true);

    const [i] = useTranslation("global");

    const handleChange = (prop) => (event) => {
        setPassValue({ ...passValue, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setPassValue({
            ...passValue,
            showPassword: !passValue.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {


        event.preventDefault();
        let options = {};
        if (event.target.password.value === event.target.repeatpassword.value) {
            if (event.target.userType.value === "user") {
                options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
                    },
                    body: JSON.stringify({
                        // Genero el body como string
                        name: event.target.name.value,
                        email: event.target.email.value, // obtengo el value de un input por su name
                        pass: event.target.password.value,
                        usertype: event.target.userType.value
                    }),
                };

                console.log(event.target.userType.value)
            } else {

                options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json", // aviso a mi servidor que le envio los datos en formato JSON
                    },
                    body: JSON.stringify({
                        // Genero el body como string
                        name: event.target.name.value,
                        email: event.target.email.value, // obtengo el value de un input por su name
                        pass: event.target.password.value,
                        cuida: event.target.caretakerOptions.value,
                        usertype: event.target.userType.value
                    }),
                };

                console.log(event.target.userType.value)
            }
            // llamo al registro
            fetch(`${URL}/auth/register`, options)
                .then((r) => r.json())
                .then((d) => {
                    if (d) {
                        history.push("/account")
                    }
                });
        } else {
            alert('El usuario ya existe')
        }

    };

    const handleUserChange = (event) => {
        setUserType(!userType)

    }

    return (

        <Box marginLeft="20px" marginTop="20px">
            <Stack component="form" onSubmit={handleSubmit} >
                <FormControl sx={{ m: 2, width: '30ch' }} >
                    <TextField id="outlined-basic" name='name' label={i("menu-registro.name")} variant="outlined" />
                </FormControl>
                <FormControl sx={{ m: 2, width: '30ch' }} >
                    <TextField id="outlined-email" name='email' label="E-mail" variant="outlined" />
                </FormControl>
                <FormControl component="fieldset" sx={{ m: 2 }} >
                    <FormLabel component="legend">{i("menu-registro.user-question")}</FormLabel>
                    <RadioGroup
                        aria-label="userType"
                        defaultValue="user"
                        name="userType"
                        onChange={handleUserChange}
                    >
                        <FormControlLabel value="user" name="userType" control={<Radio />} label={i("menu-registro.user")} />
                        <FormControlLabel value="caretaker" name="userType" control={<Radio />} label={i("menu-registro.caretaker")} />
                    </RadioGroup>
                </FormControl>
                {userType ? <></> : <FormControl component="fieldset" sx={{ m: 2 }} >
                    <FormLabel component="legend">{i("menu-registro.care")}</FormLabel>
                    <RadioGroup
                        aria-label="cuidados"
                        defaultValue="mascotas"
                        name="caretakerOptions"
                    >
                        <FormControlLabel value="mascota" name="caretakerOptions" control={<Radio />} label={i("menu-registro.pets")} />
                        <FormControlLabel value="ancianos" name="caretakerOptions" control={<Radio />} label={i("menu-registro.elderly")} />
                        <FormControlLabel value="niños" name="caretakerOptions" control={<Radio />} label={i("menu-registro.children")} />
                    </RadioGroup>
                </FormControl>}
                <FormControl>

                </FormControl>
                <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined" color="secondary">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={passValue.showPassword ? 'text' : 'password'}
                        name='password'
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {passValue.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined" color="secondary">
                    <InputLabel htmlFor="outlined-adornment-password">Repeat Password</InputLabel>
                    <OutlinedInput
                        id="repeat-password"
                        name='repeatpassword'
                        type={passValue.showPassword ? 'text' : 'password'}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {passValue.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Repeat Password"
                    />
                    <Button variant="contained" type='submit' sx={{ mt: "20px" }}>{i("menu-registro.send-button")}</Button>
                </FormControl>
            </Stack>
        </Box>
    );
}