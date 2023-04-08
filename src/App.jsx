import { useState } from 'react'
import './App.css'

function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  const geolocationAPI = navigator.geolocation;

  
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position;
        setLat(coords.latitude);
        setLong(coords.longitude);
      }, (error) => {
        setError('Something went wrong getting your position!')
      })
    }
  }

  getUserCoordinates();

  const ShowGps = () => {
    alert("https://www.google.com/maps/place/" + lat + "," +long);
  }


  return (
    <div className="App">
      <button onClick={ShowGps}>Click here!</button>
  </div>
  )
}

export default App
