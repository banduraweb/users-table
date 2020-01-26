import React from "react";
import { Form, Navbar, Nav, FormControl,  } from "react-bootstrap";

const Header = ({dbInfo}) => {
    console.log(dbInfo);
    console.log(dbInfo);
    return (
        <>
            <Navbar bg="dark" variant="dark" id="header__navbar">
                <Navbar.Brand href="#home">INDEXEDDB API</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">indexedDB: {dbInfo && dbInfo.name  ? "CONNECTED" : "CONNECTING..." } </Nav.Link>
                    <Nav.Link href="#features">Version: {dbInfo && dbInfo.verno}</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                </Form>
            </Navbar>
        </>
    );
};

export default Header;
