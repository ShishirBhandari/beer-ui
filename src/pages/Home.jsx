import { useState, useEffect } from "react";
import AllBeers from "src/pages/AllBeers";
import MyBeers from "src/pages/MyBeers";
import BeerForm from "src/components/BeerForm";

const Home = () => {
  const [isAllBeersActive, setIsAllBeersActive] = useState(true);
  const [isFormOpen, setFormOpen] = useState(false);

  const [allBeersList, setAllBeersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastFetchedPage, setLastFetchedPage] = useState(0);

  const [myBeersList, setMyBeersList] = useState([]);

  const storeMyBeer = (newBeer) => {
    setMyBeersList([...myBeersList, newBeer]);
    setFormOpen(false);
  };

  return (
    <>
      <div className="flex flex-col py-4 px-10 lg:w-[900px] md:w-[600px]">
        <div className="flex flex-row items-center">
          <div className="w-1/2">
            <ul className="flex flex-row justify-start font-bold">
              <li
                className={isAllBeersActive ? "text-gray-900" : "text-gray-400"}
              >
                <a
                  href="#"
                  onClick={() => setIsAllBeersActive(true)}
                  className={
                    "inline-block py-4 mx-4 ml-0 cursor-pointer hover:underline"
                  }
                >
                  All Beers
                </a>
              </li>
              <li
                className={
                  !isAllBeersActive ? "text-gray-900" : "text-gray-400"
                }
              >
                <a
                  href="#"
                  onClick={() => setIsAllBeersActive(false)}
                  className={
                    "inline-block py-4 mx-4 cursor-pointer hover:underline"
                  }
                >
                  My Beers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-1/2">
            <div className="flex justify-end items-center">
              {!isAllBeersActive && (
                <button
                  onClick={() => setFormOpen(true)}
                  className="bg-blue-900 text-white rounded-s p-2 cursor-pointer hover:bg-blue-700"
                >
                  Add a new beer
                </button>
              )}
            </div>
          </div>
        </div>
        <div>
          {isAllBeersActive ? (
            <AllBeers
              allBeersList={allBeersList}
              setAllBeersList={setAllBeersList}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              lastFetchedPage={lastFetchedPage}
              setLastFetchedPage={setLastFetchedPage}
            />
          ) : (
            <div>
              <MyBeers myBeersList={myBeersList} setFormOpen={setFormOpen} />
              <BeerForm
                isFormOpen={isFormOpen}
                setIsFormOpen={setFormOpen}
                storeMyBeer={storeMyBeer}
              ></BeerForm>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
