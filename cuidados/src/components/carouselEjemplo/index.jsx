import React, { useEffect, useState } from 'react';
import { Avatar, Stack, Typography, Grid } from '@mui/material';
import Carousel from 'react-material-ui-carousel'
import { Button} from '@mui/material'
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

export default function ServicesAndCarousel() {

const services = [
    {
        value: 'mascota',
        label: 'menu-registro.pets',
        icon: <PetsIcon sx={{marginRight:"10px"}}/>
    },
    {
        value: 'ancianos',
        label: 'menu-registro.elderly',
        icon: <ElderlyIcon sx={{marginRight:"10px"}} />
    },
    {
        value: 'niños',
        label: 'menu-registro.children',
        icon: <ChildFriendlyIcon sx={{marginRight:"10px"}}/>
    }
];

function ServicesForm() {
    const [i] = useTranslation("global");
    const [service, setService] = React.useState('Elige un servicio');
    const handleChange = (event) => {
        setService(event.target.value);
    };
    return (
        <Grid xs={12} sm={10} md={8} lg={3} p={3}>
            <Paper elevation="4"
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
                        value={service}
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
                    <Button type="submit" variant="contained" color="primary" sx={{ width: "100%", alignSelf: "center", marginBotton:"20px" }}>BUSCA</Button>
                </Stack>
            </Paper>

        </Grid>
    );
}



function ImageAvatars() {
    return (
        <Avatar
            alt="Remy Sharp"
            src={AvatarIMG}
            sx={{ width: 200, height: 200, alignSelf: 'center' }}

        />
    );
}


function CarouselCaretakers() {
    const [carouselData, setCarouselData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3001/user/getallcaretakers')
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
            {carouselData.map((item, i) => {
                switch(item.cuida){
                    case "ancianos" : 
                        return <ItemAncianos key={i} item={item}/>

                    case "mascota" :
                        return <ItemMascotas key={i} item={item}/>

                    case "niños" :
                        return <ItemNiños key={i} item={item}/>

                    default :
                        console.log('Default')
                    }
})}
        </Carousel>
        </Grid>
    )
}

function ItemAncianos(item) {

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

function ItemMascotas(item) {

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

function ItemNiños(item) {

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

return(
    <Grid itm container xs={12} lg={12}>
        <ServicesForm></ServicesForm>
        <CarouselCaretakers></CarouselCaretakers>
    </Grid>
)

}