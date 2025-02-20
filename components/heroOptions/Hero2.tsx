"use client";

import { motion } from "framer-motion";

import Image from "@/node_modules/next/image";

export default function BackgroundPaths({
  title,
  img,
  text,
  text2,
}: {
  title: string;
  img: string;
  text?: string;
  text2?: string;
}) {
  const words = title.split(" ");

  return (
    <div className="relative min-h-screen w-full flex  justify-center overflow-hidden">
      <div className="  relative container mx-auto px-4 ">
        <div className="flex my-auto  items-center justify-center  md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="max-w-4xl mr-auto z-10"
          >
            <h1 className="pt-80 font-gagalin text-5xl sm:text-7xl md:text-8xl font-bold mb-8">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className="inline-block z-10 mr-4 last:mr-0"
                >
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className="inline-block text-primary "
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <div className=" text-left">
              <p className="pl-16 font-extrabold text-muted md:text-muted-foreground text-4xl md:text-5xl">
                {text}
              </p>
            </div>
            <div className=" text-left">
              <p className="pl-16 font-extrabold text-muted-foreground text-4xl md:text-5xl">
                {text2}
              </p>
            </div>
          </motion.div>
        </div>

        <Image
          src={img}
          width={1000}
          height={800}
          alt={"lucky fitness"}
          className="absolute md:w-[42%] top-0 right-0 z-0  h-screen object-cover"
        />
      </div>
    </div>
  );
}
