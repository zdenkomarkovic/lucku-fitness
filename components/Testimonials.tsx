"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TestimonialData, testimonialData } from "@/constants/index";
import Autoplay from "embla-carousel-autoplay";

const Testimonials = () => {
  return (
    <div className="py-10 container px-4 mx-auto">
      <Carousel
        className="w-full overflow-hidden"
        opts={{ loop: true }}
        plugins={[
          Autoplay({
            stopOnInteraction: false,
            stopOnFocusIn: false,
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent className="flex gap-4 px-6">
          {testimonialData.map((service, i) => (
            <CarouselItem
              key={i}
              className="-ml-10 pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-5 h-full flex flex-col">
                <TestemonialCard service={service}></TestemonialCard>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Testimonials;

const TestemonialCard = ({ service }: { service: TestimonialData }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className=" h-full md:p-3"
    >
      <Card className={`bg-primary  rounded-3xl text-white h-full p-5`}>
        <CardHeader>
          <CardTitle className={`text-2xl text-white capitalize text-center `}>
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="mx-auto text-white">
          {service.description}
        </CardContent>
      </Card>
    </motion.div>
  );
};
