import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <div id="services"><Info /></div>
      <div id="about"><About /></div>
      <div id="book-appointment"><BookAppointment /></div>
      <div id="reviews"><Reviews /></div>
      <div id="doctors"><Doctors /></div>
      <Footer />
    </div>
  );
}

export default Home;
