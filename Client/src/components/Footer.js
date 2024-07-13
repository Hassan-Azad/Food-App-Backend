import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className=" bg-success">
      <footer className="py-5 mx-3">
        <div className="container row">
          <div className="col-6 col-md-2 mb-4">
            <h5>Section</h5>
            <ul className="nav flex-column ">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-2 mb-4">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Home
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Features
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  Pricing
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-white">
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-6 col-md-4 offset-md-1 mb-4">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of whats new and exciting from us.</p>
              <div className="d-flex w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Email address"
                />
                <button className="btn btn-primary" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-md-row justify-content-between py-4 my-4 border-top">
          <p  className="text-center text-md-start">© 2024 <span className="fs-5">Hassan Azad</span>, Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
