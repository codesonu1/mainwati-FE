import { Container } from "@mui/material";
import "../index.css";
import { MdVerifiedUser } from "react-icons/md";

const ExportCompany = () => {
  return (
    <div className="export-company py-[5rem] my-[4rem]">
      <Container>
        <p className="uppercase text-3xl text-secondery py-[2rem] text-center font-bold font-serif">
          mainawati export company
        </p>
        <div className="grid md:grid-cols-3 grid-flow-row ">
          <div className="bg-secondery rounded-md shadow-md lg:h-[30vh] lg:mt-[5rem] md:h-full md:mt-0 my-3 md:my-0 lg:my-0">
            <p className="text-center text-xl font-bold py-[2rem] capitalize tracking-wide">
              quality policy
            </p>
            <p className="justify p-2 font-medium text-center pb-[3rem]">
              Quality is the corporate culture in Mainawati, Customer is the
              King and the partner in the total quality is our motto.
            </p>
            <p className="flex justify-end p-3">
              <MdVerifiedUser className="text-3xl" />
            </p>
          </div>
          <div className="bg-primary rounded-md shadow-md  lg:h-[50vh] md:h-auto my-3 md:my-0 lg:my-0 h-[75vh]">
            <p className="text-center text-xl font-bold py-[2rem] capitalize tracking-wide text-secondery lg:mt-[5rem] md:mt-0">
              Product
            </p>
            <p className="justify p-2 font-medium text-center pb-[3rem] text-secondery">
              Mainawati Company is a supplier of quality steel.Located in
              Shandong Province, it mainly produces galvanized sheet,galvanized
              coil, carbon steel coil,carbon steel sheet,stainless steel and
              other metal materials.
            </p>
            <p className="flex justify-end p-3">
              <MdVerifiedUser className="text-3xl text-secondery" />
            </p>
          </div>
          <div className="bg-secondery rounded-md shadow-md lg:mt-[5rem] lg:h-[30vh] md:h-auto md:mt-0">
            <p className="text-center text-xl font-bold py-[2rem] capitalize tracking-wide">
              Achivement
            </p>
            <p className="justify p-2 font-medium text-center pb-[3rem]">
              Mr. Trilok Agrawal, Chairman of Mainawati Steel Industries P. Ltd.
              is receiving NS Quality Award from Rt. Hon’ble Prime Minister Mr.
              Lokendra Bahadur Chanda
            </p>
            <p className="flex justify-end p-3">
              <MdVerifiedUser className="text-3xl" />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ExportCompany;
