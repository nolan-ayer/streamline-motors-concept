import InventoryPreview from "./InventoryPreview/InventoryPreview";

import styles from "./InventoryList.module.css";

export default function InventoryList() {
  const pseudoDatabase = [
    {
      carfax: "",
      drivetrain: "AWD",
      imgSrc:
        "https://scontent.cdninstagram.com/v/t39.30808-6/380293615_18304976152136395_5660976765333031455_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=CAaPoBIUpRgAX95CSBK&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfDfHVUM0Ma6zBmpmL4EHrF9rNpc9aO43L6h38V6IGgzMw&oe=654E6970&_nc_sid=10d13b",
      make: "Subaru",
      mileage: "110,248",
      model: "Outback",
      price: "$4,999",
      transmission_type: "Manual",
      // the following vin is a dummy
      vin: "1GNDS13S042284830",
      transmission_speed: "5-speed",
      year: "1999",
    },
    {
      carfax: "",
      drivetrain: "FWD",
      imgSrc:
        "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2142/",
      make: "Honda",
      mileage: "95,831",
      model: "Fit",
      price: "$7,499",
      transmission_type: "Automatic",
      // the following vin is a dummy
      vin: "JF2GPACC2D2897484",
      year: "2011",
    },
    {
      carfax: "",
      drivetrain: "4WD",
      imgSrc:
        "https://bringatrailer.com/wp-content/uploads/2022/04/414778BF-C626-4C5F-BCAE-1C32FAC1F179-64668-scaled.jpeg?fit=940%2C626",
      make: "Toyota",
      mileage: "86,704",
      model: "Land Cruiser",
      price: "$21,999",
      transmission_type: "Automatic",
      // the following vin is a dummy
      vin: "WAUDF78E96A167966",
      year: "2004",
    },
    {
      carfax: "",
      drivetrain: "RWD",
      imgSrc:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/bg0rkuqoih3q4hgvh2hp.jpg",
      make: "Porsche",
      mileage: "74,253",
      model: "924",
      price: "$13,599",
      transmission_type: "Manual",
      transmission_speed: "5-speed",
      // the following vin is a dummy
      vin: "5YFBURHE4EP042184",
      year: "1988",
    },
    {
      carfax: "",
      drivetrain: "RWD",
      imgSrc:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/2010_Hyundai_Genesis_Coupe_3_--_08-28-2009.jpg/1200px-2010_Hyundai_Genesis_Coupe_3_--_08-28-2009.jpg",
      make: "Hyundai",
      mileage: "56,244",
      model: "Coupe",
      price: "$27,699",
      transmission_type: "Manual",
      transmission_speed: "6-speed",
      // the following vin is a dummy
      vin: "KNDPC3A23D7454098",
      year: "2008",
    },
  ];

  const renderItems = pseudoDatabase.map((item) => {
    return <InventoryPreview config={item} key={item.vin} />;
  });

  return (
    //consider restyling ul with single column layout to accommodate variance in image size
    //image size can be controlled with more strict image intake; have all photos taken in 1:1 or 3:2 to enforce uniformity
    //beware object-fit and object-position
    <ul className={styles.inventoryList}>{renderItems}</ul>
  );
}
