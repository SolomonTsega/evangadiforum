import React from 'react'
import './footer.css'
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import logo from '../../assets/evangadi-logo-footer-f73bca57.png'

const Footer = () => {
  return (
    <footer className="footer_class mt-5">
      <div className="container px-sm-4">
        <div className="row">
          <div className="col-12 col-md-4">
            <div className="logo ">
              <img src={logo} alt="" />
            </div>
            <div className="d-flex ">
              <div className="social">
                <a
                  href=""
                  style={{
                    backgroundColor: "#3B455A",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "inline-block",
                    color: "white",
                  }}
                >
                  <BiLogoFacebookCircle size={30} />
                </a>
              </div>
              <div className="social">
                <a
                  href=""
                  style={{
                    backgroundColor: "#3B455A",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "inline-block",
                  }}
                >
                  <AiFillInstagram size={30} style={{ color: "white" }} />
                </a>
              </div>
              <div className="social">
                <a
                  href=""
                  style={{
                    backgroundColor: "#3B455A",
                    borderRadius: "50%",
                    padding: "10px",
                    display: "inline-block",
                  }}
                >
                  <AiFillYoutube size={30} style={{ color: "white" }} />
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 footer-links">
            <h5>Useful Link</h5>
            <ul className="row list-unstyled">
              <li className="ps-3 small">
                <a href="" className="text-decoration-none">
                  How it works
                </a>
              </li>
              <li className="ps-3 small">
                <a href="" className="text-decoration-none">
                  Terms of Service
                </a>
              </li>
              <li className="ps-3 small">
                <a href="" className="text-decoration-none">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-4 footer-links">
            <h5>Contact Info</h5>
            <ul className="row list-unstyled">
              <li className="ps-3 small">Evangadi Networks</li>
              <li className="ps-3 small">support@evangadi.com</li>
              <li className="ps-3 small">+1-202-386-2702</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
