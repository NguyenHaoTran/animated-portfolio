import Test from "./Test";
import "./app.scss";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test/> */}
    </>
  );
};

export default App;

// 1:19:58
