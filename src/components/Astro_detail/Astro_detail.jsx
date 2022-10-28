import React from "react";
import { useSelector } from "react-redux";
import "./Astro_detail.css";

const Astro_detail = () => {

  const myData = useSelector((state) => state.data);
  console.log(myData.getApiData);

  return (
    <div>
      <h1>Astro details</h1>
    </div>
  );
};

export default Astro_detail;
