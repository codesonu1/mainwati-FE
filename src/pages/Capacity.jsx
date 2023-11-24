import { Container } from "@mui/material";
import capacityBanner from "../assets/capacity-banner.jpg";

const Capacity = () => {
  return (
    <div>
      {/* <Container>
        <span classNameName="text-secondery bg-primary uppercase p-2  font-bold  rounded-full  ">
          Capacity
        </span>
        <img
          src={capacityBanner}
          alt=""
          style={{
            borderBottomRightRadius: "70px",
            borderTopLeftRadius: "70px",
          }}
          classNameName="rounded-[5px] my-5"
        />
        <p classNameName="text-secondery text-xl text-justify">
          Mainawati Steel Limited has been set up to penetrate the following
          markets at the mentioned capacities:
        </p>
        <div classNameName="grid md:grid-cols-3 grid-flow-row gap-4   my-[3rem]">
          <div classNameName="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 classNameName="text-secondery text-2xl capitalize hover:text-[black]">
              Tubes & Pipes - 25000 MT/Annum 25,000 MT/annum
            </h1>
          </div>
          <div classNameName="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 classNameName="text-secondery text-2xl capitalize hover:text-[black]">
              Distribution and Transmission LIne Telescopic Poles 4,000 MT/annum
            </h1>
          </div>
          <div classNameName="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 classNameName="text-secondery text-2xl capitalize hover:text-[black]">
              Galvanized Portable Steel Bridges 2,500 MT/annum
            </h1>
          </div>
          <div classNameName="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 classNameName="text-secondery text-2xl capitalize hover:text-[black]">
              Transmission and Distribution Line Fittings & Hardware 3,000
              MT/annum
            </h1>
          </div>
          <div classNameName="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 classNameName="text-secondery text-2xl capitalize hover:text-[black]">
              Screws and Fasteners 1,500 MT/annum
            </h1>
          </div>
          <div classNameName="border border-secondery shadow-lg p-4 rounded-lg hover:bg-secondery cursor-pointer">
            <h1 classNameName="text-secondery text-2xl capitalize hover:text-[black]">
              Steel Structurals for electrical sub-stations and similar works
              3,000 MT/annum
            </h1>
          </div>
        </div>
        <div classNameName="bg-[orange] p-4 -5 rounded-lg">
          <p classNameName="py-3 text-secondery text-xl ">
            Units and Facilities of the Steel Fabrication Plant The Steel
            Fabrication Plant of Mainawati Steel Limited accommodaties the
            factory complex together with ancillary units and facilites as
            listed below:
          </p>
          <div classNameName=" grid md:grid-cols-2 grid-flow-row gap-3">
            <div>
              <ul classNameName="">
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  Covered Factory Complex (housing & main production facilites
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Machine Shop
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Independent Office Complex
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Guard Room & Gate House
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Substation & Generator Room
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Deep Tube-well
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Underground Water Reservoir
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Underground Water Reservoir
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Crane System (for easy handling of raw materials,
                  semi-finished and finished products)
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Raw Material Storage Facility
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Mechanized Trolley Transfer Facility (transfers finished
                  products to Galvanizing and storage yard)
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Mechanized Gantry Crane in the Storage Yard
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Stacking Space for Finished Products
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Steel Pole Testing Bed
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Product Delivery Gangway
                </li>
                <li classNameName="hover:px-2 hover:underline cursor-pointer py-2">
                  {" "}
                  Washroom Building (for workers use only)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container> */}
      <div className="max-w-xl mx-auto text-center">
        <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
          <p className="text-4xl font-semibold tracking-widest text-g uppercase">
            Capacity
          </p>
        </div>
        <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-[white]">
          Mainawati Steel Limited has been set up to penetrate the following
          markets at the mentioned capacities:
        </p>
      </div>
      <div className="py-10 container mx-auto px-5">
        <div className="relative">
          <div
            className="border-r-4 border-[black] absolute h-full top-0"
            style={{ left: "9px" }}
          ></div>
          <ul className="list-none m-0 p-0">
            <li className="mb-5  ">
              <div className="flex group items-center ">
                <div className="bg-primary group-hover:bg-[red] z-10 rounded-full border-4 border-[black]  h-5 w-5">
                  <div className="bg-[black] h-1 w-6 items-center  ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium">
                  <div className="order-1 space-y-2 bg-primary rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-[white] text-2xl">
                      Product
                    </h3>
                    
                    <hr />
                    <p className="text-sm font-medium leading-snug tracking-wide text-secondery text-opacity-100">
                      Tubes & Pipes - 25000 MT/Annum 25,000 MT/annum
                    </p>
                    <p className="text-sm font-medium leading-snug tracking-wide text-secondery text-opacity-100">
                      Transmission and Distribution Line Fittings & Hardware
                      3,000 MT/annum
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-5  ">
              <div className="flex group items-center ">
                <div className="bg-primary group-hover:bg-[red]  z-10 rounded-full border-4 border-black  h-5 w-5">
                  <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium">
                  <div className="order-1 space-y-2 bg-primary rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-[white] text-2xl">
                      Distribution
                    </h3>
                    
                    <hr />
                    <p className="text-sm font-medium leading-snug tracking-wide text-secondery text-opacity-100">
                      Distribution and Transmission LIne Telescopic Poles 4,000
                      MT/annum
                    </p>
                    <p className="text-sm font-medium leading-snug tracking-wide text-secondery text-opacity-100">
                      Screws and Fasteners 1,500 MT/annum
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="mb-5  ">
              <div className="flex group items-center ">
                <div className="bg-primary group-hover:bg-[red]  z-10 rounded-full border-4 border-black  h-5 w-5">
                  <div className="bg-black h-1 w-6 items-center  ml-4 mt-1"></div>
                </div>
                <div className="flex-1 ml-4 z-10 font-medium">
                  <div className="order-1 space-y-2 bg-primary rounded-lg shadow-only transition-ease lg:w-5/12 px-6 py-4">
                    <h3 className="mb-3 font-bold text-[white] text-2xl">
                      Structure
                    </h3>
                     
                    <hr />
                    <p className="text-sm font-medium leading-snug tracking-wide text-secondery text-opacity-100">
                      Galvanized Portable Steel Bridges 2,500 MT/annum
                    </p>
                    <p className="text-sm font-medium leading-snug tracking-wide text-secondery text-opacity-100">
                      Steel Structurals for electrical sub-stations and similar
                      works 3,000 MT/annum
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
<div className="flex   items-center   bg-[white] px-6 md:px-60">
  <div className="space-y-6 border-l-2 border-dashed">
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-blue-500">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-primary">Frontend Development.</h4>
         </div>
    </div>
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primary">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-primary">Graphic Design.</h4>
         </div>
    </div>
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primary">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-primary">Lead Ui/Ux Designer.</h4>
        </div>
    </div>
    <div className="relative w-full">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-primary">
        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
      </svg>
      <div className="ml-6">
        <h4 className="font-bold text-blue-500">Lead Ui/Ux Designer.</h4>
         </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default Capacity;
