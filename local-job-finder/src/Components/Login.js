import React, { useState } from 'react';
import { Jumbotron, Row, Col, Button, Card, CardHeader, CardFooter, CardBody, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Table, Input } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Login extends React.Component {

    render() {
        return (
            <div>
                <Col>
                    <Card style={{ width: "50%", marginLeft: "25%", marginTop:"3%" }}>
                        <CardHeader>
                            Login
                    </CardHeader>
                        <CardBody>
                            <Table>
                                <tbody>
                                    <Col>
                                        <tr><th scope='row'>Username</th><td><Input /></td></tr>
                                        <tr><th scope='row'>Password</th><td><Input /></td></tr>
                                        <tr><p>Don't have an account? <Link to="/Register">Register</Link></p></tr>
                                    </Col>
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
    
            </div>
        );
    }
    
}

export default Login;

