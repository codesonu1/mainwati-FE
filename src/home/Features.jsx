import { Container } from "@mui/material";
import "../index.css";
import CountUp from "react-countup";
const Features = () => {
  return (
    <Container className="bg-[#EEEEEE] my-5 py-[4rem] rounded-md">
      <div className="grid lg:grid-cols-4 grid-flow-row md:grid-cols-4 ">
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            <CountUp end={65} />
          </p>
          <p className="text-black font-bold capitalize feature-mbl">
            Years of Experience
          </p>
        </div>
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            <CountUp end={1000} />+
          </p>
          <p className="text-black font-bold capitalize feature-mbl">
            Million Tons of Steel
          </p>
        </div>
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            <CountUp end={1200} />
          </p>
          <p className="text-black font-bold capitalize feature-mbl">
            Thousand Tons of Steels Per Year
          </p>
        </div>
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            <CountUp end={4300} />+
          </p>
          <p className="text-black font-bold capitalize  feature-mbl">
            Million Litres of SS tank
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Features;
