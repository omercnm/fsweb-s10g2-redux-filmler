import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FavoriteMovieList = (props) => {
  const favourites = useSelector(
    (myStore) => myStore.favouritesReducer.favourites
  );

  return (
    <div className="flex-1 sm:max-w-[250px] p-5 pr-5 bg-white shadow rounded-md">
      <h5 className="font-bold">Favori Filmler</h5>
      <div className="pt-3 text-sm">
        {favourites &&
          favourites.map((movie) => (
            <Link
              key={movie.id}
              className="py-1 flex gap-2 justify-between"
              to={`/movies/${movie.id}`}
            >
              {movie.title}
              <span className="material-icons hover:text-red-600 text-[18px]">
                remove_circle
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default FavoriteMovieList;
