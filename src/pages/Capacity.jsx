import { Container } from "@mui/material";
import capacityBanner from "../assets/capacity-banner.jpg";

const Capacity = () => {
  return (
    <div>
      <Container>
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full  ">
          Capacity
        </span>
        <img
          src={capacityBanner}
          alt=""
          style={{
            borderBottomRightRadius: "70px",
            borderTopLeftRadius: "70px",
          }}
          className="rounded-[5px] my-5"
        />
        <p className="text-secondery text-xl text-justify">
          Mainawati Steel Limited has been set up to penetrate the following
          markets at the mentioned capacities:
        </p>
        <div className="grid grid-cols-3 grid-flow-row gap-4   my-[3rem]">
          <div className="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 className="text-secondery text-2xl capitalize hover:text-[black]">
              Tubes & Pipes - 25000 MT/Annum 25,000 MT/annum
            </h1>
          </div>
          <div className="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 className="text-secondery text-2xl capitalize hover:text-[black]">
              Distribution and Transmission LIne Telescopic Poles 4,000 MT/annum
            </h1>
          </div>
          <div className="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 className="text-secondery text-2xl capitalize hover:text-[black]">
              Galvanized Portable Steel Bridges 2,500 MT/annum
            </h1>
          </div>
          <div className="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 className="text-secondery text-2xl capitalize hover:text-[black]">
              Transmission and Distribution Line Fittings & Hardware 3,000
              MT/annum
            </h1>
          </div>
          <div className="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 className="text-secondery text-2xl capitalize hover:text-[black]">
              Screws and Fasteners 1,500 MT/annum
            </h1>
          </div>
          <div className="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 className="text-secondery text-2xl capitalize hover:text-[black]">
              Steel Structurals for electrical sub-stations and similar works
              3,000 MT/annum
            </h1>
          </div>
        </div>
        <div className="bg-[orange] p-4 -5 rounded-lg">
          <p className="py-3 text-secondery text-xl ">
            Units and Facilities of the Steel Fabrication Plant The Steel
            Fabrication Plant of Mainawati Steel Limited accommodaties the
            factory complex together with ancillary units and facilites as
            listed below:
          </p>
          <div className=" grid grid-cols-2 grid-flow-row gap-3">
            <div>
              <ul className="">
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  Covered Factory Complex (housing & main production facilites
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Machine Shop
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Independent Office Complex
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Guard Room & Gate House
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Substation & Generator Room
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Deep Tube-well
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Underground Water Reservoir
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Underground Water Reservoir
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Crane System (for easy handling of raw materials,
                  semi-finished and finished products)
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Raw Material Storage Facility
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Mechanized Trolley Transfer Facility (transfers finished
                  products to Galvanizing and storage yard)
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Mechanized Gantry Crane in the Storage Yard
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Stacking Space for Finished Products
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Steel Pole Testing Bed
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Product Delivery Gangway
                </li>
                <li className="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Washroom Building (for workers use only)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Capacity;
