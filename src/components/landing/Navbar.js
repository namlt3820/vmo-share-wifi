/* eslint-disable func-names */
import React, { Component } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import logo from './assets/images/logo.png';

const highlightScrollspy = () => {
  const SECTIONS = ['home', 'features', 'aboutus', 'pricing', 'contact'];
  const highlight = SECTIONS.find(
    section => document.getElementById(section).getBoundingClientRect().top >= 0
  );

  $('#navbar-landing li a').css({
    borderBottom: 'none'
  });

  $(`#navbar-landing li a[href="#${highlight}"]`).css({
    borderBottom: '3px solid #49a1fc'
  });
};

class Navbar extends Component {
  componentDidMount() {
    $(window).one('load', highlightScrollspy);

    window.addEventListener('scroll', this.handleScroll);

    $(document).click(function() {
      $(document).mouseup(function(e) {
        const container = $('#navbar-landing');

        if (
          !container.is(e.target) &&
          container.has(e.target).length === 0 &&
          $(document).width() < 385
        ) {
          $('.navbar-collapse').attr('class', 'navbar-collapse collapse');
        }
      });
    });

    $('.nav-link.scrollspy:not(".always")').click(function() {
      const divId = $(this).attr('href');
      $('html, body').animate(
        {
          scrollTop: $(divId).offset().top - 78
        },
        200,
        highlightScrollspy
      );
      if ($(document).width() < 385) {
        $('.navbar-toggler-icon').click();
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    $('.nav-link.scrollspy').off('click');
  }

  handleScroll = () => {
    $('#navbar-landing li a').css({
      borderBottom: 'none'
    });

    if ($(document).width() > 385) {
      if (window.scrollY > 20) {
        $('#navbar-landing').css({
          boxShadow: '1px 1px 12px 0px rgba(50, 50, 50, 0.35)',
          backgroundColor: 'white'
        });
        $('#navbar-landing a').css('color', 'black');
      } else {
        $('#navbar-landing').css({
          boxShadow: 'none',
          backgroundColor: 'transparent'
        });
        $('#navbar-landing a').css('color', 'white');
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
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="logo" />
            </Link>
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
                  <a className="nav-link scrollspy" href="#home">
                    Home
                  </a>
                </li>
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
                <li className="nav-item">
                  <Link to="/login" className="nav-link scrollspy always">
                    Login/Signup
                  </Link>
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
    -webkit-box-shadow: 1px 1px 12px 0px rgba(50, 50, 50, 0.35);
    -moz-box-shadow: 1px 1px 12px 0px rgba(50, 50, 50, 0.35);
    box-shadow: 1px 1px 12px 0px rgba(50, 50, 50, 0.35);

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      background: transparent;
      box-shadow: none;
    }

    > div {
      @media only screen and (min-width: ${props =>
          props.theme.breakpoints.xxl}) {
        max-width: 1400px;
      }
    }
  }

  li {
    margin-right: 1rem;
    margin-bottom: 0.25rem;
    width: 49%;

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      margin-bottom: 0;
      width: auto;
    }
  }

  li > a.always {
    border-radius: 0.25rem;
    border: 1px solid #49a1fc;
    color: white !important;
    background-color: #49a1fc;
  }

  a.scrollspy.nav-link {
    color: black;
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem 0.6rem 0.8rem;
    cursor: pointer;

    &.active {
      color: #49a1fc !important;
      border-bottom: 3px solid #49a1fc !important;
    }

    @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
      color: white;
    }
  }
`;

export { StyledNavbar as Navbar };
