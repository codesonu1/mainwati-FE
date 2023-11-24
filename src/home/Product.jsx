import { Container } from "@mui/material";
import brige from "../assets/bridge.jpg";
import plate from "../assets/plate.png";
import steel from "../assets/rod.png";
import telescopicpole from "../assets/telescopicpole.png";
import prefabricatedbuilding from "../assets/prefabricatedbuilding.jpg";
const Product = () => {
  return (
    <div className="my-[3rem] bg-primary rounded-md shadow-md  pt-[2rem] ">
      <Container>
        {" "}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-flow-row py-[4rem] text-[white]">
          <div className="flex gap-2 my-[4rem]" data-aos="zoom-in-right">
            <img
              src={plate}
              alt=""
              className="w-[100px] h-[100px] rounded-full border border-[gray] p-1"
            />
            <div className="mx-3 ">
              <h1 className="text-ont-bold   hover:text-[white] text-[black]    cursor-pointer uppercase">
                MS plate
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
              <h1 className="text-xl py-2  uppercase hover:text-[white] text-[black]    cursor-pointer">
                pipe
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
              <h1 className="text-xl py-2  uppercase hover:text-[white] text-[black]    cursor-pointer">
                Steel tubes
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
              <h1 className="text-xl py-2  uppercase hover:text-[white] text-[black]    cursor-pointer">
                telecom towers
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
              <h1 className="text-xl py-2  uppercase hover:text-[white] text-[black]    cursor-pointer">
                PEB Structure
              </h1>
              <p>
                Stainless steel sheet | Galvanized sheet | Silicon steel plate |
                Carbon steel plate
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
