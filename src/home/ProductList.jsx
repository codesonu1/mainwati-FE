import { Container } from "@mui/material";
import pipes from "../assets/pipes.png";
import equipments from "../assets/equipments.png";
import workers from "../assets/workers.png";
import tower from "../assets/tower.png";

const ProductList = () => {
  return (
    <Container>
      <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full ">
        explore us
      </span>
      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-flow-row my-2 gap-3">
        <div
          className="border border-primary rounded-md hover:bg-primary hover:p-2 hover:text-secondery cursor-pointer "
          data-aos="zoom-in"
        >
          <img src={pipes} alt="" className="w-full hover:rounded-md" />
          <p className="text-center capitalize py-3 text-xl font-bold">
            product proccess
          </p>
          <p className="p-2 justify-self-center">
            Mechanization in all production processes assures conformity to
            specifications as well as consistency of production
          </p>
        </div>
        <div
          className="border border-primary rounded-md hover:bg-primary hover:p-2 hover:text-secondery cursor-pointer "
          data-aos="zoom-in"
        >
          <img src={tower} alt="" className="w-full hover:rounded-md" />
          <p className="text-center capitalize py-3 text-xl font-bold">
            CAPACITY
          </p>
          <p className="p-2 justify-self-center">
            Tubes & Pipes - 25000 MT/Annum 25,000 MT/annum, Distribution and
            Transmission LIne Telescopic Poles 4,000 MT/annum
          </p>
        </div>
        <div
          className="border border-primary rounded-md hover:bg-primary hover:p-2 hover:text-secondery cursor-pointer "
          data-aos="zoom-in"
        >
          <img src={workers} alt="" className="w-full hover:rounded-md" />
          <p className="text-center capitalize py-3 text-xl font-bold">
            FACTORY
          </p>
          <p className="p-2 justify-self-center">
            The scope of activity of the company includes both manufacture and
            supply in local and international markets.
          </p>
        </div>
        <div
          className="border border-primary rounded-md hover:bg-primary hover:p-2 hover:text-secondery cursor-pointer "
          data-aos="zoom-in"
        >
          <img src={equipments} alt="" className="w-full hover:rounded-md" />
          <p className="text-center capitalize py-3 text-xl font-bold">
            EQUIPMENTS
          </p>
          <p className="p-2 justify-self-center">
            HYDRAULIC SWING SHEAR MACHINE, 3.2M X 12mm Shearing capacities -
            Model QC12Y (12X5200)
          </p>
        </div>
      </div>
    </Container>
  );
};

export default ProductList;
