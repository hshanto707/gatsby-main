import React from 'react'
import { Link } from 'gatsby'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import youtube from '../img/social/youtube.svg'
import github from '../img/social/github.svg'
const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        {/* <div className="content has-text-centered">
          <img
            src={logo}
            alt="Kaldi"
            style={{ width: '14em', height: '10em' }}
          />
        </div> */}
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="has-background-black has-text-white-ter">
            <div style={{ maxWidth: '80vw', margin: '0 auto' }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/privacy" className="navbar-item">
                      Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/terms">
                      Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <a
                        className="navbar-item"
                        href="https://intcount.com/blog/2023-03-10-intCount%20Mobile%20Application/"
                      >
                      Business Mobile Application
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/about">
                      Know More about Us
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                      Contact
                      </Link>
                      <li>
                      <Link className="navbar-item" href="https://docs.google.com/forms/d/e/1FAIpQLSeYfgHRgo1qc_oEGmfnRAhGV2poMl1Ep1RB4DJKkNPXXUbZkA/viewform">
                      Sign Up
                      </Link>
                    </li>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" target="_blank" rel="noreferrer" href="https://www.facebook.com/intcount">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="twitter" target="_blank" rel="noreferrer" href="https://twitter.com/intcount7">
                  <img
                    className="fas fa-lg"
                    src={twitter}
                    alt="Twitter"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/intcount/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="youtube" target="_blank" rel="noreferrer" href="https://youtube.com/@intcount">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
                <a title="github" target="_blank" rel="noreferrer" href="https://github.com/intCount">
                  <img
                    src={github}
                    alt="Github"
                    style={{ width: '1em', height: '1em' }}
                  />
                </a>
              </div>
            </div>
          </div>
          <p style={{paddingBottom:'1em', color:'#7c7c7c'}}>Copyright©intcount.com</p>
        </div>
      </footer>
    )
  }
}

export default Footer
