import { Container } from "@mui/material";
import equipmentsBanner from "../assets/equipments-banner.jpg";
import mission from "../assets/mission.jpg";

const ProductionProcess = () => {
  return (
    <div>
      <Container>
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full ">
          Production processes
        </span>
        <img
          src={equipmentsBanner}
          alt=""
          style={{
            borderBottomRightRadius: "70px",
            borderTopLeftRadius: "70px",
          }}
          className="rounded-[5px] my-5"
        />
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full ">
          proccess
        </span>
        <p className="text-xl text-secondery text-justify py-4">
          Mainawati Steel Limited steel fabrication plant is an entirely covered
          all weather facility. All the production takes place under one roof.
        </p>
        <p className="text-justify text-secondery py-2">
          This is a most modern plant with state-of-the-art machinery, overhead
          travelling cranes and mechanized trolley systems. Mechanization in all
          production processes assures conformity to specifications as well as
          consistency of production. There are seven sheds out of which three
          are for telescopic steel poles, telecom towers, steel bridges and
          other steel items, three are for manufacturing distribution line
          hardware and pole fittings and one shed for stores.
        </p>
        <div className="grid grid-flow-row md:grid-cols-2 gap-3 my-5">
          <div>
            <img
              src={mission}
              alt=""
              style={{
                borderBottomRightRadius: "70px",
                borderTopLeftRadius: "70px",
              }}
              className="rounded-[5px]"
            />
          </div>
          <div className="md:mx-[3rem]">
            <p className="text-2xl uppercase text-secondery py-2 font-bold rounded-lg underline mt-[2rem]">
              QUALITY POLICY
            </p>
            <p className="text-secondery py-3 text-xl">
              Mainawti Steel Industries has made quality an essential part of
              its bussiness. We shall manufacture & market high quality tubes
              and fabrication works that not only meet customer requirement but
              exceed their expectation. Continual productivity improvement is
              what we will strive for by constantly improving quality of our
              product and reducing rework, rejection & wastage. Trained and
              motivated work force will be our strength which will lead us
              towards achieving our quality policy & objectives.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductionProcess;
