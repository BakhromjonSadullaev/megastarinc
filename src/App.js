import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./Components/About/About";
import CareerDivider from "./Components/CareerDivider/CareerDivider";
import Count from "./Components/CountUp/CountUp";
import Footer from "./Components/Footer/Footer";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import Questions from "./Components/Questions/Questions";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Components/ContactUs/ContactUs";
import Careers from "./Pages/Careers";
import LeaseToPurchase from "./Pages/LeaseToPurchase";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/lease-to-purchase">
            <LeaseToPurchase />
            <Footer />
          </Route>
          <Route path="/careers">
            <Careers />
            <Footer />
          </Route>
          <Route path="/about-us">
            <AboutUs />
            <Footer />
          </Route>
          <Route path="/">
            <HomeBanner />
            <About />
            <Services />
            <Count />
            <Testimonials />
            <ContactUs />
            <Questions />
            <CareerDivider />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
