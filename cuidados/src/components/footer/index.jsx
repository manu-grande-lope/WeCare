import { Button, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Divider } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
// import ThemePNG from '../../pages/assets/night-mode-dark.png'
import '../footer/style.css';


export default function Footer(props) {
    const [i, i18n] = useTranslation("global");

    // const handleTheme = ()=> {
    //     props.changeMode()
        
    // }



    return (
        <Grid container sx={{ backgroundColor: 'primary.main', minHeight: "100px", width: "100%" }} direction="row"
            justifyContent="space-between" p={3}>
            <Stack justifyContent="center"
                alignItems="center" 
                gap={2} 
                divider={<Divider orientation="horizontal" flexItem />}>
                <Stack direction="row"
                divider={<Divider orientation="vertical" flexItem />}>
                    <Button onClick={() => i18n.changeLanguage("es")} 
                    sx={{color:'logo.main'}}
                    >
                        ESP</Button>
                    <Button onClick={() => i18n.changeLanguage("en")} 
                    sx={{color:'logo.main'}}>
                        ENG</Button>
                </Stack>
                {/* <button id="theme" className="buttonTheme__style" onClick={handleTheme} ><img alt="theming button" src={ThemePNG} className="buttonTheme__style--img" /></button> */}
            </Stack>
            <Typography color={'logo.main'} variant="body2"> 2021 © Manuel Lope</Typography>
            <Stack gap={2}>
                <Link to="/privatepolicy">Politica de privacidad</Link>
                <Link to="/terms">Terms and conditions</Link>
            </Stack>
            
        </Grid>
    )
}