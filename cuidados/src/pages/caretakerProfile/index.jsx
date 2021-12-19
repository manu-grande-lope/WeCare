import { Card, Typography, TextField, Stack, Avatar } from "@mui/material";
import {React, useState, useEffect} from "react";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useTranslation } from "react-i18next";
import AvatarIMG from "../assets/burritouser.jpg";
import { useHistory } from "react-router-dom";

function ImageAvatars() {
    return (
        <Avatar
            alt="Remy Sharp"
            src={AvatarIMG}
            sx={{ width: 200, height: 200, alignSelf: 'center' }}

        />
    );
}


export default function CaretakerProfile() {
    let history = useHistory();
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


    const handleDeleteUser = (event) => {
        event.preventDefault();
        const token = sessionStorage.getItem('token');
        const options = {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
        }
        fetch('http://localhost:3001/user/account', options)
            .then(r => {
                console.log('primer then', r.status)
                if (r.status === 200){
                    sessionStorage.removeItem('token')
                    history.push('/register')
                }else if (r.status === 400){
                    alert('Ha ocurrido un error, sorry')
                }
            })
    };

    return (
            <Stack component='form'
                sx={{backgroundColor:'white'}}
                noValidate
                autoComplete='off'
                justifyContent='center'
                margin={3}
                spacing={3}
                >
                <ImageAvatars />
                <Typography gutterBottom variant="h5" component="div">
                    Hola {userInfo.name}, bienvenido.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
                <TextField id="outlined-basic" name="name" label={i("menu-registro.name")} variant="outlined" value=""/>
                <TextField id="outlined-basic" name="email" label="Email" variant="outlined" value="" />
                <TextField id="outlined-basic" multiline={true} minRows="5" name="descripcion" label={i("menu-registro.description")} variant="outlined" />

                <Button type='submit' size="small" variant='contained'>{i("caretaker.modify")}</Button>
                <Button type='submit' size="small" variant='contained'>{i("caretaker.messages")}</Button>

                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Stack direction='row' justifyContent='flex-start' alignItems='center' spacing={3} mb={3}>
                            <NewReleasesIcon sx={{ color: 'alert.main' }} />
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                {i("caretaker.alert")}
                            </Typography>
                        </Stack>
                        <Typography variant="body2">
                            {i("caretaker.text-alert")}
                        </Typography>

                    </CardContent>
                </Card>
                <Button
                    type='submit'
                    variant='outlined'
                    size='medium'
                    sx={{ color: 'alert.delete' }}
                    startIcon={<DeleteIcon />} onClick={handleDeleteUser}>{i("caretaker.delete")}</Button>
            </Stack>
    );
}
