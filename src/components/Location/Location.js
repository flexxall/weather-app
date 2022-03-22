import React, { useState, useEffect } from "react";
import Conditions from "../Conditions/Conditions";

// import "./Forcast.css";

const Location = () => {

const [cityData, setCityData] = useState()
  
const form = document.querySelector(".top-banner form");
 
// form.addEventListener("submit", e => {
//   e.preventDefault();
//   const cityData = input.value;
// })



return (
  <form>
    <label for="cityData">City Name:</label>
    <input type="text" id="cityData" name="cityData" />
    <input type="submit" value="Submit" />
  </form> 
)
}

export default Location