import React, { useEffect, useState } from 'react';
import { Avatar, Stack, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { Button, Paper } from '@mui/material'
import CuidadorPerro from '../../pages/assets/cuidadorperro1.jpg';
import './style.css';
import AvatarIMG from "../../pages/assets/burritouser.jpg";
import HoverRating from './rating';

function ImageAvatars() {
    return (
        <Avatar
            alt="Remy Sharp"
            src={AvatarIMG}
            sx={{ width: 200, height: 200, alignSelf: 'center' }}

        />
    );
}


export default function CarouselCaretakers() {
    const [carouselData, setCarouselData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/user/getallusers')
            .then(r => r.json())
            .then(d => setCarouselData(d))
    }, []);

    return (
        <Grid xs={12} xl={7} >
        <Carousel className="carousel__style" 
        autoPlay={true} 
        stopAutoPlayOnHover={true}
        swipe={true}

        >
            {carouselData.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
        </Grid>
    )
}

function Item(item) {

    return (
        <Stack direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={25}
            p={4}
            flexWrap="wrap">
            <ImageAvatars/>
            <Stack flexWrap={true} gap={0} alignItems="flex-start" sx={{backgroundColor:'logo'}} >
                <Stack spacing={2} p={1} sx={{ marginTop:"20px", marginLeft:"-6.25rem"}}>
                    <Typography variant='h4'>{item.item.name}</Typography>
                    <Typography variant='h5'>Cuidador de {item.item.cuida}</Typography>
                    <HoverRating/>
                    <Button className="CheckButton">
                        Contacta
                    </Button>
                </Stack>
                
            </Stack>
        </Stack>
    )
}