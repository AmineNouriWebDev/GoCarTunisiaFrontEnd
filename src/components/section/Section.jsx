import Carouselle from "./components/Carouselle";
import Contact from "./components/Contact";
import Faq from "./components/Faq";
import RentingProcess from "./components/RentingProcess";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import "./section.css";

export default function Section() {
  return (
    <div>
      <RentingProcess />
      <Carouselle />
      <Testimonial />
      <Services />
      <Faq />
      <Contact />
    </div>
  );
}
