import React from "react";
const Conditions = (props) => {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let day = weekday[d.getDay()];
  let dailyData = { props };
  console.log("from conditions" + dailyData);
  return (
    <div>
      Test
      {props.data.cod === 200
        ? props.data.map((day) => {
            return <p key={props.data.daily.dt}>Day</p>;
          })
        : // <p>
          //   <strong>{props.data.name}</strong>
          // </p>
          // <p>
          //   It is currently {Math.round(props.data.main.temp)} degrees out with{" "}
          //   {props.data.weather[0].description}.
          // </p>
          // <div className="today">
          //   {day}
          //   {/* <img
          //     src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png`}
          //     alt={props.data.weather[0].description}
          //   /> */}
          //   {Math.round(props.data.main.temp_max)}
          //   {"\u00b0"} {Math.round(props.data.main.temp_min)}
          //   {"\u00b0"}
          // </div>
          //</div>
          null}
    </div>
  );
};
export default Conditions;
