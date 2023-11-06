export default function InventoryPreview(config: any) {
  const {
    carfax,
    drivetrain,
    id,
    imgSrc,
    make,
    mileage,
    model,
    price,
    transmission_type,
    transmission_speed,
    year,
  } = config.config;

  return (
    <li>
      <img src={imgSrc} />
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
      <a href="https://www.carfax.com/" target="_blank">{`{carfax}`}</a>
    </li>
  );
}
