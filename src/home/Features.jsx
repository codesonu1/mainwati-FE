import { Container } from "@mui/material";
import "../index.css";

const Features = () => {
  return (
    <Container className="bg-[#EEEEEE] my-5 py-[4rem] rounded-md">
      <div className="grid lg:grid-cols-4 grid-flow-row md:grid-cols-4 ">
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            65
          </p>
          <p className="text-black font-bold capitalize feature-mbl">
            Years of Experience
          </p>
        </div>
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            7.8
          </p>
          <p className="text-black font-bold capitalize feature-mbl">
            Million Tons of Steel
          </p>
        </div>
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            12
          </p>
          <p className="text-black font-bold capitalize feature-mbl">
            Thousand Tons of Steels Per Year
          </p>
        </div>
        <div className="feature-mb-head">
          <p className="text-5xl font-semibold text-primary feature-mbl-tit">
            43
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
