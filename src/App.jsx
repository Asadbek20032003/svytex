import "./App.css";
import AirDrop from "./components/AirDrop";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Navbar from "./components/Navbar";

function App() {
  // const backgroundStyle = {
  //   backgroundImage: "url('./assets/img/1.png')",
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   height: "100vh",
  //   width: "100%",
  // };

  return (
    <>
      <section className=" relative flex items-center bg__image">
        <header>
          <Navbar />
        </header>
        <Hero />
      </section>
      <AirDrop />
      <Information />
    </>
  );
}

export default App;
