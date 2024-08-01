import Instagram from "../assets/img/instagram.svg";
import Twitteer from "../assets/img/twitter.svg";
import Telegram from "../assets/img/telegram.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center mt-[80px]">
      <h1
        className="md:text-[48px] sm:text-[40px] lm:text-[25px] text-[18px] mb-[2px] font-bold flex items-center flex-col"
        style={{ lineHeight: ".9" }}
      >
        Преимущества платформы
        <span className="gradient__text sm:text-[48px] lm:text-[32px] text-[25px]">SVYTEX</span>
      </h1>
      <div className="flex justify-between items-center gap-3">
        <img src={Telegram} alt="instagram" className="sm:w-[60px] w-[35px] h-[80px] cursor-pointer " />
        <img src={Instagram} alt="instagram" className="sm:w-[60px] w-[35px] h-[80px] cursor-pointer " />
        <img src={Twitteer} alt="twitter" className="sm:w-[70px] w-[35px] h-[80px] cursor-pointer " />
      </div>
    </footer>
  );
};

export default Footer;
