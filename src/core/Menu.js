import React from "react";
import { Link, withRouter } from "react-router-dom";
import { isAutheticated, signout } from "../auth/helper";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Menu = ({ history }) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="/">Tshirt</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        {isAutheticated() && isAutheticated().user.role === 0 && (
          <Nav.Link href="/user/dashboard">U.Dashboard</Nav.Link>
        )}
        {isAutheticated() && isAutheticated().user.role === 1 && (
          <Nav.Link href="/admin/dashboard">A.Dashboard</Nav.Link>
        )}
        {!isAutheticated() && <Nav.Link href="/signup">Signup</Nav.Link>}
        {!isAutheticated() && <Nav.Link href="/signin">Signin</Nav.Link>}
        {isAutheticated() && (
          <Nav.Link
            href="/"
            onClick={() => {
              signout(() => {
                history.push("/");
              });
            }}
          >
            Signout
          </Nav.Link>
        )}
        <Nav.Link href="/cart">Cart</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default withRouter(Menu);

{
  /*<div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        T-shirts
      </Link>

      <button
        className="navbar-toggler toggler-example"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent1"
        aria-controls="navbarSupportedContent1"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="dark-blue-text">
          <i className="fa fa-bars fa-1x"></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent1">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link style={currentTab(history, "/")} className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              style={currentTab(history, "/cart")}
              className="nav-link"
              to="/cart"
            >
              Cart
            </Link>
          </li>

          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              U.Dashboard
            </Link>
          </li>

          {isAutheticated() && isAutheticated().user.role === 1 && (
            <li className="nav-item">
              <Link
                style={currentTab(history, "/admin/dashboard")}
                className="nav-link"
                to="/admin/dashboard"
              >
                A.Dashboard
              </Link>
            </li>
          )}
          {!isAutheticated() && (
            <React.Fragment>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/signup")}
                  className="nav-link"
                  to="/signup"
                >
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={currentTab(history, "/signin")}
                  className="nav-link"
                  to="/signin"
                >
                  Signin
                </Link>
              </li>
            </React.Fragment>
          )}

          {isAutheticated() && (
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link text-warning"
                onClick={() => {
                  signout(() => {
                    history.push("/");
                  });
                }}
              >
                Signout
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
              </div>*/
}
