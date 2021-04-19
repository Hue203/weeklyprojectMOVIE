import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const PublicNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="fixed-top">
        <Navbar.Brand href="/" className="text-movie">
          TheMovieDB
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/movies">Movies</Nav.Link>
          <Nav.Link href="/movie/:id">Account</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default PublicNavbar;
