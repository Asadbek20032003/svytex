import Footer from "./Footer";

const Information = () => {
  return (
    <section className="bg__image_info flex items-center mt-[120px]">
      <div className=" container m-auto">
        <div
          className="lg:pt-[184px] md:pt-[160px] sm:pt-[120px] lm:pt-[80px] pt-[40px] lg:pb-[165px] md:pb-[145px] sm:pb-[105px] lm:pb-[65px] pb-[30px] lg:pr-[113px] md:pr-[80px] sm:pr-[60px] lm:pr-[30px] pr-[10px] md:rounded-[44px] lm:rounded-[22px] rounded-lg flex flex-end flex-col justify-end items-end bg-transparent"
          style={{ border: "4px solid rgb(104, 191, 239)" }}
        >
          <h1 className="title   lg:text-[64px] md:text-[45px] lm:text-[25px] text-[20px]">Информация о проекте</h1>
          <div className="mt-[17px]">
            <div
              className="sm:gap-2 lm:gap-[5px] gap-[2px] cursor-pointer flex justify-between items-center sm:rounded-[15px] rounded-lg md:text-[24px] sm:text-[14px] lm:text-[10px] text-[8px] hover:bg-[#0AADF2] hover:text-[#fff] font-extrabold text-[#0AADF2] bg-transparent md:pt-[24px] pt-[12px] md:pb-[24px] pb-[12px] md:pl-[14px] pl-[9px] md:pr-[38px] pr-[25px]"
              style={{ border: "3px solid rgb(102, 190, 239)" }}
            >
              <svg
                // fill="#0AADF2"
                className="sm:h-[27px] h-[18px] sm:w-[59px] w-[40px] "
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330.00 330.00"
                xmlSpace="preserve"
                strokeWidth="8.58"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.66"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    id="XMLID_8_"
                    d="M315,150H51.213l11.894-11.894c5.858-5.858,5.858-15.355,0-21.213c-5.858-5.858-15.355-5.858-21.213,0 l-37.5,37.5c-5.858,5.858-5.858,15.355,0,21.213l37.5,37.5c2.929,2.929,6.768,4.394,10.606,4.394c3.839,0,7.678-1.464,10.607-4.394 c5.858-5.858,5.858-15.355,0-21.213L51.213,180H315c8.284,0,15-6.716,15-15S323.284,150,315,150z"
                  ></path>
                </g>
              </svg>
              Посмотреть аудит
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
};

export default Information;
