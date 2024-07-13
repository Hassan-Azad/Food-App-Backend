import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from "../screens/Cart";
import { useCart } from '../components/ContextReducer';

// Import Bootstrap CSS and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Navbar() {
  const [cartView, setCartView] = useState(false);
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  let data = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <a className="navbar-brand fs-1 fst-italic" href="#">GoFood</a>
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded={!isNavCollapsed} 
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2">
            <li className="nav-item">
              <NavLink className="nav-link fs-5" aria-current="page" exact to="/">Home</NavLink>
            </li>
            {
              (localStorage.getItem("authToken")) &&
                <li className="nav-item">
                  <NavLink className="nav-link fs-5" aria-current="page" to="/myOrder">My Orders</NavLink>
                </li>
            }
          </ul>

          {
            (!localStorage.getItem("authToken")) ? (
              <div className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>
              </div>
            ) : (
              <div>
                <div className="btn bg-white text-success mx-1" onClick={() => { setCartView(true) }}>
                  My Cart {""}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {
                  cartView ? <Modal onClose={() => { setCartView(false) }}><Cart /></Modal> : null
                }
                <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>
                  Logout
                </div>
              </div>
            )
          }
        </div>
      </div>
    </nav>
  );
}
