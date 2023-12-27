import React from "react";
import "./Header.css";
export const Header = () => {
  return (
    <div className="bg-black h-10 p-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 icon">
            <i className="fa-solid fa-music"></i>
            <h5>music</h5>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 nav">
            <nav className="navbar navbar-expand-lg">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active ps-5">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item ps-4">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item ps-4">
                    <a className="nav-link" href="#">
                      Services
                    </a>
                  </li>
                  <li className="nav-item ps-4">
                    <a className="nav-link" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
