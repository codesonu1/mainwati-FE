import PropTypes from "prop-types";
import Headers from "../components/Headers";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
const Layout = ({ anotherComponent }) => {
  return (
    <div>
      <Headers />
      <NavBar />
      {anotherComponent}
      <Footer />
    </div>
  );
};
Layout.propTypes = {
  anotherComponent: PropTypes.element.isRequired,
};
export default Layout;
