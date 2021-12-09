import * as React from 'react';
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


    return (
        <Box marginLeft="20px" marginTop="20px">
            <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined" color="secondary">
            <TextField id="outlined-basic" label={i ("menu-registro.name")} variant="outlined" />
            </FormControl>
            <FormControl sx={{ m: 2, width: '30ch' }} variant="outlined" color="secondary">
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
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
                <Button variant="contained" sx={{ mt: "20px" }}>{i("menu-registro.send-button")}</Button>
            </FormControl>
        </Box>
    )
}