import React from 'react'
import { Link } from 'gatsby'
import appleStore from '../img/appStore.png'
import playStore from '../img/playStore.png'
import loadable from "@loadable/component"

const links = [
  'https://www.instagram.com/intcount'
];

const FollowAt = loadable(() => import("react-social-media-follow"));

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container flex-around">
          <div className="navbar-brand logo">
            <a href="/" className="navbar-item" title="Logo">
              <h1>intCount</h1>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img
                  className="fas fa-lg"
                  src={appleStore}
                  alt="Download on the App Store"
                  style={{ width: '3em', height: '1.5em', marginRight: '10px' }}
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.intCount.ae" target="_blank" rel="noopener noreferrer">
                <img
                  className="fas fa-lg"
                  src={playStore}
                  alt="Get it on Google Play"
                  style={{ width: '3em', height: '1.5em' }}
                />
              </a>
            </a>

            <FollowAt iconSize='1' color='black' hoverMove='false' links={links} />
            <div>
            </div>
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
              onKeyDown={() => this.toggleHamburger()}
              role="button" tabIndex="0"
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
