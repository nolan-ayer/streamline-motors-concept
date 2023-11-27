"use client";

import { useEffect, useState } from "react";
import database from "../../../../pseudoDatabase/inventory.json";

export default function InventoryExpanded() {
  const [cardContents, setCardContents] = useState<any | null>([]);

  useEffect(() => {
    initialize();
  }, []);

  //   const initialize = () => {
  //     const fetchedData = database.map((data) => {
  //       console.log(data);
  //       return data;
  //     });
  //     setCardContents(fetchedData);
  //   };

  const initialize = () => {
    // rework the json object to allow for filtering results by vin
    // define const that is vin (grab from url), then query the json db
    const fetchedData = database.map((data) => {
      return data;
    });
    setCardContents(fetchedData);
  };

  return (
    <div>
      {cardContents.map((data) => {
        console.log(data);
      })}
    </div>
  );
}
