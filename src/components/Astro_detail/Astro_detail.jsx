import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Astro_detail.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Astro_detail = () => {
  const myData = useSelector((state) => state.data);
  // console.log(myData.getApiDataBirth);
  // console.log(myData.getApiDataAstro);
  // console.log(myData.getApiDataPanchang);

  return (
    <div>
      <Container fluid>
        <Row>
          <Col>
            <div className="tabs">
              <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
                variant="pills"
              >
                <Tab eventKey="home" title="Home">
                  <h1>{myData.getApiDataBirth.sunrise}</h1>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  <h1>{myData.getApiDataAstro.ascendant_lord}</h1>
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                  <h1>{myData.getApiDataPanchang.tithi}</h1>
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
