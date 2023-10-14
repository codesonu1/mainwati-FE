import { Container } from "@mui/material";
import factoryBanner from "../assets/factory-banner.jpg";
import img2 from "../assets/img2.png";
import slide1 from "../assets/slide1.png";

const Factory = () => {
  return (
    <div>
      <Container>
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full mt-[2rem] ">
          factory
        </span>
        <div className="my-3">
          <img src={factoryBanner} alt="" className="rounded-lg"/>
          <div className="grid grid-cols-2 grid-flow-row gap-3">
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
      </Container>
    </div>
  );
};

export default Factory;
