import Slideshow from "../components/SlideShow";
import AboutUs from "./AboutUs";
import ExportCompany from "./ExportCompany";
import Features from "./Features";
import Product from "./Product";
import ProductList from "./ProductList";

const index = () => {
  return (
    <div>
      <Slideshow />
      <Features />
      <Product />
      <AboutUs />
      <ProductList />
      <ExportCompany />
    </div>
  );
};

export default index;
