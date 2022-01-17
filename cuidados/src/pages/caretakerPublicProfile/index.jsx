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
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';




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

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};


function HoverRating(props) {
    const [value, setValue] = useState(0);
    const [hover, setHover] = useState(-1);
    const [canReview, setCanReview] = useState(true);

    const changeRating = (event, newValue) => {
        if (canReview) {
            setCanReview(false)
            const token = sessionStorage.getItem('token');
            const options = {
                method: 'POST',
                headers: {
                    'authorization': `Bearer ${token}`,
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    review: newValue,
                    userReviewedId: props.userInfo
                }),
            }
            fetch('http://localhost:3001/user/reviews', options)
                .then(r => r.json())
                .then(d => setValue(d.average))
        }


    }

    return (
        <Box
            sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                onChange={changeRating}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
        </Box>
    );
}






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
                console.log(d, 'Aquí no entra')
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
                    setOpenModal(true)
                })
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
        <Grid item container justifyContent="center">
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

            <Grid item container justifyContent="center" mt={7} mb={7}>
                <ImageAvatars />
            </Grid>
            <Stack direction="column">
                <Stack direction="column" xs={12} >
                    <Typography variant="h5">{userInfo.name} { }</Typography>
                    <Typography variant="h7">{i("caretakerPublic.caregiver")} {userInfo.cuida}</Typography>
                    <Box maxWidth="70vw" mt={3} mb={3}>
                    <Typography variant="h7">{i("caretakerPublic.description")}</Typography>
                    <Typography variant="h7" sx={{ marginTop: '20px', marginBottom: '20px' }} >{userInfo.description}</Typography>
                    </Box>
                </Stack>

                <HoverRating userInfo={userInfo._id} />
                <Typography variant="h7">{i("caretakerPublic.Thanks")}</Typography>
                <Stack component="form" onSubmit={sendMessage}>
                    <TextField id="outlined-basic" multiline={true} minRows="5" name="description" label="Contacta conmigo" variant="outlined" sx={{ marginTop: "20px" }} />
                    <Button
                        sx={{ marginTop: "20px", marginBottom:"20px" }}
                        type='submit'
                        variant='contained'
                        size='medium'
                    >Send</Button>
                </Stack>
            </Stack>
        </Grid >
    )
}







