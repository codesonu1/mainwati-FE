import Slideshow from "../components/SlideShow";
import AboutUs from "./AboutUs";
import ExportCompany from "./ExportCompany";
import Features from "./Features";
import Product from "./Product";
import ProductList from "./ProductList";
import Testimonial from "./Testimonial.jsx";
import VideoCarousel from "./VideoCarousel.jsx";

const index = () => {
  return (
    <div>
      <Slideshow />
      <Features />
      <AboutUs />
      <Product />
      <VideoCarousel />
      <ProductList />
      <Testimonial />
      <ExportCompany />
    </div>
  );
};

export default index;
