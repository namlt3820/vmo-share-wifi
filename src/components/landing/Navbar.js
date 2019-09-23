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
    if (window.outerWidth > 375) {
      if (window.scrollY > 20) {
        const navbarStyle = document.getElementById('navbar-landing').style;
        navbarStyle.backgroundColor = 'white';
        navbarStyle.webkitBoxShadow = '1px 1px 12px 0px rgba(50, 50, 50, 0.35)';
        navbarStyle.mozBoxShadow = '1px 1px 12px 0px rgba(50, 50, 50, 0.35)';
        navbarStyle.boxShadow = '1px 1px 12px 0px rgba(50, 50, 50, 0.35)';
        document.querySelectorAll('#navbar-landing a').forEach(element => {
          element.style.color = 'black';
        });
      } else {
        const navbarStyle = document.getElementById('navbar-landing').style;
        navbarStyle.backgroundColor = 'transparent';
        navbarStyle.webkitBoxShadow = 'none';
        navbarStyle.mozBoxShadow = 'none';
        navbarStyle.boxShadow = 'none';
        document.querySelectorAll('#navbar-landing a').forEach(element => {
          element.style.color = 'white';
        });
      }
    }
  };

  render() {
    return (
      <div className={this.props.className} ref={this.navbarRef}>
        <nav
          className="navbar navbar-expand-lg fixed-top navbar-light"
          id="navbar-landing"
        >
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
                  <a className="nav-link scrollspy" href="#features">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollspy" href="#aboutus">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollspy" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link scrollspy" href="#contact">
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
    background-color: white;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      background: transparent;
    }
  }

  a.scrollspy.nav-link {
    color: black;
    font-size: 1.2rem;

    &.active {
      color: #49a1fc !important;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      color: white;
    }
  }
`;

export { StyledNavbar as Navbar };
