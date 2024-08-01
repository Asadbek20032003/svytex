import coin from "../assets/img/coin.png";
const AirDrop = () => {
  return (
    <section className="bg__image_air flex items-center">
      <div className=" container m-auto">
        <div className="md:justify-between md:flex-row flex  justify-center items-center  w-full">
          <div className="w-full flex flex-col items-start justify-center">
            <h1 className="gradient__text text-[110px] font-bold">AirDrop</h1>
            <p className="text-[20px] text-[#555555] font-bold">
              Получите токены SVYT учавствуя в нашем Ai Prop.
              <br />
              Это простой и легкий способ начать использовать SVYTEX WALLET.
            </p>
          </div>
          <div className=" items-center flex justify-center w-[80%]">
            <img src={coin} alt="coin" className="w-[400px] flex items-center justify-center" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirDrop;
