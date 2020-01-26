import React from "react";
import { Form, Navbar, Nav, FormControl,  } from "react-bootstrap";
import { DebounceInput } from 'react-debounce-input';

const Header = ({dbInfo, searchQuery}) => {
const preventEvent=(e)=>{
    e.preventDefault()
};

    return (
        <>
            <Navbar bg="dark" variant="dark" id="header__navbar">
                <Navbar.Brand href="#home">INDEXEDDB API</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">indexedDB: {dbInfo && dbInfo.name  ? "CONNECTED" : "CONNECTING..." } </Nav.Link>
                    <Nav.Link href="#features">Version: {dbInfo && dbInfo.verno}</Nav.Link>
                </Nav>
                <Form inline onSubmit={preventEvent}>
                    <DebounceInput
                        debounceTimeout={700}
                        onChange={searchQuery}
                        type="text"
                        placeholder="Search by name"
                        className="mr-sm-2" />
                </Form>
            </Navbar>
        </>
    );
};

export default Header;
