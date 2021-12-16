import React, { Component } from 'react';
import { Container, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Link } from 'react-scroll';
import HaltonHacksLogo from './../images/haltonhacks_logo.png';

class BootstrapNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg" className="navbar-dark bg-dark">
                <Container>
                    <NavbarBrand>
                        <img src={HaltonHacksLogo} alt="Halton Hacks" width="40" className="d-inline-block align-text-top rounded-circle" />
                    </NavbarBrand>
                    <NavbarToggle data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" />
                    <NavbarCollapse id="navbarNav">
                        <Nav>
                            {this.props.children}
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>
        )
    }
}

class BootstrapNav extends Component {
    render() {
        return (
            <Link to={this.props.scrollTo} smooth={true}>
                <NavLink className="text-light">{this.props.children}</NavLink>
            </Link>
        )
    }
}

export default class TitleBar extends Component {
    render() {
        return (
            <BootstrapNavbar>
                <BootstrapNav scrollTo="landing">Home</BootstrapNav>
                <BootstrapNav scrollTo="about">About</BootstrapNav>
                <BootstrapNav scrollTo="faq">FAQ</BootstrapNav>
                <BootstrapNav scrollTo="prizes">Prizes</BootstrapNav>
                <BootstrapNav scrollTo="judging">Judging</BootstrapNav>
                <BootstrapNav scrollTo="schedule">Schedule</BootstrapNav>
            </BootstrapNavbar>
            
        )
    }
}
