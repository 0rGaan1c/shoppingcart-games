import React from "react";
import { games } from "../games";
import { Link } from "react-router-dom";

const GameList = () => {
  return (
    <>
      <div className="my-6 w-5/6 xl:w-11/12 mx-auto xl:flex xl:flex-wrap justify-between">
        {games.map((game, idx) => {
          const { name, price, img, id } = game;
          return (
            <div
              className="w-full my-4 border-2 border-blue-400 xl:border-0 xl:px-2 xl:w-4/12 transition duration-300 ease-in-out transform hover:scale-105"
              key={id}
            >
              <Link to={`/${name}/${idx}`}>
                <img className="w-full" src={img} alt={name} />
                <div className="flex p-2 bg-black justify-between">
                  <div className="text-lg text-white font-bold">
                    {name.substr(0, 15)}...
                  </div>
                  <div className="bg-white px-4 cursor-pointer">${price}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameList;
