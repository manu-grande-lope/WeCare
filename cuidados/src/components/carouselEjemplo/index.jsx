import React, { Fragment, useEffect, useState } from 'react';
import { Avatar, Stack, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@mui/material'
import './style.css';
import AvatarIMG from "../../pages/assets/burritouser.jpg";
import HoverRating from './rating';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';

export default function ServicesAndCarousel() {
    const [service, setService] = useState('Elige un servicio');

    const services = [
        {
            value: 'mascota',
            label: 'menu-registro.pets',
            icon: <PetsIcon sx={{ marginRight: "10px" }} />
        },
        {
            value: 'ancianos',
            label: 'menu-registro.elderly',
            icon: <ElderlyIcon sx={{ marginRight: "10px" }} />
        },
        {
            value: 'niños',
            label: 'menu-registro.children',
            icon: <ChildFriendlyIcon sx={{ marginRight: "10px" }} />
        }
    ];

    function ServicesForm({ state, setState }) {
        const [i] = useTranslation("global");
        const handleChange = (event) => {
            setState(event.target.value);
        };
        return (
            <Grid xs={9}>
                <Paper elevation="1"
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 4, pr: 0, width: '90%' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Stack
                        spacing={2}>
                        <TextField
                            id="outlined-select-currency"
                            select
                            label={i("select-service.choose")}
                            value={state}
                            onChange={handleChange}
                            helperText=''
                        >
                            {services.map((option) => (
                                <MenuItem key={option.value} value={option.value} >
                                    {option.icon}{i(option.label)}
                                </MenuItem>
                            ))}
                        </TextField>
                        {/*<BasicDateRangePicker />*/}
                    </Stack>
                </Paper>

            </Grid>
        );
    }

    /* ---------------------------- CAROUSEL ---------------------------------- */

    function ImageAvatars() {
        return (
            <Avatar
                alt="Remy Sharp"
                src={AvatarIMG}
                sx={{ width: 200, height: 200, alignSelf: 'center' }}

            />
        );
    }


    function CarouselCaretakers({ state }) {
        const [caretakers, setCaretakers] = useState([]);
        const [carouselData, setCarouselData] = useState([]);
        const [isLoading, setIsLoading] = useState(true)

        useEffect(() => {
            fetch('http://localhost:3001/user/getallcaretakers')
                .then(r => r.json())
                .then(d => {
                    setCarouselData(d)
                    setCaretakers(d)
                    setIsLoading(false)
                })
        }, []);
        useEffect(() => {
            if (state !== 'Elige un servicio') {
                setCarouselData(caretakers.filter((item) => item.cuida === state))
            }
        }, [state, caretakers])
        return (
            <Grid xs={5} md={6} lg={8} mt={7}>
                {isLoading ? <Skeleton variant="rectangular" className="skeleton__styles"></Skeleton> :
                <Carousel className="carousel__style"
                    autoPlay={true}
                    stopAutoPlayOnHover={true}
                    swipe={true}
                >
                    

                    {carouselData.map((item, i) => <Item key={i} item={item} />)}
                </Carousel>}
            </Grid>

        )
    }
    function Item(item) {
        console.log(item)
        const history = useHistory();
        function handleContact() {
            history.push(`/caretaker-public/${item.item._id}`)
        };



        return (
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                flexWrap="wrap">
                <ImageAvatars />
                <Stack flexWrap={true} gap={0} alignItems="cemter" sx={{ backgroundColor: 'logo' }} >
                    <Stack spacing={2} p={1} sx={{ marginTop: "20px" }}>
                        <Typography variant='h4'>{item.item.name}</Typography>
                        <Typography variant='h5'>Cuidador de {item.item.cuida}</Typography>
                        <HoverRating />
                        <Button className="CheckButton" onClick={handleContact}>
                            Contacta
                        </Button>
                    </Stack>

                </Stack>
            </Stack>
        )
    }



    return (
        <Fragment>
            <ServicesForm state={service} setState={setService} />
            <CarouselCaretakers state={service} />
        </Fragment>
    )

}