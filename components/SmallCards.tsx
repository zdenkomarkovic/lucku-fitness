import React from "react";
import { WorkList } from "@/constants/index";

const SmallCards = ({ item }: { item: WorkList }) => {
  const cardStyle =
    "flex flex-col w-full p-3 md:p-5 text-xl md:text-2xl space-y-3 mx-auto justify-center border border-primary shadow-lg shadow-primary md:flex-1 h-full items-center ";

  const iconClass = "mx-auto text-4xl md:text-5xl text-primary";
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 w-full ">
      <div className={cardStyle}>
        <p className={iconClass}>{<item.icon1 />}</p>
        <p>{item.text1}</p>
      </div>
      <div className={cardStyle}>
        <p className={iconClass}>{<item.icon2 />}</p>
        <p>{item.text2}</p>
      </div>
      <div className={cardStyle}>
        <p className={iconClass}>{<item.icon3 />}</p>
        <p>{item.text3}</p>
      </div>
    </div>
  );
};

export default SmallCards;
