import { Grid, Stack } from "@mui/material";
import AvatarIMG from "../assets/burritouser.jpg";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import Modal from '@mui/material/Modal';

export default function CaretakerPublicProfile() {
    const history = useHistory()
    const [sentCorrectly, setSentCorrectly] = useState(false)
    const [i] = useTranslation("global");
    const [userInfo, setUserInfo] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            },
        }
        fetch(`http://localhost:3001/user/publicProfile?id=${id}`, options)
            .then(r => r.json())
            .then(d => {
                setUserInfo(d)
            })
    }, [id]);
    function ImageAvatars() {
        return (
            <Avatar
                alt="Remy Sharp"
                src={AvatarIMG}
                sx={{ width: 200, height: 200, alignSelf: 'center' }}
            />
        );
    }

    function sendMessage(event) {
        const token = sessionStorage.getItem('token');
        if (token) {
            const options = {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    userMessage: event.target.description.value,
                    retrieveId: id
                })
            }
            fetch('http://localhost:3001/user/sendMessage', options)
                .then(r => {
                    if (r.status === 200) {
                        setSentCorrectly(true)
                    } else {
                        setSentCorrectly("error")
                    }
                })
        } else {
            history.push("/login")
        }
    }
    const handleClose = () => setSentCorrectly(false);

    return (
        <Grid>

            {/* <Modal
                open={!!sentCorrectly}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                {() => {
                    if (sentCorrectly) {
                        return "Mensaje enviado correctamente"
                    } else if (sentCorrectly === "error") {
                        return "Ha ocurrido un error"
                    }
                }}

            </Modal> */}

            <Grid item container xs={12} lg={12} justifyContent="center" mt={7} mb={7}>
                <ImageAvatars />
            </Grid>
            <Grid item container justifyContent="center">
                <Typography variant="h6">Hola, soy "User Name con props"</Typography>
                <Typography variant="h6">Y cuido, "Que cuida"</Typography>
            </Grid>
            <Grid iten container>
                <Stack component="form" onSubmit={sendMessage}>
                    <TextField id="outlined-basic" multiline={true} minRows="5" name="description" label="Contacta conmigo" variant="outlined" />
                    <Button
                        type='submit'
                        variant='contained'
                        size='medium'
                    >Send</Button>
                </Stack>
            </Grid>
        </Grid >
    )
}