import React from "react";
import { useEffect } from "react";
import BeerCard from "src/components/BeerCard";

const Beers = ({ beers, setFormOpen }) => {
  let isEmpty = false;
  if (!!setFormOpen && beers.length <= 0) isEmpty = true;

  return (
    <>
      <div className="flex flex-col justify-center">
        {isEmpty && (
          <div className="text-center flex flex-col justify-center w-full h-96 bg-gray-50">
            <p>Nothing to see yet.</p>
            <p>
              <button
                onClick={() => setFormOpen(true)}
                className="text-blue-600"
              >
                Click here
              </button>{" "}
              to add your first beer!
            </p>
          </div>
        )}
        <div>
          {beers.map((beer, index) => (
            <BeerCard
              key={index}
              index={index}
              name={beer["name"]}
              tagline={beer["tagline"]}
              description={beer["description"]}
              imgSrc={beer["image_url"]}
              ingredients={beer["ingredients"]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Beers;
