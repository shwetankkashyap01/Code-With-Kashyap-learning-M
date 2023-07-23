import React, { useEffect } from "react";
import CoursesSection from "../components/CoursesSection";
import Footer from "../components/Footer";
import GreenButton from "../components/GreenButton";
import ListCard from "../components/ListCard";
import Navbar from "../components/Navbar";
// import hero_image from "../images/hero_image.png";
// import seminar_image from "../images/seminar_default.jpg";
import { useStateValue } from "../StateProvider";
import "./home.css";

function Home() {
  const { addToRef, animateCurrentElements } = useStateValue();

  useEffect(() => {
    animateCurrentElements();
  }, []);
  return (
    <>
      <Navbar />
      <main className="container">
        <section className="hero_section">
          <div className="hero_text hidden" ref={addToRef}>
            <h1 className="hero_title">
              Code with Kashyap Tutorial
              <span className="text_yellow_gradient">
                {" "}
                Coding Skills With
                Certificates
              </span>
              <span className="text_pink"></span>
            </h1>
            <h2 className="hero_description"></h2>
          </div>
          <div className="hero_image">
            {/* <img src={hero_image} alt="Hero Image" /> */}
          </div>
        </section>
        <section>
          <CoursesSection />
        </section>
        <section className="mt-5">
          <h2 className="home_title"></h2>
          <div className="services">
            <div ref={addToRef} className="box1 hidden"></div>
            <div ref={addToRef} className="box2 hidden"></div>
            <div ref={addToRef} className="box3 hidden"></div>
            <div ref={addToRef} className="box4 hidden"></div>
          </div>
        </section>
        <section className="mt-5 ">
          {/* <h2 className="home_title">
             <span className="text_yellow_gradient"></span> 
          </h2> */}
          <div className="seminar_card">
            <div className="seminar_info">
              <h1 className="home_title"></h1>
              <div className="seminar_list_cards hidden" ref={addToRef}>
                <ListCard />
                <ListCard />
              </div>
              <div className="seminar_button hidden" ref={addToRef}>
                <GreenButton link="#" text="Join Seminar" />
              </div>
            </div>
            <div className="seminar_image">
              {/* <img src={seminar_image} alt="seminar image" srcset="" /> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
