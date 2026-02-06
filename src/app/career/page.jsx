"use client";
import ApplyForm from "@/components/career/ApplyForm";
import CareerHero from "@/components/career/CareerHero";
import CurrentOpenings from "@/components/career/CurrentOpenings";
import PerksSection from "@/components/career/PerksSection";
import Footer from "@/components/Footer";
import React from "react";


const Career = () => {
  return (
    <div className="min-h-screen">
        <CareerHero/>
        <PerksSection/>
        <CurrentOpenings/>
      {/* <ApplyForm/> */}
      <Footer/>
    </div>
  );
};

export default Career;
