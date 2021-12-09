import { Box } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";


export default function Footer(){
    const [i, i18n] = useTranslation("global");

    return(
        <Box sx={{backgroundColor: 'primary.main', minHeight:"100px", width:"100%"}}>
            Footer
            <div>
            <h1>{i ("footer.Hello-world")}</h1>
            <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
            <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
        </div>
        </Box>
    )
}