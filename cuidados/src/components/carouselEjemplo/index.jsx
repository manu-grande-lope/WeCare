import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardMedia } from '@mui/material'
import CuidadorPerro from '../../pages/assets/cuidadorperro1.jpg';
import './style.css'

export default function CarouselCaretakers(props)
// hacer fetch  http://localhost:3001/user/getallusers
{
    let items = [
        {
            name: "Manu Grande",
            description: "Cuidador de perros profesional desde hace 5 años, etólogo diplomado Y GUAPO.",
            image:'../../pages/assets/cuidadorperro1.jpg'
        },
        {
            name: "Rocío Perez",
            description: "Cuidadora de ancianos y enfermos, enfermera.",
            image:'../../pages/assets/cuidadorperro1.jpg'
        }
    ]

    let item = {
        name: "Random Name #2",
        description: "Hello World!"
    }

    return (
            // <Item item={item}></Item>
        <Carousel className="carousel__style">
            {
                items.map( (item, i) => <Item className="carousel__style--wrapper" key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <div className='card__style'>
            <CardMedia
                    component="img"
                    height='200px'
                    width='200px'
                    image={props.item.image}
                    alt="Cuidador perro"/>
            <div className='card__style--text'>
            <h4>{props.item.name}</h4>
            <p>{props.item.description}</p>
            

            <Button className="CheckButton">
                Contacta
            </Button>
            </div>
        </div>
    )
}
