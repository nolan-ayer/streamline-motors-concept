import InventoryPreview from "./InventoryPreview/InventoryPreview";

export default function InventoryList() {
  const pseudoDatabase = [
    {
      carfax: "",
      drivetrain: "AWD",
      id: "0",
      imgSrc:
        "https://scontent.cdninstagram.com/v/t39.30808-6/380293615_18304976152136395_5660976765333031455_n.jpg?stp=dst-jpg_e35_s640x640_sh0.08&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=CAaPoBIUpRgAX95CSBK&edm=APs17CUAAAAA&ccb=7-5&oh=00_AfDfHVUM0Ma6zBmpmL4EHrF9rNpc9aO43L6h38V6IGgzMw&oe=654E6970&_nc_sid=10d13b",
      make: "Subaru",
      mileage: "110,248",
      model: "Outback",
      price: "$4,999",
      transmission_type: "Manual",
      transmission_speed: "5-speed",
      year: "1999",
    },
    {
      carfax: "",
      drivetrain: "FWD",
      id: "1",
      imgSrc:
        "https://www.iihs.org/cdn-cgi/image/width=636/api/ratings/model-year-images/2142/",
      make: "Honda",
      mileage: "95,831",
      model: "Fit",
      price: "$7,499",
      transmission_type: "Automatic",
      year: "2011",
    },
  ];

  const renderItems = pseudoDatabase.map((item) => {
    return <InventoryPreview config={item} key={item.id} />;
  });

  return (
    //ul will need to be a grid with mapped inventory previews inside
    <ul>{renderItems}</ul>
  );
}
