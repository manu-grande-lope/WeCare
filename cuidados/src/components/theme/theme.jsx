import { createTheme } from '@mui/material/styles';
import ArvoRegular from '../../pages/assets/fonts/Arvo-Regular.ttf';
import ArvoBold from '../../pages/assets/fonts/Arvo-Bold.ttf';

export const myTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ef9a9a'
        },
        secondary: {
            main: '#f48fb1'
        },
        logo: {
            main: '#ffffff'
        },
        alert: {
            main: '#fbc02d',
            delete: '#d84315'
        },
        textClaim: {
            main: '#ffca28',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
    typography: {
        fontFamily: [
            '"ArvoRegular"',
            '"ArvoBold"',
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
        ].join(','),
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
                @font-face {
                    font-family: 'ArvoBold';
                    font-style: normal;
                    src: url('${ArvoBold}') format('truetype');
                    }
                    `,
        },
    },
});


myTheme.typography.h1 = {
    [myTheme.breakpoints.down('md')]: {
        fontSize: '4.5rem',
    },
};


myTheme.typography.h3 = {
    [myTheme.breakpoints.up('md')]: {
        fontSize: '2.4rem',
    },
};


myTheme.typography.h4 = {
    [myTheme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
    },
};


export const myDarkTheme = createTheme({
    palette: {
        mode: 'dark'

    }
});



















