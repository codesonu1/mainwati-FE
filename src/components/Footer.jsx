import { Container } from "@mui/material";
import "../index.css";

const Footer = () => {
  return (
    <div className="footer">
      <p className="text-3xl font-bold text-center pt-[4rem] text-secondery uppercase">
        {" "}
        Get in touch,
      </p>
      <Container className="mt-[2rem]">
        <div className="gap-3 grid lg:grid-cols-3 grid-flow-row md:grid-cols-3">
          <div>
            <h1>OFFICE ADDRESS</h1>
            <p>
              The Village 6th Floor, Trade Tower Nepal, Thapathali, Kathmandu,
              Nepal
            </p>
          </div>
          <div>
            <p>Contact us</p>
          </div>
          <div>Office hours</div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
