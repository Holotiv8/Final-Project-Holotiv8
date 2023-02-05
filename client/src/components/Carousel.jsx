import YoutubeCard from "./YoutubeCard";
import SpofyCard from "./SpotifyCard";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

function Carousel({ title, backround, type, content }) {
  // console.log(content,'ini video dariiiiiiiiiiiiiiiiiiiiiiiii')
  // if(content.length > 5){
    
  // }
  const scrollLeft = () => {
    document.getElementById(`${type}`).scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById(`${type}`).scrollLeft += 400;
  };

  const ScrollbarHide = () => {
    return (
      <style>
        {`
          #${type}::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    );
  };

  const Card = (el) => {
    if(type == 'youtube'){
      return <YoutubeCard videos={el}/>
    }else{
      return <SpofyCard music={el}/>
    }
  }
  return (
    <div className={`relative h-[${type === 'youtube' ? '360px' : '400px'}] ${backround} pt-24`}>
      <div className="font-Montserrat translate-y-[-120%] absolute pl-16 py-1 w-[300px] text-5xl font-semibold bg-gray-400 rounded-br-[500px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 ">{title}</div>
      <div className="absolute right-0 top-5 ">
        {content.length > 5 ? <><button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">
          <FiChevronLeft />
        </button>
        <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">
          <FiChevronRight />
        </button></> : ""}
        
      </div>
      <ScrollbarHide />
      <div
        id={type}
        className="carousel p-4 flex items-start justify-start self-start overflow-x-auto scroll-smooth  scrollbar-hide"
      >
        {content.map((el) =>{
          return (
          <div>
            <Card data={el}/>
          </div>
          )
        })}
       
      </div>
    </div>
  );
}

export default Carousel;
