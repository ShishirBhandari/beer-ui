import React from "react";

const MAXLENGTH = 80;
function BeerCard({ name, tagline, description, imgSrc, ingredients, index }) {
  description =
    description.length > MAXLENGTH
      ? `${description.substring(0, MAXLENGTH)}...`
      : description;

  ingredients = Object.keys(ingredients ?? {}).join(", ");

  return (
    <>
      <div className="flex flex-row items-center py-2 my-4 h-[200px] bg-white rounded-lg shadow-xl hover:bg-blue-50 hover:cursor-pointer hover:shadow-none">
        <div className="lg:w-1/6 w-1/4 group relative">
          <div className="flex flex-col justify-center items-center">
            <img src={imgSrc} alt={name} className="h-28"></img>
            {ingredients && (
              <span className="pointer-events-none absolute bottom-[calc(100%+0.1rem)] left-[50%] -translate-x-[50%] w-28 p-1 bg-gray-800 text-white text-xs align-bottom text-center rounded-sm opacity-0 transition-opacity group-hover:opacity-100">
                Ingredients: {ingredients}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col justify p-3 leading-normal">
          <p className="mb-2 text-2xl font-semi-bold tracking-tight text-gray-800">
            {name}
          </p>
          <p className="mb-3 font-normal text-yellow-500">{tagline}</p>
          <p className="mb-3 font-normal text-gray-700">{description}</p>
        </div>
      </div>
    </>
  );
}

export default BeerCard;
