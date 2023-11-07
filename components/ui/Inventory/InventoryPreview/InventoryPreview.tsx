import Image from "next/image";
import CarfaxBanner from "../../../../asset/images/show-me-the-carfax-cropped.png";
import styles from "./InventoryPreview.module.css";
import Link from "next/link";

export default function InventoryPreview(config: any) {
  const {
    carfax,
    drivetrain,
    imgSrc,
    make,
    mileage,
    model,
    price,
    transmission_type,
    transmission_speed,
    vin,
    year,
  } = config.config;

  return (
    <li className={styles.previewCard}>
      <div className={styles.carfax}>
        {/* href will look like `https://www.carfax.com/VehicleHistory/p/Report.cfx?partner=${partnerId}&vin=${vin}` */}
        <Link href="https://www.carfax.com/" target="_blank">
          <Image
            alt="Show me the Carfax"
            layout="fit"
            objectFit="contain"
            src={CarfaxBanner}
          />
        </Link>
      </div>
      {/* the following link will take path /inventory/${vin} */}
      <Link href={`https://www.google.com/search?q=${year}+${make}+${model}`}>
        <div className={styles.imageContainer}>
          <img src={imgSrc} />
        </div>
        <div className={styles.textContainer}>
          <h3>
            {year} {make} {model}
          </h3>
          <div>
            {/* this logic assumes that there is no distinction in the carfaxAPI response body between the different types of automatic transmissions */}
            {transmission_type == "Manual" ? (
              <span>
                {transmission_type} {transmission_speed} {drivetrain}
              </span>
            ) : (
              <span>
                {transmission_type} {drivetrain}
              </span>
            )}
          </div>
          <div>
            <span>{mileage} mi.</span>
          </div>
          <div>
            <span>{price}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
