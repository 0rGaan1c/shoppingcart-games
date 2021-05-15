import React from "react";
import { games } from "../games";
import { Link } from "react-router-dom";

const GameList = () => {
  return (
    <>
      <div className="my-6 w-5/6 mx-auto md:flex md:items-center md:justify-between">
        {games.map((game, idx) => {
          const { name, price, img } = game;

          return (
            <div className="w-full my-4 border-2 border-blue-400" key={idx}>
              <img className="w-full" src={img} alt={name} />
              <div className="flex p-2 bg-black justify-between">
                <div className="text-lg text-white font-bold">
                  {name.substr(0, 15)}...
                </div>
                <div className="bg-white px-4 cursor-pointer rounded-md transition duration-500 ease-in-out transform  hover:scale-110">
                  <Link to={`/${name}/${idx}`}> ${price} </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GameList;
