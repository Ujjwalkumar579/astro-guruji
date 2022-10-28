/* eslint-disable react/jsx-pascal-case */
/* eslint-disable no-useless-concat */
/* eslint-disable no-undef */
// import logo from './logo.svg';
import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import { Route, Router, Routes } from "react-router-dom";
import Astro_detail from "./components/Astro_detail/Astro_detail";
import { useDispatch, useSelector } from "react-redux";
import { setDataOfApiAstro, setDataOfApiBirth, setDataOfApiPanchang } from "./redux/action/Action_creator";

function App() {
  const myData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  // console.log(myData.getData);
  const [dataForApi, setDataForApi] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    min: "",
    lat: "",
    lon: "",
    tzone: "",
  });

  useEffect(() => {
    let getDate = myData.getData.dob.split("-");
    let getTime = myData.getData.time.split(":");
    setDataForApi({
      ...dataForApi,
      day: getDate[2],
      month: getDate[1],
      year: getDate[0],
      hour: getTime[0],
      min: getTime[1],
      lat: myData.getData.latitude,
      lon: myData.getData.longitude,
      tzone: myData.getData.timezone
    })
  }, [myData.getData])


  useEffect(() => {
    var request1 = $.ajax({
      url: "https://json.astrologyapi.com/v1/birth_details",
      method: "POST",
      dataType: "json",
      headers: {
        authorization:
          "Basic " + btoa("621047" + ":" + "8838f35fa21300254650063705ec70d4"),
        "Content-Type": "application/json",
      },
      data: JSON.stringify(dataForApi),
    });

    var request2 = $.ajax({
      url: "https://json.astrologyapi.com/v1/astro_details",
      method: "POST",
      dataType: "json",
      headers: {
        authorization:
          "Basic " + btoa("621047" + ":" + "8838f35fa21300254650063705ec70d4"),
        "Content-Type": "application/json",
      },
      data: JSON.stringify(dataForApi),
    });

    var request3 = $.ajax({
      url: "https://json.astrologyapi.com/v1/basic_panchang",
      method: "POST",
      dataType: "json",
      headers: {
        authorization:
          "Basic " + btoa("621047" + ":" + "8838f35fa21300254650063705ec70d4"),
        "Content-Type": "application/json",
      },
      data: JSON.stringify(dataForApi),
    });

    Promise.all([request1, request2, request3]).then(
      function (resp) {
        console.log(resp);
        dispatch(setDataOfApiBirth(resp[0]));
        dispatch(setDataOfApiAstro(resp[1]));
        dispatch(setDataOfApiPanchang(resp[2]));
      },
      function (err) {
        console.log(err);
      }
    );
  }, [dataForApi]);

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
