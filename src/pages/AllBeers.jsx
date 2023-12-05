import { useEffect, useState } from "react";
import Beers from "src/components/Beers";
import { BASEURI, PERPAGE } from "src/constants";

const AllBeers = ({
  allBeersList,
  setAllBeersList,
  currentPage,
  setCurrentPage,
  lastFetchedPage,
  setLastFetchedPage,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (lastFetchedPage >= currentPage) return;
    setIsLoading(true);
    async function getAllBeers() {
      const response = await fetch(
        `${BASEURI}/beers?page=${currentPage}&per_page=${PERPAGE}`
      );
      if (!response.ok) {
        setError("Error fetching data");
        return;
      }
      setIsLoading(false);

      const newList = await response.json();

      setAllBeersList((allBeersList) => [...allBeersList, ...newList]);
      setLastFetchedPage(currentPage);
    }
    getAllBeers();
  }, [currentPage]);

  return (
    <div>
      <Beers beers={allBeersList}></Beers>
      <div className="flex justify-center p-4 text-blue-600">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={isLoading}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};

export default AllBeers;
