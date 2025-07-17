"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = () => {
      const fakePrice = 0.0000000002 + Math.random() * 0.00000000005;
      setPrice(parseFloat(fakePrice.toFixed(10)));
    };
    fetchPrice();
    const interval = setInterval(fetchPrice, 10000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <main className="bg-gradient-to-b from-blue-900 via-blue-950 to-black text-white min-h-screen">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full backdrop-blur-md bg-blue-900/50 text-white py-4 px-6 flex justify-between items-center shadow-md z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3">
          <Image src="/geovix-logo.png" alt="GeoVix Logo" width={40} height={40} />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
            GeoVix
          </h1>
        </div>
        <div className="flex gap-6">
          <a href="#roadmap" className="hover:text-blue-400 transition">Roadmap</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="text-center py-28 px-4">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="flex justify-center mb-6"
        >
          <Image
            src="/geovix-logo.png"
            alt="GeoVix Logo"
            width={120}
            height={120}
            className="rounded-xl shadow-lg"
          />
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent"
        >
          GeoVix (GVX)
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-lg mb-8 text-gray-300"
        >
          Print Money. Change Lives.
        </motion.p>
        <motion.div
          className="flex justify-center gap-4"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.a
            href="https://pancakeswap.finance/swap?outputCurrency=0xYourTokenAddress"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy with BNB
          </motion.a>
          <motion.a
            href="https://buy.moonpay.com/?apiKey=YOUR_API_KEY"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 transition rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy with Fiat
          </motion.a>
        </motion.div>
        <motion.p
          className="mt-6 text-xl text-blue-400"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          Live Price: {price !== null ? `${price} BNB / GVX` : "Loading..."}
        </motion.p>
      </section>

      {/* TradingView Chart */}
      <section className="px-4 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          Live Trading Chart
        </h2>
        <div className="rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_12345&amp;symbol=BINANCE:BTCUSDT&amp;interval=60&amp;hidesidetoolbar=1&amp;theme=dark"
            style={{ width: "100%", height: "500px" }}
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Roadmap */}
      <motion.section
        id="roadmap"
        className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-950 rounded-lg shadow-inner mx-4 my-8"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {["Launch GeoVix Token", "Lock Liquidity & Grow Community", "Moon Mission 🚀", "GeoVix NFTs & Staking"].map(
            (phase, i) => (
              <motion.div
                key={i}
                className="bg-blue-800 bg-opacity-50 rounded-lg p-6 shadow-lg hover:scale-105 transition"
                variants={fadeInUp}
              >
                <h3 className="text-xl font-semibold text-blue-300 mb-2">
                  Phase {i + 1}
                </h3>
                <p>{phase}</p>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      {/* About */}
      <motion.section
        id="about"
        className="py-16 px-4"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          About GeoVix
        </h2>
        <p className="max-w-3xl mx-auto text-center text-gray-300">
          GeoVix (GVX) is a revolutionary crypto project empowering communities
          by printing money and changing lives. Transparent. Scalable. For the people.
        </p>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        className="py-16 px-4 bg-gradient-to-r from-blue-900 to-blue-950 rounded-lg shadow-inner mx-4 my-8"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
          Contact Us
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Message sent! We'll get back to you.");
          }}
          className="max-w-xl mx-auto grid gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-md bg-blue-800 bg-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-md bg-blue-800 bg-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-md bg-blue-800 bg-opacity-50 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 transition text-white font-bold py-3 rounded-lg shadow-lg"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="text-center text-gray-500 py-6 text-sm"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} GeoVix Token. All rights reserved.
      </motion.footer>
    </main>
  );
}
