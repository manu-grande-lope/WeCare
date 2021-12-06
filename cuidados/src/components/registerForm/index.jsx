import * as React from 'react';
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

export default function RegisterForm() {
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
            <FormControl sx={{ m: 2, width: '30ch' }} >
            <TextField id="outlined-basic" label="Nombre" variant="outlined"  />
            </FormControl>
            <FormControl sx={{ m: 2, width: '30ch' }} >
            <TextField id="outlined-basic" label="E-mail" variant="outlined"  />
            </FormControl>
            <FormControl component="fieldset" sx={{ m: 2}} >
                <FormLabel component="legend">¿Qué cuidados ofreces?</FormLabel>
                <RadioGroup
                    aria-label="cuidados"
                    defaultValue="mascotas"
                    name="radio-buttons-group"
                >
                    <FormControlLabel value="mascota" control={<Radio />} label="Mascotas" />
                    <FormControlLabel value="ancianos" control={<Radio />} label="Ancianos" />
                    <FormControlLabel value="niños" control={<Radio />} label="Niños" />
                </RadioGroup>
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
                <Button variant="contained" sx={{mt:"20px"}}>ENVIAR</Button>
            </FormControl>
        </Box>
    );
}