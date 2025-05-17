import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
            setSearchTerm('');
        }
    };
    return (
        <header>
            <Navbar expand="lg" className="bg-body-tertiary justify-content-between navbar" bg="light" data-bs-theme="light">
                <Navbar.Brand as={Link} to="/">Easy Store</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto me-auto">
                        <Form onSubmit={handleSearch}>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Nav>
                    <Nav className="ms-auto ">
                        <Nav.Link as={Link} to="/" className="ms-auto">Home</Nav.Link>
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">Shop</Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/category/men's clothing">Mens</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/category/women's clothing">Womens</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/category/electronics">Electronics</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/category/jewelery">Jewelery</Dropdown.Item>

                            </Dropdown.Menu>
                        </Dropdown>
                        <Nav.Link as={Link} to="/wishlist" className="ms-auto">Wishlist</Nav.Link>
                        <Nav.Link as={Link} to="/cart" className="ms-auto">Cart</Nav.Link>
                        <Nav.Link as={Link} to="/login" className="ms-auto">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </header>
    );
}

export default Header