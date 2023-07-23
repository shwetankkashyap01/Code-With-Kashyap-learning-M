import React from 'react'
import CoursesSection from '../components/CoursesSection';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Courses() {
  return (
    <>
      <Navbar />
      <main>
        <section className="mt-5">
          <CoursesSection />
        </section>
        <section className="mt-5">
          <CoursesSection />
        </section>
        <section className="mt-5">
          <CoursesSection />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Courses