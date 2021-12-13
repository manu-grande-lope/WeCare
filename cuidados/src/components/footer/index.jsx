import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import { useTranslation } from "react-i18next";
import ThemeSwitch from "./switch";


export default function Footer(){
    const [,i18n] = useTranslation("global");

    return(
        <Box sx={{backgroundColor: 'primary.main', minHeight:"100px", width:"100%"}}>
            <div>
            <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
            <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
        </div>
        <Link to="/privatepolicy">Politica de privacidad</Link>
        <Link to="/terms">Terms and conditions</Link>
        <ThemeSwitch/>
        </Box>
    )
}