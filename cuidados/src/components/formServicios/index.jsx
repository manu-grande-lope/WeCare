import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import BasicDateRangePicker from './date';
import PetsIcon from '@mui/icons-material/Pets';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';


const services = [
    {
        value: 'PETS',
        label: <PetsIcon/>,
    },
    {
        value: 'ELDERLY',
        label: <ElderlyIcon/>,
    },
    {
        value: 'CHILDREN',
        label: <ChildFriendlyIcon/>,
    }
];

export default function ServicesForm() {
    const [service, setService] = React.useState('Elige un servicio');

    const handleChange = (event) => {
        setService(event.target.value);
    };


    return (
        <Paper elevation= "4"
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 4, pr:0, width: '30ch'},
            }}
            noValidate
            autoComplete="off"
            
        >
            
            <div>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Elige un servicio"
                    value={service}
                    onChange={handleChange}
                    helperText=''
                >
                    {services.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <BasicDateRangePicker/>
            <Button variant="contained" color="primary" sx={{width:"250px", marginLeft:"50px", marginTop:"20px", marginBottom:"20px"}}>BUSCA</Button>
            
        </Paper>
    );
}