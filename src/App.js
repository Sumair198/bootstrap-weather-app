import react from 'react';
import axios from 'axios';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
function App() {

  const [weather, setWeather] = react.useState(null)
  const cityName = useRef(null);
  const [submit, setSubmit] = react.useState(false)

  react.useEffect(() => {

    let name = "";
    if (cityName.current.value) {
      name = `q=${cityName.current.value}`
    }
    else {
      name = `q=lahore`
    }
    axios.get(`https://api.openweathermap.org/data/2.5/weather?${name}&appid=d4c08ecfc1903339e1ad0a859c67daa8`)
      .then((res) => {
        var newWeather = res.data
        console.log(newWeather)
        setWeather(newWeather)
      });

  }, [submit]);

  return (
    <div>
      {/* <h1>City Name:</h1>
      <input ref={cityName} />
      
      <button onClick={() => {
        setSubmit(!submit)
      }} >Submit</button>
      <Button onClick={() => {
        setSubmit(!submit)
      }} variant="success">Search</Button>
      <br />
      {
        (weather !== null) ?
          <>
            {weather.name} Weather
            <h1>Temperature : {weather?.main?.temp}</h1>
            <h1>Country name : {weather?.sys?.country}</h1>
            <h2>Clouds : {weather?.weather[0].description}</h2>
            <h2>Wind Speed: {weather?.wind.speed}</h2>
          </>
          :
          <h1>Loading...</h1>
      } */}

      <Card className = 'abc' style={{ width: '18rem' }}>
        <h4>Weather Application</h4>
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBBrQWy8mA1-v89m_tOSTyecUWCTOTcawNJZ0lqKVhuSkV430_Nh87x2oJpqUHaclaXA&usqp=CAU" />
        <Card.Body>
          <Card.Title><h4>Search City name:</h4>
            <input  ref={cityName} /></Card.Title>
          <Card.Text>
            {
              (weather !== null) ?
                <>
                  {weather.name} Weather
                  <h4>Temperature : {weather?.main?.temp}</h4>
                  <h4>Country name : {weather?.sys?.country}</h4>
                  <h4>Clouds : {weather?.weather[0].description}</h4>
                  <h4>Wind Speed: {weather?.wind.speed}</h4>
                </>
                :
                <h1>Loading...</h1>
            }
          </Card.Text>
          <Button onClick={() => {
            setSubmit(!submit)
          }} variant="success">Search</Button>
        </Card.Body>
      </Card>

    </div>
  );
}


export default App;
