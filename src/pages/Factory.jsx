import { Container } from "@mui/material";
import factoryBanner from "../assets/factory-banner.jpg";
import img2 from "../assets/img2.png";
import slide1 from "../assets/slide1.png";

const Factory = () => {
  return (
    <div>
      {/* <Container>
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full mt-[2rem] ">
          factory
        </span>
        <div className="my-3">
          <img src={factoryBanner} alt="" className="rounded-lg"/>
          <div className="grid md:grid-cols-2 grid-flow-row gap-3">
            <div>
              <p className="text-secondery text-justify p-3">
                The factory of Mainawati Steel Industries Pvt. Ltd. is located
                on its own premises in Sunsari. The scope of activity of the
                company includes both manufacture and supply in local and
                international markets.
              </p>
              <p className="text-secondery text-justify p-3">
                Mainawati Steel Industries Pvt. Ltd. maintains a Quality
                Management System (QMS) with a controlled document Quality
                Manual. The QMS is reviewed from time to time to ensure
                suitability and continual improvement. Mainawati Steel
                Industries Pvt. Ltd. has total manpower strength of 544 in it’s
                8 departments.
              </p>
              <img src={img2} alt="" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-secondery text-justify p-3">
                The Steel Fabrication Plant of Mainawati Steel Industries Pvt.
                Ltd. is an entirely covered manufacturing facilty and may be the
                only such in the country. All units of the production line are
                housed under one roof measuring about 80,000 sqf. The plant is
                most modern with state-of-the-art machinery, overhead travelling
                cranes and mechanized trolley systems. The accent of the plant
                is on mechanization in order to achieve the highest degree of
                efficiency and accuracy.
              </p>
              <p className="text-secondery text-justify p-3">
                The main production complex comprises of seven sheds. Three
                sheds are dedicated for manufacturing Telescropic Steel Poles,
                Telecom Tower, Steel Bridges and other steel items. One shed is
                dedicated for storing raw materials; three are dedicated for
                manufacturing distribution line hardware and pole fittings.
                Apart from this, the factory boasts of having a Galvanizing shed
                which is about 10,000sqf.
              </p>
              <img src={slide1} alt="" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </Container> */}

      <div className="max-w-xl my-3 mx-auto text-center">
        <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
          <p className="text-4xl font-semibold tracking-widest text-g uppercase">
            Factory
          </p>
        </div>
        <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-[white]">
          The factory of Mainawati Steel Industries Pvt. Ltd. is located on its
          own premises in Sunsari. The scope of activity of the company includes
          both manufacture and supply in local and international markets.
        </p>
      </div>
      <div className="grid grid-flow-row md:grid-cols-2 gap-5">
        <div className="flex   items-center ">
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={img2}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                mainawatisteel
              </h6>
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Factory of pipe
              </h4>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                The Steel Fabrication Plant of Mainawati Steel Industries Pvt.
                Ltd. is an entirely covered manufacturing facilty and may be the
                only such in the country. All units of the production line are
                housed under one roof measuring about 80,000 sqf. The plant is
                most modern with state-of-the-art machinery, overhead travelling
                cranes and mechanized trolley systems. The accent of the plant
                is on mechanization in order to achieve the highest degree of
                efficiency and accuracy.
              </p>
              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />
        </div>
        <div className="flex   items-center ">
          <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
              <img
                src={slide1}
                alt="image"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                mainawatisteel
              </h6>
              <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Factory of Plate
              </h4>
              <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                The main production complex comprises of seven sheds. Three
                sheds are dedicated for manufacturing Telescropic Steel Poles,
                Telecom Tower, Steel Bridges and other steel items. One shed is
                dedicated for storing raw materials; three are dedicated for
                manufacturing distribution line hardware and pole fittings.
                Apart from this, the factory boasts of having a Galvanizing shed
                which is about 10,000sqf.
              </p>
              <a className="inline-block" href="#">
                <button
                  className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
          </div>

          <link
            rel="stylesheet"
            href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
          />
        </div>
      </div>

      <div className="flex items-center justify-center"></div>
    </div>
  );
};

export default Factory;
