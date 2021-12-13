import * as React from 'react';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
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

export default function RegisterForm() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
    const [userType, setUserType] = useState(true);

    const [i, i18n] = useTranslation("global");

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.nombre.value)
    };

    const handleUserChange = (event) => {
        setUserType(!userType)
        console.log("cambia")

    }

    return (

        <Box marginLeft="20px" marginTop="20px">
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 2, width: '30ch' }} >
                    <TextField id="outlined-basic" name="nombre" label={i("menu-registro.name")} variant="outlined" />
                </FormControl>
                <FormControl sx={{ m: 2, width: '30ch' }} >
                    <TextField id="outlined-email" name='email' label="E-mail" variant="outlined" />
                </FormControl>
                <FormControl component="fieldset" sx={{ m: 2 }} >
                    <FormLabel component="legend">{i("menu-registro.user-question")}</FormLabel>
                    <RadioGroup
                        aria-label="userType"
                        defaultValue="user"
                        name="radio-buttons-user"
                        onChange={handleUserChange}
                    >
                        <FormControlLabel value="user"  control={<Radio />} label={i("menu-registro.user")} />
                        <FormControlLabel value="caretaker" control={<Radio />} label={i("menu-registro.caretaker")} />
                    </RadioGroup>
                </FormControl>





                { userType ? <></> : <FormControl component="fieldset" sx={{ m: 2 }} >
                    <FormLabel component="legend">{i("menu-registro.care")}</FormLabel>
                    <RadioGroup
                        aria-label="cuidados"
                        defaultValue="mascotas"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="mascota" control={<Radio />} label={i("menu-registro.pets")} />
                        <FormControlLabel value="ancianos" control={<Radio />} label={i("menu-registro.elderly")} />
                        <FormControlLabel value="niños" control={<Radio />} label={i("menu-registro.children")} />
                    </RadioGroup>
                </FormControl>}





                <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined" color="secondary">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={values.showPassword ? 'text' : 'password'}
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
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
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
                        type={values.showPassword ? 'text' : 'password'}
                        onChange={handleChange('password')}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Repeat Password"
                    />
                    <Button variant="contained" type='submit' sx={{ mt: "20px" }}>{i("menu-registro.send-button")}</Button>
                </FormControl>
            </form>
        </Box>
    );
}