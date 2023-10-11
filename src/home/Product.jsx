import { Container } from "@mui/material";
import brige from "../assets/bridge.jpg";
import plate from "../assets/plate.jpg";
import steel from "../assets/steel.jpeg";
import telescopicpole from "../assets/telescopicpole.png";
import prefabricatedbuilding from "../assets/prefabricatedbuilding.jpg";
const Product = () => {
  return (
    <Container className="my-[3rem] bg-secondery rounded-md shadow-md  pt-[2rem] ">
      <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full mt-[2rem] ">
        features
      </span>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row py-[4rem]">
        <div className="flex gap-2 my-[4rem]" data-aos="zoom-in-right">
          <img
            src={plate}
            alt=""
            className="w-[100px] h-[100px] rounded-full border border-[gray] p-1"
          />
          <div className="mx-3">
            <h1 className="text-xl py-2 font-bold capitalize hover:text-[orange] cursor-pointer">
              Steel plate
            </h1>
            <p>
              Stainless steel sheet | Galvanized sheet | Silicon steel plate |
              Carbon steel plate
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-[4rem]" data-aos="zoom-in-right">
          <img
            src={brige}
            alt=""
            className="w-[100px] h-[100px] rounded-full border border-[gray] p-1"
          />
          <div className="mx-3">
            <h1 className="text-xl py-2 font-bold capitalize hover:text-[orange] cursor-pointer">
              Steel bridge
            </h1>
            <p>
              Stainless steel sheet | Galvanized sheet | Silicon steel plate |
              Carbon steel plate
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-[4rem]" data-aos="zoom-in-right">
          <img
            src={steel}
            alt=""
            className="w-[100px] h-[100px] rounded-full border border-[gray] p-1"
          />
          <div className="mx-3">
            <h1 className="text-xl py-2 font-bold capitalize hover:text-[orange] cursor-pointer">
              Steel
            </h1>
            <p>
              Stainless steel sheet | Galvanized sheet | Silicon steel plate |
              Carbon steel plate
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-[4rem]" data-aos="zoom-in-right">
          <img
            src={telescopicpole}
            alt=""
            className="w-[100px] h-[100px] rounded-full border border-[gray] p-1"
          />
          <div className="mx-3">
            <h1 className="text-xl py-2 font-bold capitalize hover:text-[orange] cursor-pointer">
              tele scopicpole
            </h1>
            <p>
              Stainless steel sheet | Galvanized sheet | Silicon steel plate |
              Carbon steel plate
            </p>
          </div>
        </div>
        <div className="flex gap-2 my-[4rem]" data-aos="zoom-in-right">
          <img
            src={prefabricatedbuilding}
            alt=""
            className="w-[100px] h-[100px] rounded-full border border-[gray] p-1"
          />
          <div className="mx-3">
            <h1 className="text-xl py-2 font-bold capitalize hover:text-[orange] cursor-pointer">
              prefabricate dbuilding
            </h1>
            <p>
              Stainless steel sheet | Galvanized sheet | Silicon steel plate |
              Carbon steel plate
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Product;
