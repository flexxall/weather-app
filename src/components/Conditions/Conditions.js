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
  let { dailyData } = props;
  console.log("from conditions " + dailyData);
  return (
    <div>
      Test
      {dailyData &&
        dailyData.map((day) => {
          return <p key={dailyData.daily.dt}>Day</p>;
        })}
    </div>
  );
};
export default Conditions;
