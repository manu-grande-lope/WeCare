import * as React from 'react';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import { useTranslation } from "react-i18next";
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';

export default function Login() {
    let history = useHistory();

    const [i, i18n] = useTranslation("global");

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });
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
        if (event.target.checkValidity()) {
            const options = {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    name: event.target.name.value,
                    password: event.target.pass.value
                })
            }
            //llamo al login
            fetch('http://localhost:3001/auth/login', options)
                .then(r => r.json())
                .then(d => {
                    sessionStorage.setItem('token', d.access_token)
                    history.push("/account")
                })
        } else {
            console.log('error fatal, todo mal, shiiiiiiit')
        }
    };
    return (
        <Box marginLeft="25px" marginTop="20px">
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined" color="secondary">
                    <TextField id="outlined-basic" name='name' label={i("menu-login.name")} variant="outlined" />
                </FormControl>
                <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined" color="secondary">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        name="pass"
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
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
                <Button type="submit" variant="contained" sx={{ m: 6, width: '30ch' }}>{i("menu-registro.send-button")}</Button>
            </form>
        </Box>
    )
}