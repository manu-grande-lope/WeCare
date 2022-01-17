import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Grid, Stack, Typography } from '@mui/material';
import './style.css';



export default function Map() {




    return (
        <Grid item container justifyContent='center' >
            <Stack flexDirection="column" flexWrap='wrap' alignItems='center'>
                <Typography variant='h3' mb={4} mt={4} fontWeight={900} p={2} color={'primary.main'}>
                    CUIDADORES CERCA DE TI
                </Typography>
                <MapContainer center={[37.385191,-5.9941002]} zoom={130} scrollWheelZoom={true} className='map'>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[37.385191,-5.9941002]}>
                        <Popup>
                            This is you.
                        </Popup>
                    </Marker>
                </MapContainer>
            </Stack>
        </Grid>
    )
} 




