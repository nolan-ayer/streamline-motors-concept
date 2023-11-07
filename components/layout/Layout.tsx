import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MapEmbed from "../ui/MapEmbed/MapEmbed";
import HeaderPromo from "./Header/HeaderPromo";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      {props.showHeader && <HeaderPromo />}
      <main>{props.children}</main>
      <MapEmbed />
      <Footer />
    </>
  );
}
