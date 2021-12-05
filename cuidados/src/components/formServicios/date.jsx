import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import DateFnsAdapter from '@mui/lab/AdapterDateFns';
export default function BasicDateRangePicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={DateFnsAdapter}>
            <DateRangePicker
                startText="Select when to start"
                endText="And when to end the service"
                value={value}
                onChange={(newValue) => {
                    setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                    <React.Fragment>
                        <Box flexDirection="column" >
                            <TextField {...startProps} />
                            <Box sx={{ mx: 15 }} > to </Box>
                            <TextField {...endProps} />
                        </Box>
                    </React.Fragment>
                )}
            />
        </LocalizationProvider>

    );
}