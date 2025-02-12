import React from "react";
import { TfiMapAlt } from "react-icons/tfi";
import { CiCreditCard2 } from "react-icons/ci";
import { IoCarSportOutline } from "react-icons/io5";
import { FaPaw } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { PiPiggyBankLight } from "react-icons/pi";

const SmallCards = () => {
  return (
    <div className="px-[8px] lg:container lg:px-[50px] mx-auto text-gray-900 ">
      <div className=" pb-[20px] lg:pb-[50px] px-[8px] lg:px-[50px] border-2 border-cool-green rounded-3xl my-[50px] lg:my-[100px] bg-gray-100">
        <h2 className="text-[45px] lg:text-[80px] text-center py-[30px] lg:py-[80px] font-bold">
          Uvek birajte <span className="text-cool-green">Cool</span> Taksi Niš
        </h2>
        <div className="flex flex-col lg:flex-row flex-wrap gap-[25px] lg:gap-[30px] mx-auto px-auto justify-center">
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <TfiMapAlt className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-cool-green">
              Voznje van grada
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Vozimo do okolnih sela, gradova, do Beograda i dalje u
              inostaranstvo
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <CiCreditCard2 className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-cool-green">
              Placanje karticom
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              U nasim vozilima postoji mogucnost placanja karticom
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <IoCarSportOutline className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-cool-green">
              Nasa flota
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Nasa flota se sastoji vecinski od hibridnih i elektricnih vozila
            </p>
          </div>

          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <PiPiggyBankLight className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-cool-green">
              Placanje preko racuna
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Nase usluge mozete platiti i preko racuna
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <FaWifi className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-cool-green">
              Wi Fi U vozilima
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              U svim nasim vozilima imate mogucnost koriscenja Wi Fi interneta
            </p>
          </div>
          <div className="text-center flex flex-col gap-[3px] lg:gap-[15px] lg:w-[400px]">
            <FaPaw className="mx-auto text-cool-green text-[50px] lg:text-[80px]" />
            <h3 className="text-[25px] lg:text-[30px] text-cool-green">
              Pet frendly
            </h3>
            <p className="text-[18px] lg:text-[24px]">
              Vasi krzneni clanovi porodice su dobrodosli
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallCards;
