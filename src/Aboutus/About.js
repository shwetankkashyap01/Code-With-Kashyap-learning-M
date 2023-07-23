import React from "react";
import Footer from "../components/Footer";
import GreenButton from "../components/GreenButton";
import Navbar from "../components/Navbar";
import "./about.css";
function About() {
  return (
    <>
      <Navbar />
      <main>
        <section className="container">
          <h2 className="home_title"></h2>
          <p className="aboutus_desc">
        
          </p>
          <div className="aboutus_button">
            <GreenButton link="/courses" text="Buy Course" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default About;
