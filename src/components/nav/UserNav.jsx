import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import './nav.css'
import { useNavigate } from 'react-router-dom';

export const UserNav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate()

    const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
        <Navbar className='navbar'>
            <NavbarBrand className='nav-title' href="/">VAM</NavbarBrand>
            <Nav className='nav'>
                <NavItem>
                    <NavLink href="/galleries">Galleries</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/register">Register</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/login">Login</NavLink>
                </NavItem>
            </Nav>
            <Nav className='nav-logout-container'>
                <NavItem>
                    {localStorage.getItem("vam_user") ? (
                    <NavLink
                    style={{
                        fontSize: "16px",
                        fontWeight: "bold"
                     }}
                        onClick={() => {
                            localStorage.removeItem("vam_user")
                            navigate("/", { replace: true })
                        }}
                    >
                        Logout
                    </NavLink>
                    ) : ""}
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  );
}
