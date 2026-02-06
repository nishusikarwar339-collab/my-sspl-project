"use client";

import React from "react";
import Link from "next/link";
import niyameet from "@/images/niyameet.png";
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

const NiayMeet = () => {
  const features = [
    {
      icon: <MessageSquare className="text-purple-500" size={24} />,
      title: " Unlimited Duration: ",
      description:
        "Conduct long-form meetings and workshops without the frustration of 40-minute time limits.",
    },
    {
      icon: <Zap className="text-purple-500" size={24} />,
      title: "Ultra-HD Quality:",
      description:
        "Crystal-clear video and noise-cancelling audio that automatically adjust to your connection speed.",
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: " Encrypted Privacy: ",
      description:
        "Advanced end-to-end encryption ensures your business conversations and shared files stay confidential.",
    },
    {
      icon: <BarChart3 className="text-purple-500" size={24} />,
      title: "Browser-Based Access:",
      description:
        "Join instantly via a simple link; no bulky software downloads or complex installations required.",
    },
    {
      icon: <Settings2 className="text-purple-500" size={24} />,
      title: "Collaboration Tools:",
      description:
        "High-speed screen sharing, session recording, and real-time chat integrated into one dashboard.",
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
                  Niya Meet
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Communication is the heartbeat of every successful business,
                  but standard tools often fall short when it comes to privacy
                  and session limits. it is built to bridge that gap. .
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
                src={niyameet.src}
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
             Core Features & <br />
              <span className="tracking-tight bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
                {" "}
              Benefits
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
                  src="/videos/niyameetvideo.mp4" // put video in public/videos/
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

export default NiayMeet;
