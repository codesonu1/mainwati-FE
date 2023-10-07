import PropTypes from "prop-types";
import Headers from "../components/Headers";
import NavBar from "../components/NavBar";
const Layout = ({ anotherComponent }) => {
  return (
    <div>
      <Headers />
      <NavBar />
      {anotherComponent}
    </div>
  );
};
Layout.propTypes = {
  anotherComponent: PropTypes.element.isRequired,
};
export default Layout;
