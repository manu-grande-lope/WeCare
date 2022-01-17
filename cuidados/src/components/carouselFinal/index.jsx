import React, { Fragment, useEffect, useState } from 'react';
import { Avatar, Stack, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { Button } from '@mui/material'
import './style.css';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import ElderlyIcon from '@mui/icons-material/Elderly';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import { useTranslation } from "react-i18next";
import { useHistory } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import TextClaim from '../textClaim/index.jsx';





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
            <Grid >
                <Paper elevation={1}
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 4, pr: 0, width: '90%' }, mt: '25px'
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
                    </Stack>
                </Paper>

            </Grid>
        );
    }

    /* ---------------------------- CAROUSEL ---------------------------------- */


    const labels = {
        0: 'Useless',
        1: 'Poor',
        2: 'Ok',
        3: 'Good',
        4: 'Excellent',
        5: 'Excellent+',
    };

    function StaticRating(props) {
        const [value] = useState(Math.round(props.rating));
        const [hover] = useState(-1);

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
                    value={props.rating}
                    precision={0.5}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {props.rating !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
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
                    console.log(d, 'esto es d')
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
            <Grid item xs={10.5} md={7} lg={5} mt={7} mb={7} className='carousel__style--alpha' >
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


        function ImageAvatars() {
            return (
                <Avatar
                    alt="Remy Sharp"
                    src={`http://localhost:3001/public/images/${item.item.pic}`}
                    sx={{ width: 200, height: 200, alignSelf: 'center', marginTop: '20px' }}

                />
            );
        }

        return (
            <Stack direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                flexWrap="wrap"
            >
                <ImageAvatars />
                <Stack alignItems="center" color={'logo.main'}>
                    <Stack spacing={2} p={1} sx={{ marginTop: "20px" }} >
                        <Typography variant='h4' fontSize="40px" mb="10"alignSelf="center">{item.item.name}</Typography>
                        <Typography variant='h5'alignSelf="center"> {item.item.cuida}</Typography>
                        <StaticRating alignSelf="center"  sx={{marginLeft:"20px"}} rating={item.item.reviews} />
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
            <Stack>
                <TextClaim />
                <ServicesForm state={service} setState={setService} />
            </Stack>
            <CarouselCaretakers state={service} />  
        </Fragment>
    )

}