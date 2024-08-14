import bg from "../assets/bg.jpg";
import { TiArrowSortedDown } from "react-icons/ti";

function Hero() {
  return (
    <div className="w-screen h-screen ">
      <img
        src={bg}
        alt="background-image"
        className="w-full h-full object-cover relative"
      />
      <h1 className="absolute inset-0 flex items-center justify-center text-white text-[140px] font-bold">
        LEROII
      </h1>

      <div className="absolute bottom-20 left-2/4 flex items-center justify-center text-white text-7xl cursor-pointer">
        <TiArrowSortedDown />
      </div>
    </div>
  );
}

export default Hero;

{
  /* <h1 className="absolute right-60 top-1/3">LEROII</h1> */
}
