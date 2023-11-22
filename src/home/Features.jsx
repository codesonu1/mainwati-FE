import { Container } from "@mui/material";
import "../index.css";
import CountUp from "react-countup";
const Features = () => {
  return (
    <div className="bg-[#2782C2] my-5 py-[4rem] rounded-md">
      <Container>
        <div className="grid lg:grid-cols-4 grid-flow-row md:grid-cols-4 ">
          <div className="feature-mb-head">
            <p className="text-5xl font-semibold text-[white] feature-mbl-tit py-2">
              <CountUp end={65} />
            </p>
            <p className="text-black font-bold capitalize feature-mbl text-[white]">
              Years of Experience
            </p>
          </div>
          <div className="feature-mb-head">
            <p className="text-5xl font-semibold text-[white] feature-mbl-tit py-2">
              <CountUp end={1000} />+
            </p>
            <p className="text-black font-bold capitalize feature-mbl text-[white]">
              Million Tons of Steel
            </p>
          </div>
          <div className="feature-mb-head">
            <p className="text-5xl font-semibold text-[white] feature-mbl-tit py-2">
              <CountUp end={1200} />
            </p>
            <p className="text-black font-bold capitalize feature-mbl text-[white]">
              Thousand Tons of Steels Per Year
            </p>
          </div>
          <div className="feature-mb-head">
            <p className="text-5xl font-semibold text-[white] feature-mbl-tit py-2">
              <CountUp end={4300} />+
            </p>
            <p className="text-black font-bold capitalize  feature-mbl text-[white]">
              Million Litres of SS tank
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
