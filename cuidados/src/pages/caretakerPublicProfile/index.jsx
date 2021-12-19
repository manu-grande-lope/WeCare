import { Grid } from "@mui/material";
import AvatarIMG from "../assets/burritouser.jpg";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function CaretakerPublicProfile() {

    function ImageAvatars() {
        return (
            <Avatar
                alt="Remy Sharp"
                src={AvatarIMG}
                sx={{ width: 200, height: 200, alignSelf: 'center' }}

            />
        );
    }

    const [i] = useTranslation("global");

    const [userInfo, setUserInfo] = useState(0);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const options = {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
        }
        fetch('http://localhost:3001/user/', options)
            .then(r => r.json())
            .then(d => setUserInfo(d))
    }, []);




    return (
        <Grid>
            <Grid item container xs={12} lg={12} justifyContent="center" mt={7} mb={7}>
                <ImageAvatars />
            </Grid>
            <Grid item container justifyContent="center">
                    <Typography variant="h6">Hola, soy "User Name con props"</Typography>
                    <Typography variant="h6">Y cuido, "Que cuida"</Typography>
            </Grid>
        </Grid>
    )
}