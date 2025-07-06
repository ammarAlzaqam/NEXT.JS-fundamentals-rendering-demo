"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ImageSlider } from "@/components/ImageSlider";

// import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoute() {
  //   const result = serverSideFunction();
  const settings = {
    dots: true,
  };
  return (
    <section>
      <h1>client Route Page</h1>
      <ImageSlider />
    </section>
  );
}
