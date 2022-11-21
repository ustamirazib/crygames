import React, { useRef } from "react";
import images from "../../../assets";

type TCash = {
  cash: number;
};
const PB: React.FC = () => {
  const listDiv = useRef(null);

  const ListCash: TCash[] = [
    {
      cash: 1200,
    },
    {
      cash: 2400,
    },
    {
      cash: 6000,
    },
    {
      cash: 12000,
    },
  ];
  const selectHandler = () => {
    const list = listDiv.current;
  };
  return (
    <section className=" pt-10 min-h-screen">
      <div className=" w-full absolute flex justify-center -z-50">
        <div className="absolute -top-14 w-[380px] h-[380px] bg-[#882AE2] rounded-full filter blur-3xl opacity-30"></div>
        <div className=" relative top-44 w-72 h-72  bg-[#D65A4A] rounded-full filter blur-3xl opacity-30"></div>
        <div className="relative top-24 w-72 h-72 bg-[#23459C] rounded-full filter blur-3xl opacity-30"></div>
      </div>
      <div className=" flex justify-center items-center flex-col antialiased mt-12 space-y-5">
        <section className="flex space-x-3 p-2 cursor-pointer bg-white rounded-md">
          <img
            className=" w-20 h-20"
            src={images.PB}
            alt="Top up Point blank"
          />
          <div className="flex flex-col">
            <h1 className=" text-cg_color_primary font-cg_font_primary_bold">
              Poin Blank Cash
            </h1>
            <p className=" font-cg_font_primary_regular text-[#838383] mb-1">
              Zeppeto
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </div>
        </section>
        <div className=" w-80 h-44 p-3 rounded-md  ">
          <div className="grid grid-cols-2 py-5 px-3 gap-6 text-center">
            {ListCash.map((list) => {
              return (
                <div
                  ref={listDiv}
                  onClick={selectHandler}
                  className=" flex py-2 items-center justify-center gap-1 border-2 border-gray-800 rounded-md font-cg_font_primary_bold text-cg_color_primary antialiased hover:ring hover:ring-[#4E04E0] cursor-pointer"
                >
                  <svg
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1875 5.04688C15.1875 6.85029 12.417 8.3125 9 8.3125C5.583 8.3125 2.8125 6.85029 2.8125 5.04688M15.1875 5.04688C15.1875 3.24346 12.417 1.78125 9 1.78125C5.583 1.78125 2.8125 3.24346 2.8125 5.04688M15.1875 5.04688V13.9531C15.1875 15.7565 12.417 17.2188 9 17.2188C5.583 17.2188 2.8125 15.7565 2.8125 13.9531V5.04688M15.1875 5.04688V8.01563M2.8125 5.04688V8.01563M15.1875 8.01563V10.9844C15.1875 12.7878 12.417 14.25 9 14.25C5.583 14.25 2.8125 12.7878 2.8125 10.9844V8.01563M15.1875 8.01563C15.1875 9.81904 12.417 11.2813 9 11.2813C5.583 11.2813 2.8125 9.81904 2.8125 8.01563"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <h2 className="">{list.cash} Cash</h2>
                </div>
              );
            })}
          </div>

          <button className=" flex gap-3 items-center ml-3 px-4 py-2 bg-[#98949C] rounded-md relative bottom-0 text-[#BFBFBF] font-cg_font_primary_regular w-1/2 sm:w-auto cursor-not-allowed">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_172_2)">
                <path
                  d="M29.9827 13.7631C29.5577 6.51306 22.9702 0.925563 15.3827 2.17556C10.1577 3.03806 5.97019 7.27556 5.15769 12.5006C4.68269 15.5256 5.30769 18.3881 6.67019 20.7506L5.55769 24.8881C5.30769 25.8256 6.17019 26.6756 7.09519 26.4131L11.1702 25.2881C13.0202 26.3756 15.1827 27.0006 17.4952 27.0006C24.5452 27.0006 30.3952 20.7881 29.9827 13.7631ZM23.6077 19.1506C23.3062 19.7689 22.7912 20.2573 22.1577 20.5256C21.7827 20.6881 21.3702 20.7631 20.9327 20.7631C20.2952 20.7631 19.6077 20.6131 18.8952 20.3006C18.1358 19.9671 17.4149 19.5522 16.7452 19.0631C16.0202 18.5381 15.3452 17.9506 14.6952 17.3131C14.0452 16.6631 13.4702 15.9756 12.9452 15.2631C12.4327 14.5506 12.0202 13.8381 11.7202 13.1256C11.4202 12.4131 11.2702 11.7256 11.2702 11.0756C11.2702 10.6506 11.3452 10.2381 11.4952 9.86306C11.6452 9.47556 11.8827 9.12556 12.2202 8.81306C12.6202 8.41306 13.0577 8.22556 13.5202 8.22556C13.6952 8.22556 13.8702 8.26306 14.0327 8.33806C14.1952 8.41306 14.3452 8.52556 14.4577 8.68806L15.9077 10.7381C16.0202 10.9006 16.1077 11.0381 16.1577 11.1756C16.2202 11.3131 16.2452 11.4381 16.2452 11.5631C16.2452 11.7131 16.1952 11.8631 16.1077 12.0131C16.0202 12.1631 15.9077 12.3131 15.7577 12.4631L15.2827 12.9631C15.2077 13.0381 15.1827 13.1131 15.1827 13.2131C15.1827 13.2631 15.1952 13.3131 15.2077 13.3631C15.2327 13.4131 15.2452 13.4506 15.2577 13.4881C15.3702 13.7006 15.5702 13.9631 15.8452 14.2881C16.4304 14.9758 17.07 15.6153 17.7577 16.2006C18.0827 16.4756 18.3577 16.6631 18.5702 16.7756C18.6077 16.7881 18.6452 16.8131 18.6827 16.8256C18.7327 16.8506 18.7827 16.8506 18.8452 16.8506C18.9577 16.8506 19.0327 16.8131 19.1077 16.7381L19.5827 16.2631C19.7452 16.1006 19.8952 15.9881 20.0327 15.9131C20.1827 15.8256 20.3202 15.7756 20.4827 15.7756C20.6077 15.7756 20.7327 15.8006 20.8702 15.8631C21.0077 15.9256 21.1577 16.0006 21.3077 16.1131L23.3827 17.5881C23.5452 17.7006 23.6577 17.8381 23.7327 17.9881C23.7952 18.1506 23.8327 18.3006 23.8327 18.4756C23.7577 18.6881 23.7077 18.9256 23.6077 19.1506V19.1506Z"
                  fill="#B5B4B6"
                />
              </g>
              <defs>
                <clipPath id="clip0_172_2">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Konfirmasi
          </button>
        </div>
      </div>
    </section>
  );
};

export default PB;
