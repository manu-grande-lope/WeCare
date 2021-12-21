import { Grid, Stack, Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Avatar } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React from "react";
import { useState, useEffect, setTimeOut } from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useParams } from "react-router-dom";
import Modal from '@mui/material/Modal';




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function CaretakerPublicProfile() {
    const history = useHistory()
    const [sentCorrectly, setSentCorrectly] = useState(false)
    const [openModal, setOpenModal] = useState(false)
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
                console.log(d)
            })
    }, [id]);
    function ImageAvatars() {
        return (
            <Avatar
                alt="Remy Sharp"
                src={`http://localhost:3001/public/images/${userInfo.pic}`}
                sx={{ width: 200, height: 200, alignSelf: 'center' }}

            />
        );
    }

    function sendMessage(event) {
        event.preventDefault()
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
                        setSentCorrectly(false)
                    }
                })
                setOpenModal(true)
        } else {
            console.log("set time out")
            setOpenModal(true)
            setTimeout(() => {
                history.push("/login")
            }, 2000)
        }
    }
    const handleClose = () => setOpenModal(false)
    return (
        <Grid>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {sentCorrectly ? <p>{i("modal.title")}</p> : <p>{i("modal.titleError")}</p>}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {sentCorrectly ? <p>{i("modal.text")}</p> : <p>{i("modal.textError")}</p>}
                    </Typography>
                </Box>

                {/* {sentCorrectly ? <p>OK</p> : <p>NOT OK</p>} */}

            </Modal>

            <Grid item container xs={12} lg={12} justifyContent="center" mt={7} mb={7}>
                <ImageAvatars />
            </Grid>
            <Grid item container direction="column" xs={12} justifyContent="center">
                <Typography variant="h7">{userInfo.name} { }</Typography>
                <Typography variant="h7">Cuidadora de {userInfo.cuida}</Typography>
                <Typography variant="h7">Descripción</Typography>
            </Grid>
            <Grid item container>
                <Stack component="form" onSubmit={sendMessage}>
                    <TextField id="outlined-basic" multiline={true} minRows="5" name="description" label="Contacta conmigo" variant="outlined" />
                    <Button
                        sx={{ marginTop: "20px" }}
                        type='submit'
                        variant='contained'
                        size='medium'
                    >Send</Button>
                </Stack>
            </Grid>
        </Grid >
    )
}