import React, { useState, useEffect } from "react";
import axios from "axios";
import Conditions from "../Conditions/Conditions";

const Forecast = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  let lat = 38.984764;
  let lon = -94.677658;
  let key = "850b5e90b2da89a22d801ce5562cb9d8";
  let units = "imperial";
  let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&appid=${key}`;

  useEffect(() => {
    getForecast();
  }, []);

  async function getForecast() {
    try {
      const res = await axios(url);
      // .then((res) => {
      setData(res.data);
      console.log(data);
      // const daily = data.daily.map((day) => {
      // return(<p key={data.daily.dt}>Day</p>));}
      // })
      // .catch((error) => {
      //   console.error("Error fetching data: ", error);
      //   setError(error);
      // });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h2>Find Current Weather Conditions</h2>
      <div>{JSON.stringify(data)}</div>
      {/* {data.daily.map((day) => {
        return <p key={data.daily.dt}>Day</p>;
      })} */}
      {/* <ul>
        {data.daily.map((day) => (
          <li key={data.daily.dt}>Day</li>
        ))}
      </ul> */}
      <button onClick={getForecast}>Get Forecast</button>
      <Conditions data={data} />
    </div>
  );
};

export default Forecast;
