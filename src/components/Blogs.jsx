import BlogItem from "./BlogItem";
import Slider from "./Slider";
import { blogInfo } from "../constants/data";
import { useState } from "react";
import camper from "../assets/Camper-1.jpg";
// import flowerShop from "../assets/Flower-Shop.jpg";

function Blogs() {
  const [blogItems] = useState(blogInfo);

  return (
    <div className="bg-gray-100 py-44 flex justify-center">
      <div className="w-[60%] pb-32 mx-auto">
        <div className="mb-12">
          <Slider />
          <BlogItem item={blogItems[0]} />
        </div>
        <div>
          <img src={camper} alt="camping-bus" />
          <BlogItem item={blogItems[1]} />
        </div>
      </div>
    </div>
  );
}

export default Blogs;
