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
        {productsLists.map((ele, i) => {
          return (
            <div
              key={i}
              className="border border-secondery rounded-md hover:bg-primary hover:p-2 hover:text-secondery cursor-pointer "
              data-aos="zoom-in"
              style={{ borderBottomLeftRadius: "50px" }}
            >
              <img src={ele.img} alt="" className="w-full hover:rounded-md" />
              <p className="text-center capitalize py-3 text-xl font-bold">
                {ele.tittle}
              </p>
              <p className="p-3 px-4 justify-self-center">{ele.desc}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const productsLists = [
  {
    img: pipes,
    tittle: "product proccess",
    desc: " Mechanization in all production processes assures conformity to   specifications as well as consistency of production",
  },
  {
    img: tower,
    tittle: "capacity",
    desc: " Tubes & Pipes - 25000 MT/Annum 25,000 MT/annum, Distribution and Transmission LIne Telescopic Poles 4,000 MT/annum",
  },
  {
    img: workers,
    tittle: "factory",
    desc: "  The scope of activity of the company includes both manufacture and  supply in local and international markets.",
  },
  {
    img: equipments,
    tittle: " EQUIPMENTS",
    desc: "  HYDRAULIC SWING SHEAR MACHINE, 3.2M X 12mm Shearing capacities -   Model QC12Y (12X5200)",
  },
];

export default ProductList;
