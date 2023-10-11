import { Container } from "@mui/material";
import mainwatiIso from "../assets/mainwati-iso.jpg";
import award from "../assets/awards.png";

const Acchivement = () => {
  return (
    <div>
      <Container>
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full ">
          achievement
        </span>
        <div className=" grid grid-cols-2 grid-flow-row my-5 gap-4">
          <div>
            <img src={mainwatiIso} alt="" className="h-[500px] rounded-lg" />
            <p className="text-secondery text-justify pt-[2em]">
              Laurels And Awards: For Perseverance And Diligence Owing to the
              superior and consistent quality of its process & Products, the
              company has been recognized for adhering to the following
              Standards & Certificatins:
            </p>
            <ul style={{ listStyle: "roman" }} className="mt-3 text-secondery">
              <li>NS (Nepal Bureau of Standard)</li>
              <li>ISI (Bureau of Indian Standard)</li>
              <li>
                ISO 9001:2000 Accredited (International Standard Orgazination)
              </li>
            </ul>
            <p className="py-2 text-secondery">
              In the days to come, the Mainawati Steel Industries Pvt. Ltd. will
              continue to look beyond the horizons and will deliver nothing less
              than the best for its evergrowing clientele.
            </p>
          </div>
          <div>
            <img src={award} alt="" className="h-[500px] rounded-lg" />
            <p className="text-secondery text-justify p-3">
              Mr. Trilok Agrawal, Chairman of Mainawati Steel Industries P. Ltd.
              is receiving NS Quality Award from Rt. Hon’ble Prime Minister Mr.
              Lokendra Bahadur Chanda in a special Function organised on the
              occasion of 33rd World Quality Day in November 21st, 2002. This
              News was published in the Gorkhapatra, the first National Daily of
              Nepal as main News.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Acchivement;
