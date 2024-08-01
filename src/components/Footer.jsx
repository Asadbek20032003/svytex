import Instagram from "../assets/img/instagram.svg";
import Twitteer from "../assets/img/twitter.svg";
import Telegram from "../assets/img/telegram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-[80px]">
      <h1 className="text-[48px] mb-[2px] font-bold flex items-center flex-col" style={{ lineHeight: ".9" }}>
        Преимущества платформы
        <span className="gradient__text text-[48px]">SVYTEX</span>
      </h1>
      <div className="flex justify-between items-center gap-3">
        <img src={Telegram} alt="instagram" className="w-[60px] h-[80px] " />
        <img src={Instagram} alt="instagram" className="w-[60px] h-[80px] " />
        <img src={Twitteer} alt="twitter" className="w-[70px] h-[80px] " />
      </div>
    </footer>
  );
};

export default Footer;
