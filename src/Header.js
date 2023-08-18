import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="tm-header" id="tm-header">
        <div className="tm-header-wrapper">
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="tm-site-header">
            <div className="mb-3 mx-auto tm-site-logo">
              <i className="fas fa-times fa-2x"></i>
            </div>
            <h1 className="text-center">eMall</h1>
          </div>
          <nav className="tm-nav" id="tm-nav">
            <ul>
              <li className="tm-nav-item">
                <Link to="/" className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Home
                </Link>
              </li>

              <li className="tm-nav-item">
                <Link to="/Catagory" className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Catagory
                </Link>
              </li>

              <li className="tm-nav-item">
                <Link to="/Brand" className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Brand
                </Link>
              </li>

              <li className="tm-nav-item">
                <Link to="/Product" className="tm-nav-link">
                  <i className="fas fa-home"></i>
                  Products
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}
