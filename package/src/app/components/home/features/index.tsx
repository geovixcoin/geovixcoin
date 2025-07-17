"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FeaturesSkeleton from "../../Skeleton/Features";
import { FeatureType } from "@/app/types/features";

const Features = () => {
  const [featuresdata, setFeaturesdata] = useState<FeatureType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setFeaturesdata(data?.Featuresdata);
      } catch (error) {
        console.error("Error fetching features:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="features-section" className="scroll-mt-20">
      <div className="container mx-auto relative px-4 py-16">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-20 blur-3xl"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="mb-12 text-center">
            <p className="text-blue-600 text-lg font-semibold mb-2 tracking-wide">
              FEATURES
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              The Most Trusted Platform for Digital Currency
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover powerful tools designed to help you securely buy, sell,
              and manage your crypto assets — trusted by traders, investors, and
              businesses worldwide.
            </p>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {loading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <FeaturesSkeleton key={i} />
                ))
              : featuresdata?.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:scale-105 transition-transform"
                  >
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-md mx-auto">
                      <Image
                        src={item.imgSrc}
                        alt={item.heading}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800 text-center">
                      {item.heading}
                    </h5>
                    <p className="text-gray-500 text-center">
                      {item.subheading}
                    </p>
                  </motion.div>
                ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
