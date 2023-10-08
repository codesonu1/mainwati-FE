import { Container } from "@mui/material";
import "../index.css";
import { BiCurrentLocation, BiPhoneCall, BiLogoGmail } from "react-icons/bi";

import { BsCalendarDayFill } from "react-icons/bs";
import styled from "@emotion/styled";
const Footer = () => {
  return (
    <div className="bg-primary">
      <Container className="mt-[2rem]">
        <div className="gap-3 grid lg:grid-cols-3 grid-flow-row md:grid-cols-3 py-[3rem]">
          <div>
            <h1 className="uppercase text-xl font-semibold text-secondery py-2">
              OFFICE ADDRESS
            </h1>
            <div className="flex gap-3 my-2">
              <span className="text-3xl text-secondery">
                <BiCurrentLocation />
              </span>
              <p className="text-secondery">
                The Village 6th Floor, Trade Tower Nepal, Thapathali, Kathmandu,
                Nepal
              </p>
            </div>

            <div className="flex gap-2 my-2">
              <BiPhoneCall className="text-3xl text-secondery" />
              <p className="text-secondery">
                <span className="">Tel</span>
                <span>+977 (01) 5111104/05/06</span>
              </p>
            </div>
            <div className="flex gap-2 my-2">
              <BiLogoGmail className="text-3xl text-secondery px-1" />
              <p className="text-secondery">msiktm@vishalgroup.com.np</p>
            </div>
          </div>
          <div>
            <p className="uppercase text-xl font-semibold text-secondery py-2">
              Company
            </p>
            <p className="text-secondery hover:text-[orange] cursor-pointer">About Us</p>
            <p className="text-secondery hover:text-[orange] cursor-pointer">Production Process</p>
            <p className="text-secondery hover:text-[orange] cursor-pointer">Factory</p>
            <p className="text-secondery hover:text-[orange] cursor-pointer">Achivement</p>
            <p className="text-secondery hover:text-[orange] cursor-pointer">Capacity</p>
            <p className="text-secondery hover:text-[orange] cursor-pointer">Our Product</p>
          </div>
          <div>
            <p className="uppercase text-xl font-semibold text-secondery py-2">
              Office hours
            </p>
            <div className="flex gap-2 my-2">
              <BsCalendarDayFill className="text-3xl text-secondery" />
              <div className="text-secondery">
                <p>Mon - Fri 9am - 6pm</p>
                <p>Sat 10am - 2pm</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
