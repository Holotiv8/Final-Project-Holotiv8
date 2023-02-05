import NavbarComponent from "../components/NavbarComponent";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFavorites } from "../stores/actionCreator/talentsCreator";
import FavoriteCard from "../components/FavoriteCard";

export default function FavoritePage() {
  let favorites = useSelector((state) => state.idols.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, []);
  return (
    <div className="w-full px-10">
      <NavbarComponent />
      <div className="text-7xl font-extrabold p-4 mb-6">Favorite Talents</div>
      <div className="  grid grid-cols-4 gap-11 justify-items-center  ">
        {favorites.map((favorites) => {
          return <FavoriteCard favorites={favorites} />;
        })}
      </div>
    </div>
  );
}
