import { Container } from "@mui/material";
import "../index.css";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div className="my-4  ">
      <Container>
        {/* <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full mt-[2rem] ">
          About us
        </span> */}
        <div className=" my-[5rem] py-[2rem] rounded-md">
          <p className="text-2xl text-center uppercase">
            <span className=" px-2 text-[#2782C2] font-bold ">Welcome</span>
            <span className=" px-2">to</span>
            <span className=" px-2">Mainwati</span>
          </p>
          <p className="  pb-[2rem] text-[1.2rem] text-justify font-[400]   rounded-lg p-5">
            Mainawati Steel Industries Pvt. Ltd. was established in the year
            1995. Ever since its inception, the company, adhering to the strict
            and rigorous norms that come with quality and consistent
            performance, has earned the status of becoming the country’s leading
            manufacturer and exporter of a wide range of steel products. These
            products cover a variety of construction materials that include
            Steel Black Pipes, Plates, Galvanized Pipes, Steel Hollow Squares,
            Rectangular Sections, Cold Formed Angles & Channels, Steel Tubular
            and Telescopic Poles and Steel Towers which all conform to domestic
            standard norms and international specifications.
          </p>
          <p className="mb-4 flex justify-center">
            <Link to={"/about"}>
              <span className="border-secondery text-secondery uppercase border p-2 rounded-md cursor-pointer hover:bg-secondery hover:text-primary bg-primary mb-[3rem] border-[#2782C2]">
                Explore Us
              </span>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
