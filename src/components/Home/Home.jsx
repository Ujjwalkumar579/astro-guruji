import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Home.css";
import window_img from "../../img/window.png";
import astro_circle from "../../img/astrology-circle-orance.png";
import aries from "../../img/aries.png";
import Header from "../navbar/Header";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../redux/action/Action_creator";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [formData, setFormData] = useState({
    dob: "",
    time: "",
    latitude: 18.216,
    longitude: 72.8258,
    timezone: 5.3,
  });

  const reduxData = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setDataInStore = (e) => {
    e.preventDefault();
    navigate("/astro_detail");
    dispatch(setData(formData));
  };

  const navigateToDetail = () => {
    navigate("/astro_detail");
  };

  return (
    <div>
      <nav>
        <Header />
      </nav>
      {reduxData.getApiDataAstro !== "" ? (
        <Col lg={12} className="d-flex justify-content-center">
          <div className="back_button">
            <button className="btn btn-right" onClick={navigateToDetail}>
              <span>Detial Page</span>
            </button>
          </div>
        </Col>
      ) : ""}

      <div className="hero_section_wrapper">
        <Container fluid>
          <Row>
            <Col
              lg={6}
              md={12}
              className="col-12 pt-xs-5 mt-sm-5 d-flex justify-content-center align-items-center"
            >
              <div className="left ">
                <div className="form_wrapper">
                  {/* <img src={aries_gold} alt="" className="img-fluid" /> */}
                  <img src={aries} alt="" className="img-fluid" />
                  <form action="" onSubmit={setDataInStore}>
                    <div className="dob_filed">
                      <label htmlFor="dob">Date of Birth ujjwal</label>
                      <input
                        type="date"
                        value={formData.dob}
                        placeholder="DOB"
                        className="form-control"
                        id="dob"
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, dob: e.target.value })
                        }
                      />
                      <span>Click on calendar icon to pick date</span>
                    </div>
                    <div className="time_filed">
                      <label htmlFor="tob">Time of Birth kumar</label>
                      <input
                        type="time"
                        value={formData.time}
                        placeholder="Time of Birth"
                        className="form-control"
                        id="tob"
                        required
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                      />
                      <span>Click on clock icon to pick time</span>
                    </div>
                    <div className="lat_long_filed">
                      <div className="row">
                        <div className="col">
                          <label htmlFor="lat">Latitude</label>
                          <input
                            type="number"
                            value={formData.latitude}
                            placeholder="Latitude"
                            className="form-control"
                            id="lat"
                            required
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                latitude: e.target.value,
                              })
                            }
                          />
                          <span>Eg. 18.216</span>
                        </div>
                        <div className="col">
                          <label htmlFor="long">Longitude</label>

                          <input
                            type="number"
                            value={formData.longitude}
                            placeholder="Longitude"
                            className="form-control"
                            id="long"
                            required
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                longitude: e.target.value,
                              })
                            }
                          />
                          <span>Eg. 72.8258</span>
                        </div>
                      </div>
                    </div>

                    <div className="timeZone_field">
                      <label htmlFor="timezone">Time Zone</label>

                      <input
                        type="number"
                        name=""
                        id="timezone"
                        placeholder="Timezone"
                        className="form-control"
                        value={formData.timezone}
                        required
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            timezone: e.target.value,
                          })
                        }
                      />
                      <span>Eg. 5.30</span>
                    </div>

                    <div className="submit_btn">
                      {/* <Link to="astro_detail"> */}
                      <button className="btn form-control">Submit</button>
                      {/* </Link> */}
                    </div>
                  </form>
                </div>
              </div>
            </Col>
            <Col lg={6} className="col-12">
              <div className="astro_animation">
                <div className="window_bg text-center ">
                  <img src={window_img} alt="" className="img-fluid" />
                  <img src={astro_circle} alt="" className="img-fluid" />
                </div>
                {/* <div className="astro_circle"></div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
