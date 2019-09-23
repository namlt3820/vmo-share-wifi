import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from './assets/images/logo.png';

class Navbar extends Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.getElementById('navbar-landing').style.backgroundColor = 'white';
      document.getElementById('navbar-landing').style.webkitBoxShadow =
        '1px 1px 12px 0px rgba(50, 50, 50, 0.35)';
      document.getElementById('navbar-landing').style.mozBoxShadow =
        '1px 1px 12px 0px rgba(50, 50, 50, 0.35)';
      document.getElementById('navbar-landing').style.boxShadow =
        '1px 1px 12px 0px rgba(50, 50, 50, 0.35)';
      document.querySelectorAll('#navbar-landing a').forEach(element => {
        element.style.color = 'black';
      });
    } else {
      document.getElementById('navbar-landing').style.backgroundColor =
        'transparent';
      document.getElementById('navbar-landing').style.webkitBoxShadow = 'none';
      document.getElementById('navbar-landing').style.mozBoxShadow = 'none';
      document.getElementById('navbar-landing').style.boxShadow = 'none';

      document.querySelectorAll('#navbar-landing a').forEach(element => {
        element.style.color = 'white';
      });
    }
  };

  render() {
    return (
      <div className={this.props.className} ref={this.navbarRef}>
        <nav className="navbar navbar-expand-lg fixed-top" id="navbar-landing">
          <div className="container">
            <a className="navbar-brand" href="/landing">
              <img src={logo} alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-landing-content"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbar-landing-content"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const StyledNavbar = styled(Navbar)`
  background-color: transparent;

  img {
    max-height: 3rem;
    width: auto;
    padding: 5px 0;
  }

  nav {
    background-color: transparent;
  }

  a {
    color: white;
    font-size: 1.2rem;

    &.active {
      color: #49a1fc !important;
    }
  }
`;

export { StyledNavbar as Navbar };
