import { Card, Typography, TextField, Stack, Avatar } from "@mui/material";
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { useTranslation } from "react-i18next";
import AvatarIMG from "../assets/burritouser.jpg";

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
    const [i, i18n] = useTranslation("global");
    const handleDeleteUser = (event) => {
        event.preventDefault();
        const token = sessionStorage.getItem('token');
            const options = {
                method: 'DELETE',
                headers:{
                    'authorization':`Bearer ${token}`,
                    'content-type':'application/json'
                },
                body: JSON.stringify({
                    email:'hobele2442@ningame.com'
                })
            }
            //llamo al login
            fetch('http://localhost:3001/auth/login', options)
            .then(r => r.json())
            .then(d => console.log(d))
    };

    return (
        <form>
            <Stack component='form'

                noValidate
                autoComplete='off'
                justifyContent='center'
                margin={3}
                spacing={3}>
                <ImageAvatars />
                <Typography gutterBottom variant="h5" component="div">
                    Nombre de cuidador por props
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
                <TextField id="outlined-basic" name="name" label={i("menu-registro.name")} variant="outlined" value='nombre por props que se pueda modificar' />
                <TextField id="outlined-basic" name="email" label="Email" variant="outlined" value='email por props modificable' />
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
        </form>
    );
}
