/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import Astro_detail from "./components/Astro_detail/Astro_detail";

function App() {
  const [apidata, setData] = useState({});

  var data = {
    day: 12,
    month: 3,
    year: 1992,
    hour: 2,
    min: 23,
    lat: 19.132,
    lon: 72.342,
    tzone: 5.5,
  };

  useEffect(() => {
    var request = $.ajax({
      url: "https://json.astrologyapi.com/v1/birth_details",
      method: "POST",
      dataType: "json",
      headers: {
        authorization:
          "Basic " + btoa("621047" + ":" + "8838f35fa21300254650063705ec70d4"),
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });

    request.then(
      function (resp) {
        console.log(resp);
        setData(resp);
      },
      function (err) {
        console.log(err);
      }
    );
  }, []);

  return (
    <div className="App">
      <div className="bg"></div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/astro_detail" element={<Astro_detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
