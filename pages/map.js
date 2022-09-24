import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import React, { useEffect, useState } from 'react'

function map() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyC7GcL0xpVT9__afqBZVVEgsrFEnrmf-8g"
      })
    
      const [MyLocation, setMyLocation] = useState({ lat: "", long: "" })
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      console.log(pos.coords.latitude)
      setMyLocation({ lat: pos.coords.latitude, long: pos.coords.longitude })
    }, (err) => {
      console.log(err)
    })
  }, [])
  const center = {
    lat: MyLocation.lat,
    lng: MyLocation.long
  };
  return (
    <div>
         {
          isLoaded ? <GoogleMap zoom={10} center={center} mapContainerClassName="z-30 relative top-0 w-screen h-screen">
            <Marker position={center}/>
          </GoogleMap> : "not loaded"
        }
    </div>
  )
}

export default map