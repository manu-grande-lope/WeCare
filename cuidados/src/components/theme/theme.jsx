import { createTheme } from '@mui/material/styles';
import ArvoRegular from '../../pages/assets/fonts/Arvo-Regular.ttf';

export const myTheme = createTheme({
    palette: {
        primary: {
            main: '#ef9a9a'
        },
        secondary:{
            main: '#f48fb1'
        },
        logo:{
            main:'#ffffff'
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily:[ 
            '"ArvoRegular"',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
    spacing: (factor) => {
        
        return `${0.25 * factor}rem`
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                @font-face {
                font-family: 'ArvoRegular';
                font-style: normal;
                src: url('${ArvoRegular}') format('truetype');
                }
                    `,
        },
    },
});

export const myDarkTheme = createTheme({
    patette: {
        mode: 'dark'
    }
});



















