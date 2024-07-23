import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

import logo from "../assets/Utravel.png";
//import { UseFligtsContext } from "../Context/FlightConte";
function Hero() {
  const listLinks = ["Home", "Help", "Log in", "Sign up"];
  return (
    <div className="flightHero hero ">
      
      <div className="flightHero__navbar w-90 mx-auto relative z-50	flex justify-between">

      <a href="#">
            <img src={`${logo}`} alt="logo" />
            </a>
        
          <ul className="flex justify-between">
            {listLinks.map((item, index) => (
              <li key={index} className="mr-[25px]">
                <a key={index} href="#" className="linkNavBar text-base	">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button className="text-white">
                <span className="inline-block mr-[5px]">EN</span>
              <FontAwesomeIcon  icon={faChevronRight} />

              </button>
              

              <></>
            </li>
          </ul>
        
      </div>
      <div className=" w-90 mx-auto relative z-50 text-white flex justify-end	h-customContentHero items-center">
        <h1 className="text-5xl	inline-block">
          <span>we are here for you</span>
          <span className="block text-right">World Wide</span>

        </h1>

      </div>
    </div>
  );
}

export default Hero;
