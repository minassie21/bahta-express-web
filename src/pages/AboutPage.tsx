import React from "react";
import { motion } from "framer-motion";
import GiresoLogo from "@/assets/about/Gireso-logo.png";

export default function AboutPage() {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center pt-24 pb-16 bg-gray-50">
      <div className="container px-6 mx-auto max-w-6xl">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-16"
          style={{
            background: "linear-gradient(to bottom, white, #fafafa)",
          }}
        >
          {/* Team Image */}
          <div
            className="w-full h-64 md:h-80 lg:h-96 bg-cover bg-center mb-8"
            style={{
              backgroundImage: `url(${GiresoLogo})`,
            }}
          />

          {/* Meet Our Team */}
          <div className="text-center max-w-2xl mx-auto pb-8 px-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
              GIRESO
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600">
              We Give you Solution based on the Requirement!
            </p>
          </div>
        </motion.div>

        {/* Purpose & Goals */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full"
              style={{
                background: "linear-gradient(135deg, white, #fffaf5)",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Purpose
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Bahta Express Logistics, we exist to simplify the complex,
                connect the distant and empower progress through seamless
                logistics. Every shipment we handle is more than cargo. It is a
                promise delivered, a business empowered, and a community
                strengthened with precision, reliability, and innovation since
                1977!
              </p>
            </div>

            <div
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 h-full"
              style={{
                background: "linear-gradient(135deg, white, #fffaf5)",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Goal
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and innovative logistics partner in
                the region, delivering Speed, Precision and reliability at every
                step.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Values & Principles */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Values & Principles
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                  />
                ),
                title: "Speed & Efficiency",
                description:
                  "We're committed to delivering packages with unmatched speed and efficiency, ensuring your time is valued.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                ),
                title: "Reliability",
                description:
                  "Count on us to deliver your packages safely and on time, every time. Our consistency builds trust.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                ),
                title: "Customer First",
                description:
                  "Your satisfaction drives everything we do. We listen, adapt, and go the extra mile to exceed your expectations.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                ),
                title: "Teamwork",
                description:
                  "Our diverse team collaborates seamlessly, leveraging each member's strengths to deliver exceptional service.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                  />
                ),
                title: "Innovation",
                description:
                  "We continuously innovate our processes and technology to enhance the delivery experience for our customers.",
              },
              {
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                  />
                ),
                title: "Integrity",
                description:
                  "We operate with transparency and honesty in all interactions, building lasting relationships based on trust.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-orange-200"
                style={{
                  background:
                    "linear-gradient(to bottom right, white, #fafafa)",
                }}
              >
                <div className="w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 text-orange-500"
                  >
                    {value.icon}
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-orange-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company History */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeIn}
          className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          style={{
            background: "linear-gradient(to bottom right, white, #fafafa)",
          }}
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Our History</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-center">
            Since 1977, Bahta Express has been pioneering logistics solutions
            across Ethiopia. What began as a small local operation has grown
            into one of the country's most trusted logistics providers,
            connecting Ethiopia to the global market with reliability and
            innovation.
          </p>

          <div className="mt-12 relative border-l-2 border-orange-200 pl-8 ml-4 space-y-10">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-orange-500 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">1977: Our Beginning</h3>
              <p className="text-gray-600">
                Established as a small courier service in Addis Ababa, focusing
                on local deliveries.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-orange-500 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">1990: Expansion</h3>
              <p className="text-gray-600">
                Expanded operations to include international shipping, primarily
                serving Ethiopian diaspora communities.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-orange-500 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">
                2005: Digital Transformation
              </h3>
              <p className="text-gray-600">
                Implemented digital tracking systems and modernized logistics
                operations.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-orange-500 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">2017: Rebranding</h3>
              <p className="text-gray-600">
                Rebranded as GIRESO, embracing innovation and expanding service
                offerings.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[41px] top-0 w-6 h-6 bg-orange-500 rounded-full"></div>
              <h3 className="text-xl font-bold mb-2">Today</h3>
              <p className="text-gray-600">
                Operating as a full-service logistics provider, connecting
                Ethiopia to global markets with cutting-edge solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
