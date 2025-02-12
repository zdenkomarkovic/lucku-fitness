import React from "react";
import Hero2 from "@/components/heroOptions/Hero2";
import Image from "@/node_modules/next/image";

const page = () => {
  return (
    <div>
      <Hero2
        title={"Fitness za decu"}
        img={"/images/lucky-fitness (5).jpg"}
        text2={"Upis je u toku!"}
      />
      <div className="container px-2 md:px-4 mx-auto space-y-8 py-10">
        <h2 className=" text-6xl text-primary text-center py-10 font-gagalin">
          Lucky fitnes sa vama od 2012
        </h2>
        <p className=" first-letter:pl-6 text-xl md:text-4xl">
          Pozivamo vas da se pridružite nasoj druzini i pružite svom detetu
          priliku da se druzeci sa svojim vršnjacima zabavi i razvija uz
          različite aktivnosti i igre.
        </p>
        <p className=" first-letter:pl-6 text-xl md:text-4xl">
          Uz rad sa stručnim osobljem Vasi mališani ce se zabavljati i
          napredovati razvijajući svoje lokomotorne sposobnosti
        </p>
        <div className="flex flex-col gap-4 md:flex-row justify-around ">
          <Image
            src={"/images/lucky-fitness (17).jpg"}
            width={500}
            height={500}
            alt={"fitness za decu"}
            className="w-full md:w-[40%] object-cover h-auto rounded-xl"
          />
          <Image
            src={"/images/lucky-fitness (21).jpg"}
            width={500}
            height={500}
            alt={"fitness za decu"}
            className="w-full md:w-[40%] object-cover h-auto rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
