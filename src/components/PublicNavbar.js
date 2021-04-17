import React from "react";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

const PublicNavbar = ({ handleOnSubmit, handleSearch }) => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Hue's Movie</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/movie/:id">Features</Nav.Link>
          <Nav.Link href="/">Movies</Nav.Link>
        </Nav>
        <Form inline onSubmit={handleOnSubmit}>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" onClick={handleSearch}>
            Search
          </Button>
        </Form>
      </Navbar>
    </div>
  );
};

export default PublicNavbar;
