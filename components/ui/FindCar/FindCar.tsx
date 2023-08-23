"use client";

import styles from "./FindCar.module.css";

export default function FindCar() {
  const submitHandler = (event: any) => {
    event.preventDefault();
    console.log("Form submits values to backend that filters results");
  };
  return (
    <div className={styles.findCar}>
      <h4 className={"centered padded"}>Find your perfect car</h4>
      <div className={styles.findCarForm}>
        <div className={styles.findCarLabel}>Year Min</div>
        <div className={styles.findCarLabel}>Year Max</div>
        <div className={styles.findCarLabel}>Make</div>
        <div className={styles.findCarLabel}>Model</div>
        <div className={styles.findCarLabel}>Body</div>
        <div className={styles.findCarLabel}>Price Max</div>
        <div className={styles.findCarLabel} />
      </div>
      <form className={styles.findCarForm} onSubmit={submitHandler}>
        {/* use carAPI to GET manufacturer details and map them to these lists */}
        <div className={styles.findCarColumn}>
          <input type="number" placeholder="None" />
        </div>
        <div className={styles.findCarColumn}>
          <input type="number" placeholder="None" />
        </div>
        <div className={styles.findCarColumn}>
          <select>
            <option value="Placeholder">Any</option>
          </select>
        </div>
        <div className={styles.findCarColumn}>
          <select>
            <option value="Placeholder">Any</option>
          </select>
        </div>
        <div className={styles.findCarColumn}>
          <select>
            <option value="Placeholder">Any</option>
          </select>
        </div>
        <div className={styles.findCarColumn}>
          <input type="number" placeholder="None" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
