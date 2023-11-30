"use client";

import { useRouter } from "next/navigation";
import styles from "./FindCar.module.css";
import database from "../../../pseudoDatabase/inventory.json";
import { useEffect, useState } from "react";
import Select from "../Input/Select";

export default function FindCar() {
  const router = useRouter();

  const [carMake, setCarMake] = useState<any | null>([]);
  const [carModel, setCarModel] = useState<any | null>([]);

  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log("Form submits values to backend that filters results");
  };

  const initializeMake = () => {
    const fetchedData = database.map((data) => {
      return data;
    });
    const parsedData = fetchedData.map((data) => {
      return data;
    });
    const vehicleMake = parsedData.map((data) => {
      return data.make;
    });
    setCarMake(vehicleMake.push("Any"));
    setCarMake(vehicleMake.sort());
  };

  const initializeModel = () => {
    const fetchedData = database.map((data) => {
      return data;
    });
    const parsedData = fetchedData.map((data) => {
      return data;
    });
    const vehicleModel = parsedData.map((data) => {
      return data.model;
    });
    setCarModel(vehicleModel.sort());
  };

  useEffect(() => {
    initializeMake();
    initializeModel();
  }, []);

  return (
    <div className={styles.findCar}>
      <h4 className={"centered padded"}>Find your perfect car</h4>
      <form className={styles.findCarForm} onSubmit={submitHandler}>
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
            <option value="Placeholder">Any</option>
          </select>
        </div>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Body</div>
          <select>
            <option value="Placeholder">Any</option>
          </select>
        </div>
        <div className={styles.findCarColumn}>
          <div className={styles.findCarLabel}>Price Max</div>
          <input type="number" placeholder="None" />
        </div>
        <div
          className={`${styles.findCarColumn} ${styles.submitButtonPlacement}`}
        >
          <div />
          <button
            className={styles.submitButton}
            onClick={() => {
              router.push("/inventory");
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
