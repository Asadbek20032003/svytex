import Footer from "./Footer";

const Information = () => {
  return (
    <section className="bg__image_info flex items-center mt-[120px]">
      <div className=" container m-auto">
        <div
          className="pt-[184px] pb-[165px] pr-[113px] rounded-[44px] flex flex-end flex-col justify-end items-end bg-transparent"
          style={{ border: "6px solid rgb(104, 191, 239)" }}
        >
          <h1 className="title">Информация о проекте</h1>
          <div className="mt-[17px]">
            <div></div>
            <div
              className="gap-2 flex justify-between items-center rounded-[15px] text-[24px] font-extrabold text-[#0AADF2] bg-transparent pt-[24px] pb-[24px] pl-[14px] pr-[38px]"
              style={{ border: "3px solid rgb(102, 190, 239)" }}
            >
              <svg
                fill="#0AADF2"
                height="27px"
                width="59px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 330.00 330.00"
                xmlSpace="preserve"
                stroke="#0AADF2"
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
