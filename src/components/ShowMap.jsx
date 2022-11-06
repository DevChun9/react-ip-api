import React from 'react'
import { MapContainer, TileLayer, Marker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './ShowMap.css'

function ShowMap({where}) {

  let lat = where.x;
  let lng = where.y;

  // const center = [{Location.location ? Location.locatino.lat : null}, {Location.location? Location.locatino.late : null}];

  return (
    <div className='relative mb-[-18rem] top-[-18rem] md:top-[-7rem] z-10'>
        <MapContainer className='' center={[lat, lng]} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]}></Marker>
        </MapContainer>
    </div>
  )
}

export default ShowMap