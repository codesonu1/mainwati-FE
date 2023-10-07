import { Container } from "@mui/material";

const Features = () => {
  return (
    <Container className="bg-[#EEEEEE] my-5 py-5 rounded-md">
      <div className="grid lg:grid-cols-4 grid-flow-row md:grid-cols-4 ">
        <div>
          <p className="text-5xl font-semibold text-primary">65</p>
          <p className="text-black font-bold capitalize ">
            Years of Experience
          </p>
        </div>
        <div>
          <p className="text-5xl font-semibold text-primary">7.8</p>
          <p className="text-black font-bold capitalize ">
            Million Tons of Steel
          </p>
        </div>
        <div>
          <p className="text-5xl font-semibold text-primary">12</p>
          <p className="text-black font-bold capitalize ">
            Thousand Tons of Steels Per Year
          </p>
        </div>
        <div>
          <p className="text-5xl font-semibold text-primary">43</p>
          <p className="text-black font-bold capitalize  ">
            Million Litres of SS tank
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Features;
