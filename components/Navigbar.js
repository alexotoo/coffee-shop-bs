import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styles from "./navigbar.module.scss";
const Navigbar = () => {
  return (
    <Navbar expand="lg" className={styles.navigbar}>
      <Navbar.Brand href="#home">
        <img src="/images/alexlogo.png" alt="" width="150" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={styles.navig}>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigbar;
