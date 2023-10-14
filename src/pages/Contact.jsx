import { Container } from "@mui/material";

const Contact = () => {
  return (
    <div>
      <Container>
        <span className="text-secondery bg-primary uppercase p-2  font-bold  rounded-full mt-[2rem] ">
          connect us
        </span>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.987899553641!2d87.27464457629866!3d26.58476357684433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d3f361b5a57%3A0xab67ccf37e902de1!2sMainawati%20Steel%20Industries%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1697254224905!5m2!1sen!2snp"
            className="w-full  h-[50vh]"
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          <div className="md:grid grid-cols-2 grid-flow-row gap-2 my-3 text-secondery">
            <div className="bg-primary rounded-[4px] shadow-md py-3 px-3">
              <p className="font-bold  text-xl py-1 ">
                MAINAWATI STEEL INDUSTRIES PVT. LTD.
              </p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">
                The Village 6th Floor, Trade Tower Nepal
              </p>
              <p className="py-1 font-bold  d text-[black] hover:text-[orange] cursor-pointer">
                Thapathali, Kathmandu, Nepal
              </p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">Tel. No.: +977-01-5111104/05/06</p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">
                Mobile:{" "}
                <span className="font-bold text-[black]">9801210600</span>
              </p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">Fax: +977-01-5111107</p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">
                E-mail:{" "}
                <span className="font-bold text-[black]">
                  msiktm@vishalgroup.com.np
                </span>
              </p>
            </div>
            <div className="bg-primary rounded-[4px] shadow-md py-3 px-3">
              <h1 className="font-bold  text-xl py-1">FACTORY</h1>
              <p className="py-1 font-bold text-[black] hover:text-[orange] cursor-pointer">
                Address: Duhabi-3, Sunsari, Nepal
              </p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">
                Tel: 977-025-542122/542386/542216/542404/542216
              </p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">
                Fax:
                <span className="font-bold text-[black]">
                  977-025-540504
                </span>{" "}
              </p>
              <p className="py-1 font-[500] hover:text-[orange] cursor-pointer">
                Email:{" "}
                <sapn className="font-bold text-[black]">
                  {" "}
                  msipl.duhabi@gmail.com
                </sapn>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
