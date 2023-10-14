import { Container } from "@mui/material";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import p4 from "../assets/p4.jpg";
import p5 from "../assets/p5.jpg";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <Container>
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full mt-[2rem] ">
          products range
        </span>
        <div className="grid md:grid-cols-3 grid-flow-row gap-3 mt-5 ">
          {products.map((ele, i) => {
            return (
              <div key={i} className="bg-secondery rounded-lg">
                <img
                  src={ele.img}
                  alt={ele.name}
                  className="  hover:opacity-25"
                />
                <h1 className="text-primary text-center py-3">{ele.name}</h1>
                <p className="text-justify p-3">{ele.desc.slice(0, 200)}....</p>
                <Link to={`${i + 1}`}>
                  <div className="flex my-2 justify-center">
                    <span className="border-primary text-secondery uppercase border p-2 rounded-md cursor-pointer hover:bg-secondery hover:text-primary bg-primary">
                      read more
                    </span>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const products = [
  {
    img: p1,
    name: "TELECOMMUNICATION & TRANSMISSION TOWERS",
    desc: "Mainawati has a 3000 MTPA tower manufacturing unit strategically located at Duhabi-3, Sunsari. The plant is equipped with the latest CNC line for fabrication of towers and microprocessor based temperature controlled eco-friendly systems for galvanization of tower members.",
    features: [
      {
        feature: "FABRICATION PROCESS",
        desc: "Multipurpose CNC machines directly read the drawings, punch, stamp and cut steel. Heavy duty machines perform even the heaviest of bends without distortion. Strategically positioned EOT cranes efficiently perform material handling.",
      },
      {
        feature: "GALVANIZING PROCESS",
        desc: "The furnace is controlled by microprocessors to give control on the bath temperature. The drying oven uniformly dries and pre-heats the steel, which removes spurting and gives an excellent surface finish to the product. Mainawati Steels’s factory has got one of the biggest (size 7.25 x 1.2 x 1.2 m)",
      },
    ],
  },
  {
    img: p2,
    name: "HIGH MAST",
    desc: "High mast lighting as a concept in area lighting is being preferred over conventional lighting, especially where large areas are to be illuminated without the need for numerous lighting columns that under certain circumstances can be a hazard to movement. This possible because the high mast lighting system achieves very large space to height ratios. High-mast lighting is deal for many areas, particularly complicated or multi-level road systems. Industrial or commercial areas, docks, airports, stations, car parks and even some hazardous areas. All of these areas require the best possible lighting with minimum interference from the installation itself combined with ease of maintenance.",
  },
  {
    img: p3,
    name: "CONICAL & OCTAGONAL GALVANIZED TELESCOIPC POLES",
    desc: "Octagonal Poles are used to securely illuminate private residential areas, commercial and industrial locations. The street lighting pole range is designed with an outreach arm, in either single or double arrangement, as per customer specifications.",
  },
  {
    img: p4,
    name: "STEEL TUBULAR SWAGED POLES",
    desc: "Steel Tubular Poles from Mainawati Steel are manufactured to specifications that not only illuminate the journey, but pave the way for a brighter future.nawati Steels’s ERW Tube Plant with ISI certification is the first of its kind in Eastern India. Today, Mainawati Steel has adequate infrastructure to roll out high quality poles in any quantity. Backed by in-house testing facilities, Mainawati Steel manufactures Steel Tubular Poles from pipes conforming to IS specifications and other equivalent specifications.",
  },
  {
    img: p5,
    name: "PRECISION TUBES",
    desc: "Mainawati Steel has a wide range of precision steel tubes which uniquely combine strength and surface quality and are supplied in endless varieties and material options for different applications requiring extremely light materials.Precision tubes offer many advantages such as close tolerances on diameter & thicknesses, exceptional concentricity and a smooth finish, both inside & outside of the tubes.These features enable designers to obtain uniformity of flow under controlled temperature, pressure conditions, while fabricators can exercise greater control over close bending and tube alignment in butt welding.",
  },
];

export default Product;
