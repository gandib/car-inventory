import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CustomLink from '../CustomLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const logout = () => {
        signOut(auth);
    }
    return (
        <div>
            <>
                <Navbar collapseOnSelect expand="lg" sticky='top' bg="white" variant="dark">
                    <Container>
                        {/* <Navbar.Brand as={Link} to="/">
                            <img src={logo} height='30' alt="" />
                        </Navbar.Brand> */}
                        <Navbar.Toggle className='bg-black' aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className='bg-white' id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link className='text-black' as={CustomLink} to="/home">Home</Nav.Link>

                                <Nav.Link className='text-black' as={CustomLink} to="/donation">Manage Inventories</Nav.Link>

                                <Nav.Link className='text-black' as={CustomLink} to="/blog">Blog</Nav.Link>
                            </Nav>
                            <Nav>

                                {
                                    user ?
                                        <>

                                            <Nav.Link className='text-black' as={CustomLink} to="/login">Manage Items</Nav.Link>

                                            <Nav.Link className='text-black' as={CustomLink} to="/login">Add Item</Nav.Link>

                                            <Nav.Link className='text-black' as={CustomLink} to="/login">My Items</Nav.Link>

                                            <button onClick={logout} className='btn btn-danger'>Logout</button>
                                        </>
                                        :
                                        <Nav.Link className='text-black' as={CustomLink} to="/login">Login</Nav.Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        </div>
    );
};

export default Header;