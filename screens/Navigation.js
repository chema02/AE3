import React, { Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component {

    render() {
        return (
            <div className="bg-dark">
           <Navbar bgColor="darkblue" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/">
                            HomePantalla
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/UsuariosPantalla">
                            UsuarioPantalla
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/ApuestasPantalla">
                            ApuestasPantalla
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/EventoPantalla">
                            EventoPantalla
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/MercadoPantalla">
                            MercadoPantalla
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            </div>
        )
    }
}