import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Card, CardMedia } from '@mui/material'
import CuidadorPerro from '../../pages/assets/cuidadorperro1.jpg';
import './style.css'

export default function Example(props)
// hacer fetch  users/getusers
{
    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
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
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Card elevation="0" sx={{ display: 'flex'}}>
            <CardMedia
                    component="img"
                    height="150"
                    image={CuidadorPerro}
                    alt="Cuidador perrro"/>
            <h4>{props.item.name}</h4>
            <p>{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Card>
    )
}
