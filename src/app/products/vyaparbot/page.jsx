"use client";

import React from "react";
import Link from "next/link";
import vyaparbot from "@/images/vyaparbot.png";
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
  ArrowRight,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const VyaparbotPage = () => {
  const features = [
    {
      icon: <MessageSquare className="text-purple-500" size={24} />,
      title: "Intelligent Automation & 24/7 Support",
      description:
        "Provide instant, intelligent answers to common customer questions, day or night, without expanding your team.",
    },
    {
      icon: <Zap className="text-purple-500" size={24} />,
      title: " Targeted Marketing & Campaigns",
      description:
        "Move beyond generic blasts. Send hyper-personalized promotions, offers, and reminders to specific customer groups.",
    },
    {
      icon: <Users className="text-purple-500" size={24} />,
      title: "Seamless Integration & Operations",
      description:
        "Easily integrate VyaparBot with your website, existing CRM, ERP, or any other business software for a unified workflow.",
    },
    {
      icon: <BarChart3 className="text-purple-500" size={24} />,
      title: "Unified CRM & Team Collaboration",
      description:
        "Bring all team chats into one organized, collaborative space. No more missed messages or chaotic spreadsheets.",
    },
    {
      icon: <Settings2 className="text-purple-500" size={24} />,
      title: "Built by Experts for Scalable Growth",
      description:
        "Built by a full-spectrum IT consulting and digital growth company with a proven track record.",
    },
  ];

  const enterpriseSolutions = [
    {
      icon: <Globe className="text-purple-400" size={24} />,
      title: "Omnichannel Presence",
      description:
        "Deploy your bot across multiple platforms simultaneously, ensuring consistent customer experience everywhere.",
    },
    {
      icon: <Clock className="text-purple-400" size={24} />,
      title: "24/7 Availability",
      description:
        "Never miss a customer query. Vyaparbot works round the clock, handling inquiries even when your team is offline.",
    },
    {
      icon: <Brain className="text-purple-400" size={24} />,
      title: "Smart Learning",
      description:
        "Machine learning algorithms that improve responses over time based on customer interactions and feedback.",
    },
    {
      icon: <Users className="text-purple-400" size={24} />,
      title: "Lead Generation",
      description:
        "Automatically capture and qualify leads through intelligent conversation flows and data collection.",
    },
    {
      icon: <ShieldCheck className="text-purple-400" size={24} />,
      title: "Enterprise Security",
      description:
        "Bank-grade encryption and data protection to keep your customer information safe and compliant.",
    },
    {
      icon: <Puzzle className="text-purple-400" size={24} />,
      title: "Easy Integration",
      description:
        "Seamless integration with your existing CRM, helpdesk, and business tools through robust APIs.",
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
                <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                  <span className="text-white">Vyapar</span>
                  <span className="text-cyan-400">bot</span>
                </h1>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Vyaparbot is an intelligent AI-powered business automation bot
                  that streamlines your operations. Handle customer queries,
                  automate repetitive tasks, and provide 24/7 support with our
                  cutting-edge chatbot solution designed for modern businesses.
                </p>
              </div>

              <div className="bg-[#111827]/50 border border-gray-800 rounded-2xl p-6 inline-block">
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 font-semibold">
                  STARTING FROM
                </p>
                <p className="text-2xl md:text-3xl font-bold">
                  $4999.00 / <span className="text-white">₹3,75,000 INR</span>
                </p>
              </div>

              <div>
                <Button className="bg-[#9333ea] hover:bg-[#a855f7] text-white px-8 py-6 rounded-xl text-lg font-semibold group transition-all duration-300">
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </div>
            </div>

            <div className="relative group">
              <div className="aspect-[16/10] bg-gradient-to-br from-[#1e1b4b] via-[#0f172a] to-[#1e1b4b] rounded-3xl border border-gray-800 flex items-center justify-center overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
                <Bot
                  size={120}
                  className="text-purple-400 relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#020617] text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Here's what you get with <br />
              <span className="tracking-tight bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#22d3ee] bg-clip-text text-transparent">
                {" "}
                VyaparBot
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
                  src="/videos/vyaparbotvideo.mp4" // put video in public/videos/
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

      {/* Enterprise Solutions Section */}
      {/* <section className="py-24 bg-[#020617] relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Enterprise-Grade Solutions
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              for Your Business
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-[#111827]/50 border border-gray-800 p-8 rounded-3xl hover:border-purple-500/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                  {solution.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{solution.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default VyaparbotPage;
