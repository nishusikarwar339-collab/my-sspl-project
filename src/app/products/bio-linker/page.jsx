"use client";

import React from "react";
import Link from "next/link";
import biolinker2 from "@/images/biolinker2.png"
// import vyaparbotvideo from "@/videos/vyaparbotvideo.mp4";
import {
  Zap,
  MessageSquare,
  BarChart3,
  Settings2,
  Globe,
  Clock,
  Brain,
  Users,
  ShieldCheck,
  Puzzle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const BioLinker = () => {
  const features = [
    {
      icon: <MessageSquare className="text-purple-500" size={24} />,
      title: "Professional Bio-Link Architecture",
      description:
        "Stop losing followers to dead ends. Build a centralized landing page that hosts your entire digital world.",
    },
    {
      icon: <Zap className="text-purple-500" size={24} />,
      title: "Precision URL Management & Shortening",
      description:
        "Turn long, suspicious links into clean, trust-building branded URLs. Increase your click-through rates by up to 40% with links that look professional and are easy to share across any platform.",
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: " Smart Dynamic QR Integration",
      description:
        "bridges the gap between offline and online marketing. Generate high-resolution, custom QR codes for business cards and packaging.",
    },
    {
      icon: <BarChart3 className="text-purple-500" size={24} />,
      title: "Real-Time Behavioral Analytics",
      description:
        " Stop guessing and start measuring. Access a comprehensive dashboard that reveals visitor locations, device types, and referral sources. ",
    },
    {
      icon: <Settings2 className="text-purple-500" size={24} />,
      title: "Secure, No-Code Infrastructure ",
      description:
        "Built on the trusted Shakuniya Solutions framework, Biolinkar offers enterprise-grade security with a zero-code interface.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-purple-500/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-7">
        {/* <img
          src={vyaparbot.src}
          className="absolute object-cover w-full h-full blur-xl opacity-20"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
                  Bio Linker
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  In a world of fragmented social media, Biolinkar by Shakuniya
                  Solutions acts as your digital headquarters. Move beyond basic
                  links with a high-performance platform designed to consolidate
                  your online identity, shorten complex URLs, and track every
                  visitor interaction with surgical precision.
                </p>
              </div>

              <div className="bg-[#111827]/50 border border-gray-800 rounded-2xl p-6 inline-block">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                  Starting From
                </p>
                <p className="text-2xl md:text-3xl font-bold">
                  $4999.00 / <span className="text-white">₹3,75,000 INR</span>
                </p>
              </div>

              {/* <div>
                <Button className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white px-8 py-6 rounded-xl text-lg group transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div> */}
            </div>

            <div className=" rounded-3xl hover:border-2 border-purple-500/20 min-h-[500px] hover:scale-105">
              <img
                src={biolinker2.src}
                className="w-full h-full object-cover rounded-2xl hover:shadow-2xs shadow-purple-400/20 transition-all duration-300 "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#020617] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Core Capabilities of the
              <br />
              <span className="tracking-tight bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
                {" "}
                Biolinkar Ecosystem
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className=" min-h-[500px]">
              <div className="relative w-full max-w-3xl">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-purple-500/20 blur-2xl rounded-3xl" />

                {/* Video */}
                <video
                  src="/videos/biolinkervideo.mp4" // put video in public/videos/
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative z-10 w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-2xl hover:border-2 border-purple-500/20 hover:shadow-2xs shadow-purple-500 transition-all duration-300 hover:scale-105 transition-colors group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BioLinker;
