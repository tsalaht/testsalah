import React from "react";
import { FaArrowLeft } from "react-icons/fa6";

const Single = ({
  name,
  urlFlag,
  popul,
  cont,
  rege,
  natName,
  curDone,
  langDone,
  toLevel,
  sub,
  setDetail,
  setReg
}) => {
  return (
    <div className="w-full flex justify-center items-center h-full bg-gray-100 dark:bg-[#202D36] dark:text-white relative pt-20">
      <div className="absolute top-0 left-0 mb-12 bg-white dark:bg-[#2B3743] shadow w-28 p-2 rounded flex items-center justify-around cursor-pointer" onClick={() =>{
         setDetail(null)
         setReg('All')
      }}>
        <FaArrowLeft /> Back
      </div>
      <div className="w-full h-full flex gap-x-40 items-center flex-col md:flex-row ">
        <img src={urlFlag} alt="" className="w-full md:w-[30%] h-[230px]" />
        <div className="flex w-full md:w-[40%] h-full md:gap-x-16 items-center flex-col md:flex-row">
          <div className="w-full md:w-[40%] mb-10">
            <h2 className="mb-8 font-bold text-lg mt-5">{name}</h2>
            <p className="font-semibold mb-4">
              Native Name: <span className="font-normal dark:text-[#aeaeae]">{natName}</span>{" "}
            </p>
            <p className="font-semibold mb-4">
              Population : <span className="font-normal dark:text-[#aeaeae]">{popul}</span>
            </p>
            <p className="font-semibold mb-4">
              Region : <span className="font-normal dark:text-[#aeaeae]">{rege}</span>
            </p>
            <p className="font-semibold mb-4">
              Sub Region : <span className="font-normal dark:text-[#aeaeae]">{sub}</span>
            </p>
            <p className="font-semibold mb-4">
              Capital : <span className="font-normal dark:text-[#aeaeae]">{cont}</span>
            </p>
          </div>
          <div className="w-full md:w-[40%] ">
            <p className="font-semibold mb-4">
              Top Level Domain : <span className="font-normal dark:text-[#aeaeae]">{toLevel}</span>
            </p>
            <p className="font-semibold mb-4">
              currencies: <span className="font-normal dark:text-[#aeaeae]">{curDone}</span>
            </p>
            <p className="font-semibold mb-4">
              Languages: <span className="font-normal dark:text-[#aeaeae]">{langDone}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
