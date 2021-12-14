import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardMedia } from '@mui/material'
import CuidadorPerro from '../../pages/assets/cuidadorperro1.jpg';
import './style.css';

export default function CarouselCaretakers() {
    const [carouselData, setCarouselData] = useState([]);

    useEffect( () => {
        fetch('http://localhost:3001/user/getallusers')
            .then(r => r.json())
            .then(d => setCarouselData(d))   
    }, []);

    return (
        <Carousel className="carousel__style">
            { carouselData.map((item, i) => <Item className="carousel__style--wrapper" key={i} item={item} />) }
        </Carousel>
    )
}

function Item(item) {
    console.log(item);

    return (
        <div className='card__style'>
            <CardMedia
                component="img"
                height='200px'
                width='200px'
                image={CuidadorPerro}
                alt="Cuidador perro" />
            <div className='card__style--text'>
                <h4>{item.item.name}</h4>
                <p>{item.item.cuida}</p>


                <Button className="CheckButton">
                    Contacta
                </Button>
            </div>
        </div>
    )
}
