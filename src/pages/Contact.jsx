import { Container } from "@mui/material";

const Contact = () => {
  return (
    <div>
      {/* <Container>
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
      </Container> */}

      <section className="text-[black] body-font relative">
        <div className="absolute inset-0 bg-[gray]">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3567.987899553641!2d87.27464457629866!3d26.58476357684433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6d3f361b5a57%3A0xab67ccf37e902de1!2sMainawati%20Steel%20Industries%20Pvt.Ltd.!5e0!3m2!1sen!2snp!4v1697254224905!5m2!1sen!2snp"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-[white] rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="text-[gray] text-lg mb-1 font-medium title-font">
              Connect us
            </h2>
            {/* <p className="leading-relaxed mb-5 text-[gray]">
              Post-ironic portland shabby chic echo park, banjo fashion axe
            </p> */}
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-[gray]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-[gray] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="message" className="leading-7 text-sm text-[gray]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-[white] rounded border border-[gray] focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>
            <button className="text-[white] bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            {/* <p className="text-xs text-[gray] mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
