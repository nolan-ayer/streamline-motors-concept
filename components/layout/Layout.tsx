import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout(props: any) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
