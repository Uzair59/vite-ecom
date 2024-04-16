import React from "react";
import HeroSection from "./HereSection/HereSection";
import Filter from "./Filter/Filter";
import ProductCard from "./ProductCard/ProductCard";
import Track from "../Track/Track";
import Testimonial from "../Testimonial/Testimonial";

function HomeComponent() {
  return (
    <div>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </div>
  );
}

export default HomeComponent;
