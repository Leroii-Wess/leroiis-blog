import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ArticleCard({ card }) {
  return (
    <div className="px-10 w-[480px]">
      <div className="w-full">
        <img
          src={card.image}
          alt="blog-image"
          className="w-full h-full object-cover hover:scale-105 overflow-hidden transition-all hover:grayscale-[30%]"
        />
      </div>

      <div className="px-6 py-16 h-1/5 p-4 flex flex-col gap-2 content-center justify-center text-center ">
        <span className="uppercase font-semibold hover:text-orange-400 transition-all text-gray-800">
          <Link to="/">{card.title}</Link>
        </span>
        <span className="text-gray-600">{card.date}</span>
      </div>
    </div>
  );
}

export default ArticleCard;
