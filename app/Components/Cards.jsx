import React from "react";

const Cards = () => {
  return (
    <div data-scroll-section data-scroll-speed='-.5' className="w-full h-full mt-50 p-10 flex  justify-center items-center gap-5">
      <div className="container w-1/2 h-[60vh] bg-[#004D43] flex justify-center items-center  rounded-lg relative">
        <img
          src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          alt="ochi"
        />

        <button className="absolute bottom-4 left-4 border-[1px] border-amber-400 text-amber-400 p-1 rounded-lg text-sm">
          &copy 2020-2025
        </button>
      </div>

      <div className="container w-1/2 h-[60vh]  flex justify-center items-center  relative gap-2">
        <div className="w-1/2 h-full bg-[#212121] flex justify-center items-center rounded-lg ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="ochi"
          />
          <button className="absolute bottom-4 left-4 border-[1px] border-amber-400 text-amber-400 p-1 rounded-lg text-sm">
            &copy 2020-2025
          </button>
        </div>
        <div className="w-1/2 h-full bg-[#212121] flex justify-center items-center flex-col gap-2 relative rounded-lg ">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="ochi"
          />
          <button className="absolute bottom-4 left-4 border-[1px] border-text-amber-400 p-1 rounded-lg text-sm">
            &copy 2020-2025
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
