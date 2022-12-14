import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
    const matches = useMediaQuery('(min-width:600px)');
    const classes = useStyles();

    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyB3adT4oON5OwDcgibu_ADSAoICKjjb4J4',
                }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={''}>
                {places?.map((place, i) => (
                    <div
                        className={classes.markerContainer}
                        lat={Number(place.lattitude)}
                        lng={Number(place.longitude)}
                        key={i}></div>
                ))}
            </GoogleMapReact>
        </div>
    );
};

export default Map;
