import React from 'react';
import './Header.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../img/logo.png'
import { Col, Row } from 'react-bootstrap';
const Header = () => {
    return (
        <div>
            <Navbar>
                <Container className="justify-content-center">
                <Row>
                    <Col>
                    <Navbar.Brand href="#home" >
                        <img src={logo} alt="" className='img-fluid logo' />
                    </Navbar.Brand>
                    </Col>
                </Row>

                </Container>
            </Navbar>
        </div>
    )
}

export default Header;
