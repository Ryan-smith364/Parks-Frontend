import React, { useState } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import pin from '../img/pin.png'

 
const SimpleMap =(props)=> {

  const [viewport] = useState({
    width: "100%",
    height: 400,
    latitude: parseFloat(props.park.latitude),
    longitude: parseFloat(props.park.longitude),
    zoom: 12
  });

    return (
      <div>
     
      <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/place/${props.park.fullName.replace(' ', '+')}`} >  

        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken={'pk.eyJ1Ijoia3J5b3JlbiIsImEiOiJjazhnYzF1N2UwMDFtM25vNDRsb3l3bG0yIn0.BLf0Sj2dTuwLk8rhXPGvEw'}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          >

          <Marker
            latitude={parseFloat(props.park.latitude)}
            longitude={parseFloat(props.park.longitude)}
          >
              <img style={{width:"40px", height:"40px"}} src={pin} alt='^' />
          </Marker>

        </ReactMapGL>

      </a>
       
      
      </div>
    );
  }

 
export default SimpleMap;
