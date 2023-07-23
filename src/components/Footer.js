import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer-distributed">
        <div className="container">
          <div className="footer-left">
            <h3>Code with Kashyap</h3>

            <p className="footer-links">
              <a href="#" className="link-1">
                News
              </a>

              <a href="#">Terms</a>

              <a href="#">Privacy Policy</a>

              <a href="#">Get the App</a>

              <a href="#">Blog</a>

              <a href="#">Carrer</a>
            </p>

            <p className="footer-company-name">
              Code with Kashyap @skill up 2023
            </p>
          </div>

          <div className="footer-center">
            <div>
              <i className="fa fa-map-marker"></i>
              <p>
                <span>Street 34, DLX Apartment</span> Nehru Nagar, Delhi
              </p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+62XXXXXXXX</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p>
                <a href="mailto:techsupport@company.com">
                  skillup@kashyap.ac.in
                </a>
              </p>
            </div>
          </div>

          <div className="footer-right">
            <p style={{ color: "inherit" }} className="footer-company-about">
              <span>Programming is learned by writing programs - Kashyap</span>
              Discover a range of free learning content designed to help your
              business or in your career.Demonstrating your knowledge is a
              critical part of learning.Code with Kashyap courses and programs
              provide a space to practice with quizzes, open response
              assessments, virtual environments, and more.
            </p>

            <div className="footer-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
