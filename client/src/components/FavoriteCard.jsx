import { TfiAlignRight } from "react-icons/tfi";
import { RiChatDeleteLine } from "react-icons/Ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../stores/actionCreator/talentsCreator";

export default function FavoriteCard({ favorites }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`group flex flex-col justify-between  rounded-lg  relative w-[245px] h-[373px] bg-gradient-to-t from-white ${favorites.color}  drop-shadow-2xl text-lg block overflow-hidden transition-all duration-500 `}
    >
      <div className=" flex justify-end pr-2 gap-2 z-40 pt-2  ">
        <Link to={`/detail/${favorites.Favorites[0].IdolId}`} className="flex w-max   cursor-pointer">
          <TfiAlignRight className="" />
        </Link>
        <a
          className="flex w-max  cursor-pointer"
          onClick={() => {
            dispatch(deleteFavorite(favorites.id))
              .then((data) => {
                console.log(data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          <RiChatDeleteLine />
        </a>
      </div>
      <img
        src={favorites.detailImage}
        alt=""
        className="ml-[250px] 0 absolute flex  w-max top-0 -inset-full  z-10 hover:scale-110 transition-all hover:duration-700"
      />
      <div
        className={` hover:bg-opacity-80 -bottom-52  z-40 absolute group-hover:bottom-2 right-2 left-2 transition-all duration-500  opacity-80 dark:bg-pink-200 p-4 rounded shadow dark:shadow-red-100 cursor-default`}
      >
        <div className="text-4xl font-extrabold">{favorites.name}</div>
        <div className="font-normal text-sm text-justify">
          Hallo {favorites.fanName}, thanks for let me in your favorites talent
        </div>
      </div>
      <div className="0 absolute top-0 -inset-full h-full w-1/2  block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine  " />
    </div>
  );
}
