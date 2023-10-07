import {
  AiOutlineMail,
  AiOutlinePhone,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiLocationPlus, BiLogoInstagramAlt } from "react-icons/bi";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import "../index.css";
const Headers = () => {
  return (
    <div className="bg-primary py-3">
      <div className="flex justify-between mx-3">
        <div className="flex gap-3">
          <p className="flex gap-2  mbl-view ">
            <AiOutlineMail className="bg-[white] lg:text-[2rem] md:text-[1.4rem] rounded-full p-1" />
            <p className="text-secondery font-semibold pt-1  lg:text-[1rem] md:text-[0.8rem]">
              msiktm@vishalgroup.com.np
            </p>
          </p>
          <p className="flex gap-2">
            <AiOutlinePhone className="bg-[white] text-[2rem] rounded-full p-1 lg:text-[2rem] md:text-[1.4rem] sm:text-[0.5rem]" />
            <p className="text-secondery font-semibold pt-1 lg:text-[1rem] md:text-[0.8rem] sm:text-[0.4rem]">
              +977 5111104
            </p>
          </p>
          <p className="flex gap-2  mbl-view ">
            <BiLocationPlus className="bg-[white] text-[2rem] rounded-full p- lg:text-[2rem] md:text-[1.4rem] " />
            <p className="text-secondery font-semibold pt-1 lg:text-[1rem] md:text-[0.8rem]">
              Thapathali, Kathmandu, Nepal
            </p>
          </p>
        </div>
        <div className="flex gap-2 mbl-view ">
          <BsFacebook className="bg-secondery  p-1 text-[1.7rem] rounded-full text-[blue]" />
          <BsYoutube className="bg-secondery  p-1 text-[1.7rem] rounded-full text-[red]" />
          <BiLogoInstagramAlt className="bg-secondery  p-1 text-[1.7rem] rounded-full text-[#541919]" />
          <AiFillTwitterCircle className="bg-secondery  p-1 text-[1.7rem] rounded-full text-[blue]" />
        </div>
      </div>
    </div>
  );
};

export default Headers;
