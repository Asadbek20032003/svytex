import "./App.css";
import AirDrop from "./components/AirDrop";
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
        <div className="pl-32">
          <div className="container">
            <div className="flex flex-col items-center justify-center" style={{ lineHeight: ".9" }}>
              <p className="text-[76px] font-bold m-0 p-0 ">Инновационный</p>
              <p className="text-[76px] font-medium m-0 p-0 gradient__text">крипто</p>
              <p className="text-[76px] font-bold m-0 p-0">
                Кошелёк <span className="gradient__text">SVYTEX</span>
              </p>
              <p className="text-[11px] pt-[4px] text-[#707070] font-medium">
                SVYTEX WALLET - новая система выводов и пополнений с минимальными комиссиями
              </p>
            </div>
          </div>
        </div>
      </section>
      <AirDrop />
      <Information />
    </>
  );
}

export default App;
