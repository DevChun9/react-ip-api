import Input from './components/Input'
import React, { useEffect, useState } from 'react'
import Detail from './components/Detail'
import ShowMap from './components/ShowMap';
// import { map, useMap } from 'react-leaflet';

function App() {

  const [Location, setLocation] = useState([]);

  const [ip, setIp] = useState();

  let geo_api = `https://geo.ipify.org/api/v2/country,city?apiKey=at_M8ZTRBUI0NRcvVA5pvr0WkTRqnquP&ipAddress=58.97.220.75`;

  const [where, setWhere] = useState ({
    x: 	40.730610,
    y: -73.935242
  });

  // let lat = where.x;
  // let lng = where.y;

  const get_location = async() => {
    const response = await fetch(geo_api);
    const data = await response.json();
    setLocation(data);
    setWhere({
      x: data.location.lat,
      y: data.location.lng
    })
    console.log(data);
  }

  // const position = [lat, lng];
  // const map = useMap();

  useEffect(() => {
    get_location()
  }, []);

  // useEffect(()=> {
  //   map.flyTo(position, 13, {
  //     Animation: true,
  //   })
  // }, [map, position])

  return (
    <>
      <Input setIp={setIp} setLocation={setLocation} setWhere={setWhere}/>
      <Detail Location={Location}/>
      <ShowMap where={where}/>
    </>
  )
}

export default App