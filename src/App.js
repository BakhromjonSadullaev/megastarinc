import "./App.css";
import About from "./Components/About/About";
import CareerDivider from "./Components/CareerDivider/CareerDivider";
import Count from "./Components/CountUp/CountUp";
import Footer from "./Components/Footer/Footer";
import HomeBanner from "./Components/HomeBanner/HomeBanner";
import Questions from "./Components/Questions/Questions";
import Services from "./Components/Services/Services";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <HomeBanner />
      <About />
      <Services />
      <Count />
      <Testimonials />
      <Questions />
      <CareerDivider />
      <Footer />
    </div>
  );
}

export default App;
