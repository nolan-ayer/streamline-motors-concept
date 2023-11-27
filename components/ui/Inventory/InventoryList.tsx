"use client";

import InventoryPreview from "./InventoryPreview/InventoryPreview";
import styles from "./InventoryList.module.css";
import database from "../../../pseudoDatabase/inventory.json";
import { useEffect, useState } from "react";

export default function InventoryList() {
  const [cardContents, setCardContents] = useState<any | null>([]);

  useEffect(() => {
    initialize();
  }, []);

  const initialize = () => {
    const fetchedData = database.map((data) => {
      return data;
    });
    const parsedData = fetchedData.map((data) => {
      return data;
    });
    setCardContents(parsedData);
  };

  const renderItems = cardContents.map((item) => {
    return <InventoryPreview config={item} key={item.vin} />;
  });

  return (
    //consider restyling ul with single column layout to accommodate variance in image size
    //image size can be controlled with more strict image intake; have all photos taken in 1:1 or 3:2 to enforce uniformity
    //beware object-fit and object-position
    <ul className={styles.inventoryList}>{renderItems}</ul>
  );
}
