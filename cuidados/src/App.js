import * as React from 'react';
import Button from '@mui/material/Button';
import {ThemeProvider} from '@mui/material/styles';
import theme from '../src/components/theme/index.jsx';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained" color="primary">Contained</Button>
      <Button variant="contained" color="secondary" >Contained</Button>
    </ThemeProvider>
  );
}

export default App;
