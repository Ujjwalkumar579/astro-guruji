import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Astro_detail.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Header from "../navbar/Header";
import BirthTab from "./BirthTab";
import AstroTab from "./AstroTab";
import PanchangTab from "./PanchangTab";
import { useNavigate } from "react-router-dom";

const Astro_detail = () => {
  const myData = useSelector((state) => state.data);
  
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  window.addEventListener('load',()=>{
    navigate('/');
  })

  return (
    <div>
      <Header />
      <Container fluid>
        <Row>
          <Col lg={12} className="d-flex justify-content-end">
            <div className="back_button">
              <button className="btn btn-navigate" onClick={navigateToHome}>
                <span>Back</span>
              </button>
            </div>
          </Col>

          <Col>
            <div className="tabs">
              <Tabs
                defaultActiveKey="Birth Detail"
                id=""
                className="mb-5"
                fill
                variant="pills"
              >
                <Tab
                  eventKey="Birth Detail"
                  title="Birth Detail"
                  className="pb-5"
                >
                  <BirthTab birth_detail={myData.getApiDataBirth} />
                </Tab>
                <Tab
                  eventKey="Astrology Detail"
                  title="Astrology Detail"
                  className="pb-5"
                >
                  <AstroTab astro_detail={myData.getApiDataAstro} />
                </Tab>
                <Tab
                  eventKey="Basic Panchang"
                  title="Basic Panchang"
                  className="pb-5 mb-5"
                >
                  <PanchangTab panchang_detail={myData.getApiDataPanchang} />
                </Tab>
              </Tabs>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Astro_detail;
