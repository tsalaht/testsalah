import React, { useEffect, useState } from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { AiOutlineCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import Single from "./Single";
import { IoMoonOutline } from "react-icons/io5";
import { FaSun } from "react-icons/fa";

const url = "https://restcountries.com/v3.1/all";

export const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    try {
      const response = await fetch(url);
      const countriesData = await response.json();
      setCountries(countriesData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchCountries();
    setReg("All");
    setIsdown(false);
  }, []);
  const [isdown, setIsdown] = useState(false);
  const [reg, setReg] = useState("All");
  const [detail, setDetail] = useState(null);
  const [dark, setDark] = useState(false);

  return (
    <div className={`${dark ? "dark" : ""}`}>
      <div className=" w-full  px-6 py-4 shadow-2xl bg-white dark:bg-[#172027] dark:text-white ">
        <div className=" w-full  flex justify-between items-center">
          <h1 className=" text-2xl font-bold">Where in the world?</h1>
          <div className=" flex cursor-pointer" onClick={() => setDark(!dark)}>
            <div>
              {!dark ? (
                <IoMoonOutline size={25} className=" mr-3" />
              ) : (
                <FaSun size={25} className=" mr-3" />
              )}
            </div>{" "}
            {`${dark ? "light" : "dark"}`} mode
          </div>
        </div>
      </div>

      <div className="w-full p-4  bg-gray-100 dark:bg-[#202D36]">
        <div
          className={`${
            !detail
              ? "w-full flex flex-wrap justify-between items-center dark:bg-[#202D36] dark:text-white"
              : "w-full hidden flex-wrap justify-between items-center dark:bg-[#202D36] dark:text-white"
          } `}
        >
          <div className="w-full sm:w-[30%] shadow-xl dark:bg-[#161e24] bg-white flex py-3 px-7 rounded mb-12 mt-12 cursor-pointer ">
            <HiOutlineMagnifyingGlass
              size={25}
              className=" mr-3 dark:text-white"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder=" searche for country"
              className=" focus:outline-none w-full dark:bg-[#161e24] "
            />
          </div>
          <div
            className=" shadow-2xl bg-white dark:bg-[#161e24] dark:text-white w-36  mb-4 rounded py-3 px-7 cursor-pointer relative"
            onClick={() => setIsdown(!isdown)}
          >
            <div className=" flex justify-between items-center dark:bg-[#161e24] dark:text-white">
              <input
                type="text"
                value={reg}
                className=" w-full focus:outline-none cursor-pointer dark:bg-[#161e24]"
                readOnly
              />
              {isdown ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
            </div>
            <div
              className={` ${
                !isdown
                  ? "hidden  absolute mt-6 bg-white z-20 w-36 left-0 p-4 shadow-lg dark:bg-[#161e24]"
                  : "absolute mt-6 bg-white z-20 w-36 left-0 p-4 shadow-lg mb-3 dark:bg-[#161e24]"
              } `}
            >
              <h3
                data-region="All"
                className="mb-2 cursor-pointer hover:bg-gray-300 px-2 dark:hover:bg-gray-950"
                onClick={(e) => setReg(e.target.dataset.region)}
              >
                All
              </h3>
              <h3
                data-region="Americas"
                className="mb-2 cursor-pointer hover:bg-gray-300 px-2 dark:hover:bg-gray-950"
                onClick={(e) => setReg(e.target.dataset.region)}
              >
                Americas
              </h3>
              <h3
                data-region="Africa"
                className="mb-2 cursor-pointer hover:bg-gray-300 px-2 dark:hover:bg-gray-950"
                onClick={(e) => setReg(e.target.dataset.region)}
              >
                Africa
              </h3>
              <h3
                data-region="Europe"
                className="mb-2 cursor-pointer hover:bg-gray-300 px-2 dark:hover:bg-gray-950"
                onClick={(e) => setReg(e.target.dataset.region)}
              >
                Europe
              </h3>
              <h3
                data-region="Oceania"
                className="mb-2 cursor-pointer hover:bg-gray-300 px-2 dark:hover:bg-gray-950"
                onClick={(e) => setReg(e.target.dataset.region)}
              >
                Oceania
              </h3>
              <h3
                data-region="Asia"
                className="mb-2 cursor-pointer hover:bg-gray-300 px-2 dark:hover:bg-gray-950"
                onClick={(e) => setReg(e.target.dataset.region)}
              >
                Asia
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex  flex-wrap justify-between items-center gap-[75px]  px-14 sm:px-0 ">
          {countries.map((country) => {
            const name = country.name.common;
            const urlFlag = country.flags.png;
            const popul = country.population;
            const cont = country.capital
              ? country.capital.join("")
              : "no capital found";
            const rege = country.region;
            const nati = country.name.nativeName;
            const natName = nati
              ? Object.values(nati).map((i) => i.common)
              : "no Native Name found";
            const cur = country.currencies;
            const curDone = cur
              ? Object.values(cur).map((i) => i.name)
              : "No currencies found";
            const lang = country.languages || {};
            const langDone = Object.values(lang).join("  ");
            const toLevel = country.tld
              ? country.tld.join(" ")
              : "No tld found";
            const sub = country.subregion || "No subregion found";
            if (rege === reg) {
              return (
                <div
                  key={name}
                  className={`${
                    !detail
                      ? "w-full sm:w-60 bg-white cursor-pointer hover:scale-105 dark:bg-[#161e24] dark:text-white"
                      : "hidden w-full sm:w-60 bg-white cursor-pointer hover:scale-105 dark:bg-[#161e24] dark:text-white"
                  }`}
                  onClick={() => {
                    setReg(rege);
                    setDetail(name);
                    console.log(detail);
                  }}
                >
                  <img
                    src={urlFlag}
                    alt=""
                    className=" w-full h-32 shadow-md"
                  />
                  <div className=" pb-8 px-4 py-4 w-full">
                    <h2 className=" mb-6 font-bold text-lg">{name}</h2>
                    <p className=" mb-2">
                      Population :{" "}
                      <span className="dark:text-[#aeaeae]">{popul}</span>
                    </p>
                    <p className=" mb-2">
                      Region :{" "}
                      <span className="dark:text-[#aeaeae]">{rege}</span>
                    </p>
                    <p className=" mb-2">
                      Capital :{" "}
                      <span className="dark:text-[#aeaeae]">{cont}</span>
                    </p>
                  </div>
                </div>
              );
            } else if (reg === "All") {
              return (
                <div
                  key={name}
                  className={`${
                    !detail
                      ? "w-full sm:w-60 bg-white cursor-pointer hover:scale-105 dark:bg-[#161e24] dark:text-white"
                      : "hidden w-full sm:w-60 bg-white cursor-pointer hover:scale-105 dark:bg-[#161e24] dark:text-white"
                  }`}
                  onClick={() => {
                    setReg(name);
                    setDetail(name);
                    console.log(detail);
                  }}
                >
                  <img
                    src={urlFlag}
                    alt=""
                    className=" w-full h-32 shadow-md"
                  />
                  <div className=" pb-8 px-4 py-4 w-full">
                    <h2 className=" mb-6 font-bold text-lg">{name}</h2>
                    <p className=" mb-2">
                      Population :{" "}
                      <span className="dark:text-[#aeaeae]">{popul}</span>
                    </p>
                    <p className=" mb-2">
                      Region :{" "}
                      <span className="dark:text-[#aeaeae]">{rege}</span>
                    </p>
                    <p className=" mb-2">
                      Capital :{" "}
                      <span className="dark:text-[#aeaeae]">{cont}</span>
                    </p>
                  </div>
                </div>
              );
            }
            if (detail && name === reg) {
              return (
                <Single
                  key={name}
                  name={detail}
                  urlFlag={urlFlag}
                  popul={popul}
                  cont={cont}
                  rege={rege}
                  natName={natName}
                  curDone={curDone}
                  langDone={langDone}
                  toLevel={toLevel}
                  sub={sub}
                  detail={detail}
                  setDetail={setDetail}
                  setReg={setReg}
                />
              );
            }
            return "";
          })}
        </div>
      </div>
    </div>
  );
};
