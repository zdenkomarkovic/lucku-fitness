"use client";

import React, { useState } from "react";
import { individualni, workList } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "@/node_modules/next/image";
import raspored from "../public/images/raspored.jpg";
import { CircleX } from "lucide-react";
import { IoIosPeople } from "react-icons/io";
import { IoIosPerson } from "react-icons/io";
import SmallCards from "./SmallCards";

const Cardlist = () => {
  const [showImage, setShowImage] = useState(false);
  const [showCards, setShowCards] = useState(false);
  const [showOneCard, setShowOneCard] = useState(false);
  const [showCardState, setShowCardState] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleCard = (index: number) => {
    setShowCardState((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="py-10">
      <div
        className={`z-50 bg-muted-foreground fixed w-full h-screen left-0 right-0 top-0 ${
          showImage ? "block " : "hidden"
        }`}
      >
        <Image src={raspored} alt="fitness" fill className="object-contain" />

        <button
          onClick={() => setShowImage(false)}
          className="absolute right-2 top-10 transform -translate-y-1/2 bg-black/50 text-muted p-2 rounded-full"
        >
          <CircleX className="w-6 h-6" />
        </button>
      </div>
      <div className="container px-2 md:px-4 mx-auto ">
        <div className=" flex flex-col gap-4 md:gap-6 overflow-hidden">
          <motion.div
            initial={{ x: -100, opacity: 0 }} // Naizmenično levo/desno
            whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex justify-start w-full`}
          >
            <Card className="  md:w-3/4 shadow-lg md:p-5">
              <CardHeader>
                <CardTitle className="font-gagalin flex gap-5 text-2xl md:text-5xl items-center mx-auto text-primary">
                  <span className="text-4xl md:text-8xl">
                    <IoIosPeople />
                  </span>
                  Grupni treninzi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className=" first-letter:pl-6 text-xl md:text-4xl">
                  Oblikuj svoje telo i poboljšaj kondiciju uz dinamične grupne
                  treninge! Vežbaj u motivišućem okruženju, uz stručno vođstvo i
                  podršku tima. Pridruži se i zajedno postižemo ciljeve!
                </p>
                <p
                  onClick={() => setShowCards(true)}
                  className={`${
                    showCards ? "hidden" : "block"
                  } text-xl md:text-4xl text-right pr-10 cursor-pointer text-primary`}
                >
                  Saznaj više...
                </p>
                <p
                  onClick={() => setShowCards(false)}
                  className={`${
                    showCards ? "block" : "hidden"
                  } text-xl md:text-4xl text-right pr-10 cursor-pointer text-primary`}
                >
                  Zatvori
                </p>
              </CardContent>
            </Card>
          </motion.div>
          {showCards &&
            workList.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? 100 : -100, opacity: 0 }} // Naizmenično levo/desno
                  whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`flex ${
                    index % 2 === 0 ? "justify-end" : "justify-start"
                  } w-full`}
                >
                  <Card className="  md:w-3/4 shadow-lg md:p-5">
                    <CardHeader>
                      <CardTitle className="font-gagalin flex gap-5 text-2xl md:text-5xl items-center mx-auto text-primary">
                        <span className="text-4xl md:text-8xl">
                          {<item.icon />}
                        </span>
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className=" first-letter:pl-6 text-xl md:text-4xl">
                        {item.text}
                      </p>
                      {showCardState[index] && (
                        <div className={`space-y-5`}>
                          <Image
                            src={item.img}
                            width={500}
                            height={500}
                            alt={item.title}
                            className="w-full object-cover aspect-square"
                          />
                          <SmallCards item={item} />
                        </div>
                      )}

                      <button
                        onClick={() => toggleCard(index)}
                        className=" flex ml-auto pr-10 text-xl md:text-4xl cursor-pointer  text-primary"
                      >
                        {showCardState[index] ? "Zatvori" : "Saznaj više..."}
                      </button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          <motion.div
            initial={{ x: 100, opacity: 0 }} // Naizmenično levo/desno
            whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex justify-end w-full`}
          >
            <Card className="  md:w-3/4 shadow-lg md:p-5">
              <CardHeader>
                <CardTitle className="font-gagalin flex gap-5 text-2xl md:text-5xl items-center mx-auto text-primary">
                  <span className="text-4xl md:text-8xl">
                    <IoIosPerson />
                  </span>
                  Individualni treninzi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className=" first-letter:pl-6 text-xl md:text-4xl">
                  Ostvari maksimalne rezultate uz personalizovane individualne
                  treninge! Treniraj prema svom tempu, uz stručnu podršku i plan
                  prilagođen tvojim ciljevima. Fokus je na tebi!
                </p>
                <div
                  className={`${showOneCard ? "block" : "hidden"} space-y-5`}
                >
                  <Image
                    src={individualni.img}
                    width={500}
                    height={500}
                    alt={"individualnui trening"}
                    className="w-full  object-cover aspect-square"
                  />
                  <SmallCards item={individualni} />
                </div>

                <p
                  onClick={() => setShowOneCard(true)}
                  className={`${
                    showOneCard ? "hidden" : "block"
                  } text-xl md:text-4xl text-right pr-10 cursor-pointer text-primary`}
                >
                  Saznaj više...
                </p>
                <p
                  onClick={() => setShowOneCard(false)}
                  className={`${
                    showOneCard ? "block" : "hidden"
                  } text-xl md:text-4xl text-right pr-10 cursor-pointer text-primary`}
                >
                  Zatvori
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`flex justify-end w-full`}
          >
            <Card className="  w-full shadow-lg md:p-5">
              <CardHeader>
                <CardTitle className="font-gagalin flex gap-5 text-2xl md:text-5xl items-center mx-auto text-primary">
                  Raspored
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <Image
                  onClick={() => setShowImage(true)}
                  src={raspored}
                  width={500}
                  height={500}
                  alt={"fitness"}
                  className="w-full aspect-[16/8]"
                />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cardlist;
