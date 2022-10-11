import React from "react";
import Header from "./Header";
import Image from "./Image";
import { SliderData } from "./SliderData";
import Sertificates from "./Sertificates";
import Consultation from "./Consultation";
import Marafon from "./Marafon";
import Discount from "./Discount";
import Kurs from "./Kurs";
import Youtube from "./Youtube";
import Footer from "./Footer";

function App() {
  return (
    <main className="main">
      <Header />
      <section className="main-content">
        <section className="main-image">
          <Image />
        </section>
        <section className="buttons-section">
          <Sertificates slides={SliderData} />
          <Consultation />
          <Marafon />
          <Kurs />
          <Discount />
          <Youtube />
        </section>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
