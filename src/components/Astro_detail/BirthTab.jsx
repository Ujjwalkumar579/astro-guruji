import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const BirthTab = ({ birth_detail }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Table striped hover>
              <tbody>
                {Object.keys(birth_detail).map((ele, i) => {
                  return (
                    <tr key={i}>
                      <th>{ele}</th>
                      <td>{birth_detail[ele]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BirthTab;
