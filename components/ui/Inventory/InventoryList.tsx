import InventoryPreview from "./InventoryPreview/InventoryPreview";

export default function InventoryList() {
  const pseudoDatabase = [
    {
      carfax: "",
      drivetrain: "AWD",
      id: "0",
      imgSrc:
        "https://pyxis.nymag.com/v1/imgs/0c5/d3e/25880b94334781d369586c685f45d0558a-15-trump-pepe.rsquare.w400.jpg",
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
        "https://pyxis.nymag.com/v1/imgs/0c5/d3e/25880b94334781d369586c685f45d0558a-15-trump-pepe.rsquare.w400.jpg",
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
