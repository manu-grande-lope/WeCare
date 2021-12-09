import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button} from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import BasicDateRangePicker from './date';
import PetsIcon from '@mui/icons-material/Pets';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { useTranslation } from "react-i18next";


const services = [
    {
        value: 'pets',
        label: 'menu-registro.pets',
        icon: <PetsIcon/>
    },
    {
        value: 'menu-registro.elderly',
        label: 'menu-registro.elderly',
        icon: <ElderlyIcon/>
    },
    {
        value: 'menu-registro.children',
        label: 'menu-registro.children',
        icon: <ChildFriendlyIcon/>
    }
];

export default function ServicesForm() {
    const [i, i18n] = useTranslation("global");
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
                    label={i ("select-service.choose")}
                    value={service}
                    onChange={handleChange}
                    helperText=''
                >
                    {services.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.icon}{i(option.label)}
                        </MenuItem>
                    ))}
                </TextField>
            </div>
            <BasicDateRangePicker/>
            <Button variant="contained" color="primary" sx={{width:"250px", marginLeft:"50px", marginTop:"20px", marginBottom:"20px"}}>BUSCA</Button>
            
        </Paper>
    );
}