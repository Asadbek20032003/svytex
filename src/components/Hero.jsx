const Hero = () => {
  return (
    <div className="mf:pl-32 lm:pl-24 pl-6">
      <div className="container">
        <div className="flex flex-col items-center justify-center" style={{ lineHeight: ".9" }}>
          <p className="mf:text-[76px] sm:text-[55px]  lm:text-[35px] text-[25px] font-bold m-0 p-0 ">Инновационный</p>
          <p className="mf:text-[76px] sm:text-[55px]  lm:text-[35px] text-[25px] font-medium m-0 p-0 gradient__text">
            крипто
          </p>
          <p className="mf:text-[76px] sm:text-[55px]  lm:text-[35px] text-[25px] font-bold m-0 p-0">
            Кошелёк <span className="gradient__text">SVYTEX</span>
          </p>
          <p className="mf:text-[11px] sm:text-[8px] lm:text-[5px] text-[3px] pt-[4px] text-[#707070] font-medium">
            SVYTEX WALLET - новая система выводов и пополнений с минимальными комиссиями
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
