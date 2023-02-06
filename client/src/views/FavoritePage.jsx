import NavbarComponent from "../components/NavbarComponent";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import FavoriteCard from "../components/FavoriteCard";
import { fetchFavorites } from "../stores/actionCreator/talentsCreator";

export default function FavoritePage() {
  let favorites = useSelector((state) => state.idols.favorites);
  const username = localStorage.getItem('username')

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);
  return (
    <div className="w-full px-10">
      <NavbarComponent />
      <div className="text-4xl text-center font-extrabold p-4 mb-6">
        Favorite {username} Talents
      </div>
      <div className="  grid grid-cols-4 gap-11 justify-items-center mb-6 ">
        {favorites.map((favorites) => {
          return <FavoriteCard key={favorites.id} favorites={favorites} />;
        })}
      </div>
    </div>
  );
}
