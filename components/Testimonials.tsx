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
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { TestimonialData, testimonialData } from "@/constants/index";

const Testimonials = () => {
  return (
    <div className="py-10 container px-4 mx-auto">
      <h2 className="text-5xl py-20 text-center text-muted-foreground">
        Nasa ekipa
      </h2>

      <Carousel className="w-full flex">
        <CarouselContent className="-ml-1">
          {testimonialData.map((service, i) => (
            <CarouselItem key={i} className="pl-1 md:basis-1/2 lg:basis-1/3">
              <div className="p-5">
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
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Card className={`bg-primary p-5 rounded-3xl text-white h-[250px]`}>
        <CardHeader>
          <CardTitle className={`text-2xl capitalize text-center py-2`}>
            {service.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="mx-auto ">{service.description}</CardContent>
        <CardFooter></CardFooter>
      </Card>
    </motion.div>
  );
};
