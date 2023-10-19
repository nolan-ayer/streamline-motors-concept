"use client";

import styles from "../../ui/FindCar/FindCar.module.css";
import Select from "../Input/Select";
import { useEffect, useState } from "react";
import database from "../../../pseudoDatabase/all-cars-database.json";

export default function Refine() {
  const [carMake, setCarMake] = useState<any | null>([]);
  const [carModel, setCarModel] = useState<any | null>([]);

  const initialize = () => {
    const makeArray = database.map((data) => {
      return data.manufacturer;
    });
    setCarMake(makeArray);
    //something like this but filter based on carMake
    // const modelArray = database.map((data) => {
    //   return data.models;
    // });
    // setCarModel(modelArray);
  };

  useEffect(() => {
    // const fetchCars = async () => {
    //   const response = await fetch("some-path");
    //   const data = await response.json();
    //   console.log(data);
    // };
    // fetchCars();
    // console.log(database);
    initialize();
  }, []);

  return (
    <div className={styles.findCar}>
      <form className={styles.findCarForm}>
        <h1>REFINE</h1>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Year Min</div>
          <input type="number" placeholder="None" />
        </div>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Year Max</div>
          <input type="number" placeholder="None" />
        </div>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Make</div>
          <Select
            config={{
              innerText: carMake,
              inputValue: "make",
            }}
          />
        </div>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Model</div>
          <select>
            <option value="model">Any</option>
          </select>
        </div>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Body</div>
          <Select
            config={{
              innerText: ["Any", "Coupe", "Sedan", "SUV", "Truck", "Wagon"],
              inputValue: "body",
            }}
          />
        </div>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Price Max</div>
          <input type="number" placeholder="None" />
        </div>
        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
