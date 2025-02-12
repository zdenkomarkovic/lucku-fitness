"use client";

import React, { useState } from "react";
import { workList } from "@/constants/index";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "@/node_modules/next/image";
import raspored from "../public/images/raspored.jpg";
import { CircleX } from "lucide-react";

const Cardlist = () => {
  const [showImage, setShowImage] = useState(false);
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
          {workList.map((item, index) => {
            return (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }} // Naizmenično levo/desno
                whileInView={{ x: 0, opacity: 1 }} // Animira se ka centru
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
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
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
