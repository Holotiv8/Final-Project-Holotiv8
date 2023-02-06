import NavbarComponent from "../components/NavbarComponent";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import FavoriteCard from "../components/FavoriteCard";
import { fetchDataBranches, fetchFavorites } from "../stores/actionCreator/talentsCreator";

export default function FavoritePage() {
  const {favorites, branches} = useSelector((state) => state.idols);
  const username = localStorage.getItem('username')
  const [dataFavorites, setDataFavorites] = useState([]) 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);

  useEffect(() => {
    dispatch(fetchDataBranches())
  }, [])

  useEffect(() => {
    setDataFavorites(favorites)
  }, [favorites])

  function handleActive(value, valueId) {
    if (valueId !== 0){
      let filterData = favorites.filter((el) => {
        return valueId === el.Branch.id
      })
      setDataFavorites(filterData)
    } else {
      setDataFavorites(favorites)
    }
  }
  return (
    <div className="w-full px-10">
      <NavbarComponent />
      <div className="text-4xl text-center font-extrabold p-4 mb-6">
      {username} Favorite Talents
      </div>
      <div className="flex justify-center font-semibold text-lg gap-3 ">
      <button
              onClick={() => {
                handleActive('All Hololive Talent', 0)
              }}
              className='border-orange-800 p-1 shadow-md rounded border'
            >
              All Hololive Talent
            </button>
        {branches.map((e) => {
          return(
            <button
              key={e.id}
              onClick={() => { 
                handleActive(e.from, e.id)
              }}
              className='border-orange-800 p-1 shadow-md rounded border'
            >
              {e.from}
            </button>
          )
        })}
      </div>
      <div className="  grid grid-cols-4 gap-11 justify-items-center mb-6 ">
        {dataFavorites.map((favorites) => {
          return <FavoriteCard key={favorites.id} favorites={favorites} />;
        })}
      </div>
    </div>
  );
}
