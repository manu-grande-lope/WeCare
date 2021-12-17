import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
import { useTranslation } from "react-i18next";


export default function BasicDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);
    const [i] = useTranslation("global");

    return (
        <LocalizationProvider dateAdapter={DateFnsAdapter}>
            <DateRangePicker
                startText={i ("select-service.date-start")}
                endText={i ("select-service.date-finish")}
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <Box flexDirection="column" >
                            <TextField {...startProps} />
                            <Box sx={{ mx: 15 }} > {i ("select-service.to")} </Box>
                            <TextField {...endProps} />
                        </Box>
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>

    );
}