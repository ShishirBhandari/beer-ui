import { useState, useEffect } from "react";
import Beers from "src/components/Beers";

const MyBeers = ({ myBeersList, setFormOpen }) => {
  return (
    <div>
      <Beers beers={myBeersList} setFormOpen={setFormOpen}></Beers>
    </div>
  );
};

export default MyBeers;
