import { Individualni } from "@/constants/index";
import Image from "@/node_modules/next/image";
import React from "react";

const OneCard = ({
  showOneCard,
  data,
}: {
  showOneCard: boolean;
  data: Individualni;
}) => {
  return (
    <div className={`${showOneCard ? "block" : "hidden"} space-y-5`}>
      <Image
        src={data.img}
        width={500}
        height={500}
        alt={data.title}
        className="w-full object-cover aspect-[1/1]"
      />
      <p className=" text-xl md:text-4xl">{data.text2}</p>
    </div>
  );
};

export default OneCard;
