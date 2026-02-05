import React from "react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      title: "SaaS - Website Design",
      image: "/awsmd.com/awsmd.com/img/portfolio-2.webp",
    },
    {
      title: "Mobile AI App",
      image: "/awsmd.com/awsmd.com/img/portfolio-4.webp",
    },
    {
      title: "Lattice - HR Management Landing Page",
      image: "/awsmd.com/awsmd.com/img/portfolio-6.webp",
    },
    {
      title: "AI Platform's Onboarding",
      image: "/awsmd.com/awsmd.com/_next/static/media/texture-1.e7b6d3a7.jpg",
    },
    {
      title: "AR Tool Landing Page",
      image: "/awsmd.com/awsmd.com/_next/static/media/texture-2.42807562.jpg",
    },
    {
      title: "Social Media App",
      image: "/awsmd.com/awsmd.com/img/portfolio-2.webp",
    },
  ];

  const latestCases = [
    {
      title: "UI UX Design And Mobile Development for Fintech App",
      description:
        "In Syfter App, we made it easy for people to invest into crypto and stock market assets with its user friendly interface and interactive swiping experience",
      media: "/awsmd.com/awsmd.com/media/portfolio-5.compressed.mp4",
    },
    {
      title: "Mobile App Design and Development for NFT Marketplace",
      description:
        "We created slick design for nft app that brings nft market right into users smartphone allowing them to trade tokens and share with their friends.",
      media: "/awsmd.com/awsmd.com/media/development/phone.mp4",
    },
    {
      title: "Modern Design And Development of Ecommerce App",
      description:
        "Retlify - is an ecommerce app that broadens limits of users and sellers by offering them interactive and innovative shopping experience",
      media: "/awsmd.com/awsmd.com/_next/static/media/texture-1.e7b6d3a7.jpg", // placeholder image
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            03 — Our Portfolio
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our user-centered design encourages productivity and boosts revenue.
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-black mb-8">
            We don't do cookie-cutter solutions
          </h3>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Schedule Meeting
          </button>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg bg-gray-100 h-64">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <h4 className="text-white text-xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Check Full Portfolio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
            Check Full Portfolio
          </button>
        </motion.div>

        {/* Data Science Quote */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-gray-700 italic">
            Numbers don't lie so we use Data Science to drive calculated growth
          </p>
        </motion.div>

        {/* Latest Cases */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Latest Cases
          </h3>
        </motion.div>

        <div className="space-y-16">
          {latestCases.map((caseItem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex-1">
                <h4 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {caseItem.title}
                </h4>
                <p className="text-lg text-gray-600">{caseItem.description}</p>
              </div>
              <div className="flex-1">
                {caseItem.media.endsWith(".mp4") ? (
                  <video
                    src={caseItem.media}
                    className="w-full h-64 object-cover rounded-lg"
                    controls
                    muted
                    loop
                  />
                ) : (
                  <img
                    src={caseItem.media}
                    alt={caseItem.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Cases */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="border-2 border-black text-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition-colors">
            View All Cases
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
