import { Container } from "@mui/material";
import about from "../assets/about.jpg";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
const About = () => {
  return (
    <div>
      <Container className="my-4">
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full  ">
          About
        </span>
        <p className="py-3 text-secondery font-[400]  text-xl text-justify">
          Mainawati Steel Industries Pvt. Ltd. is an industrial unit under
          vishal group. Vishal group Ltd. is a leading commercial house of Nepal
          with a number of industrial & bussiness units. Mainawati Steel
          Industries Pvt. Ltd. is managed by board of directors which is headed
          by a chairman. Management of Mainawati Steel Industries Pvt. Ltd. has
          a long experience in industry and trading that is amply reflected in
          the proficiency by which the organization is being presently run.
        </p>
        <img
          src={about}
          alt=""
          style={{
            borderBottomRightRadius: "70px",
            borderTopLeftRadius: "70px",
          }}
          className="rounded-[5px]"
        />
        <p className="text-secondery py-2">
          Mainawati Steel Industries Pvt. Ltd. was established in the year
          1995.Ever since its inception, the company, adhering to the strict and
          rigorous norms that come with quality and consistent performance, has
          earned the status of becoming the country’s leading manufacturer and
          exporter of a wide range of steel products. These products cover a
          variety of contruction materials that include Steel Black Pipes,
          Plates, Galvanized Pipes, Steel Hollow Squares, Rectangular Sections,
          Cold Formed Angles & Channels, Steel Tubular and Telescopic Poles and
          Steel Towers which all conform to domestic standard norms and
          internation specifications. From the time of its initiation, Mainawati
          Steel Industries has been living up to the challenging demands of
          supplying to local as well as export markets. The company’s share in
          the local markets has witnessed a rising trend over the years and has
          helped the country by reducting dependence on constly imports and has,
          retroactively, saved precious foreign exchange.
        </p>
        <div className="grid grid-cols-2 grid-flow-row gap-3 my-5">
          <div>
            <div>
              <p className="text-2xl uppercase text-secondery py-2 font-bold rounded-lg underline mt-[2rem]">
                mission
              </p>
              <p className="text-secondery py-3 text-xl">
                "Mainawati Steel's mission is to create a steel company which
                can deliver diversified products of steel under one roof with
                high quality standards at the most reasonable and affordable
                price to all its consumer."
              </p>
            </div>
            <div>
              <p className="text-2xl uppercase text-secondery py-2 font-bold rounded-lg underline mt-[2rem]">
                VISION
              </p>
              <p className="text-secondery py-3 text-xl">
                Mainawati Steel will become one of the largest G.I. Pipes and
                other necessary fabricated steel items in terms of volume and
                diversify product and will be recognized for its professional &
                caring management. We shall fulfill the needs & expectation of
                share holders, customer and community (Society).
              </p>
            </div>
          </div>
          <div>
            <img
              src={vision}
              alt=""
              style={{
                borderBottomRightRadius: "70px",
                borderTopLeftRadius: "70px",
              }}
              className="rounded-[5px]"
            />
          </div>
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
          <div className="mx-[3rem]">
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

export default About;
