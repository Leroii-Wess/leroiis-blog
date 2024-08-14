// import { useEffect } from "react";

function BlogItem({ ...item }) {
  // console.log(item);
  // console.log(item.item.title);
  console.log(item.item.title.length);

  return (
    <div className="p-16 bg-white">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-2xl font-medium uppercase text-blue-900">
          {item.item.title}
        </h3>
        <p className="text-2xl font-medium uppercase text-blue-900 mt-1">
          {item.item.date} <span className="text-orange-400">·</span>{" "}
          {item.item.comments} COMMENTS{" "}
          <span className="text-orange-400">·</span> BY {item.item.author}
        </p>
      </div>

      <div className={`relative px-16 `}>
        <p className="text-gray-700 mt-4 ">{item.item.text}</p>

        <div
          className={`mb-12 mt-20 flex flex-col gap-4 px-12 ${
            item.item.quote.length > 1
              ? `before:content-[''] before:absolute before:top-[36%] before:left-16 before:h-64 before:w-px before:bg-orange-400`
              : ""
          }`}
        >
          {item.item.quote && (
            <p className=" text-gray-500 text-5xl uppercase leading-tight tracking-normal">
              “{item.item.quote}”
            </p>
          )}
          {item.item.quoteAuthor && (
            <p className="text-4xl text-gray-500 mt-2">
              — {item.item.quoteAuthor}
            </p>
          )}
        </div>

        <div className=" flex justify-center">
          <button className="px-4 py-2 text-orange-400 border border-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition">
            {item.item.buttonLabel}
          </button>
        </div>
        <div className="mt-8 text-gray-500 text-2xl uppercase flex justify-center items-center">
          SAVED:&nbsp;
          <span className="text-blue-900"> {item.item.tags.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;

// <div className="max-w-4xl mx-auto bg-white shadow-md overflow-hidden rounded-lg mb-8">
//   <img src={image} alt="Card" className="w-full h-64 object-cover" />

// </div>

// image,
//   title,
//   date,
//   comments,
//   author,
//   text,
//   quote,
//   quoteAuthor,
//   buttonLabel,
//   tags,
