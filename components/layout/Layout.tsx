import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MapEmbed from "../ui/MapEmbed/MapEmbed";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <MapEmbed />
      <Footer />
    </>
  );
}
