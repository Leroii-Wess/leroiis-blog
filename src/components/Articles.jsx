import { articles } from "../constants/data";
import ArticleCard from "./ArticleCard";

function Articles() {
  return (
    <div className="bg-white-100 py-32 flex flex-col gap-4 justify-center">
      <div className="flex justify-center items-center">
        <h2 className="flex text-center pb-8">- OUR ARTICLES -</h2>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {articles.map((card) => (
          <ArticleCard card={card} key={card.title} />
        ))}
      </div>
    </div>
  );
}

export default Articles;
