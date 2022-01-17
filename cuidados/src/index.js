import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import {I18nextProvider} from "react-i18next";
import i18next from "i18next";
import global_es from "./components/translations/es/global.json";
import global_en from "./components/translations/en/global.json";
import ThemeProvider from '../src/components/theme/theme-provider.jsx';

i18next.init({
  interpolation: {escapeValue: false},
  lng:"es",
  resources:{
    es:{
      global: global_es,
    },
    en:{
      global: global_en,
    },
  },
});


ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
    <ThemeProvider>
    <App />
    </ThemeProvider>
  </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
