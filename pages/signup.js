import React, { useState, useEffect } from "react"
import { GoogleMap, Marker, useJsApiLoader, useLoadScript } from '@react-google-maps/api';
function signup() {
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
  const containerStyle = {
    width: '400px',
    height: '128px'
  };
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyC7GcL0xpVT9__afqBZVVEgsrFEnrmf-8g"
  })



  return (
    <div className="bg-[#e7ecee] flex flex-col items-center justify-center w-full h-screen gap-2">

      <div className="w-[25rem] h-12 shadow-xl bg-white rounded flex items-center justify-center"><input className="w-[96%] bg-transparent h-full outline-none border-none" placeholder="Fullname" type="text" name="" id="" /></div>
      <div className="w-[25rem] h-12 shadow-xl bg-white rounded flex items-center justify-center"><input className="w-[96%] bg-transparent h-full outline-none border-none" placeholder="Phone" type="text" name="" id="" /></div>
      <div className="w-[25rem] h-12 shadow-xl bg-white rounded flex items-center justify-center"><input className="w-[96%] bg-transparent h-full outline-none border-none" placeholder="Email" type="text" name="" id="" /></div>
      <div className="w-[25rem] h-12 shadow-xl bg-white rounded flex items-center justify-center"><input className="w-[96%] bg-transparent h-full outline-none border-none" placeholder="Password" type="text" name="" id="" /></div>
      <div className="w-[25rem] h-32 shadow-xl  rounded flex items-center justify-center">
        {
          isLoaded ? <GoogleMap zoom={20} center={center} mapContainerClassName="w-full h-full">

            <Marker position={center}/>
          </GoogleMap> : "not loaded"
        }
      </div>
      <div className="w-[25rem] h-12 shadow-xl bg-gradient-to-r from-pink-400 to-pink-300 rounded flex items-center justify-center">sign up</div>

    </div>
  )
}

export default signup