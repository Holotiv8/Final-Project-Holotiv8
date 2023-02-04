import Card from "./Card";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel({ title }) {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  const ScrollbarHide = () => {
    return (
      <style>
        {`
          #content::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    );
  };

  return (
    <div className="relative">
      <div className="text-center py-4  text-xl font-bold">{title}</div>
      <div className="absolute right-0 top-5 ">
        <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button>
      </div>
      <ScrollbarHide />
      <div
        id="content"
        className="carousel p-4 flex items-center justify-start overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div>
          <iframe
            className="w-[450px] h-[250px] rounded-md"
            src="https://www.youtube.com/embed/68KV7JnrvDo/autoplay=1&rel=0"
            allow="autoplay"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
