import styles from "../../ui/FindCar/FindCar.module.css";
import Select from "../Input/Select";

export default function Refine() {
  return (
    <form>
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
            defaultValue: "Placeholder",
            innerText: [
              "Any",
              "Audi",
              "BMW",
              "Bugatti",
              "Chevrolet",
              "Chrysler",
              "Ferrari",
              "Fiat",
              "Ford",
              "Honda",
              "Hyundai",
              "Jaguar",
              "Jeep",
              "Kia",
              "Lamborghini",
              "Land Rover",
              "Lexus",
              "Maserati",
              "Mazda",
              "McLaren",
              "Mercedes-Benz",
              "Mitsubishi",
              "Nissan",
              "Porsche",
              "Ram",
              "Subaru",
              "Tesla",
              "Toyota",
              "Volkswagen",
              "Volvo",
            ],
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
            defaultValue: "Placeholder",
            innerText: ["Any", "Coupe", "Sedan", "SUV", "Truck", "Wagon"],
            inputValue: "body",
          }}
        />
      </div>
      <div className={styles.findCarColumn}>
        <div className={styles.findCarLabel}>Price Max</div>
        <input type="number" placeholder="None" />
      </div>
    </form>
  );
}
