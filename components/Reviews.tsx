import React from "react";
import { motion } from "framer-motion";

const Reviews: React.FC = () => {
  const testimonials = [
    {
      quote:
        "Awesomed is a hands-on team with applicable advice beyond design. They focus on the end-user and help improve retention. They’re committed to Agile development methods, and they look into user data and user behavior when driving new features. They excel in user experience and big-picture thinking.",
      name: "Lexie Ernst",
      title: "CEO",
    },
    {
      quote:
        "Since launching the website, the client has gained around 10,000 subscribers. Awsmd created an appealing and bold design that the client is pleased with. The team manages the project well and delivers on time.",
      name: "Lucas Rossi",
      title: "CEO",
    },
    {
      quote:
        "Awsmd’s professional team achieved results that the client is pleased with. They explained everything clearly, delivered on time, and communicated effectively through email, Slack, and Zoom.",
      name: "Amina Al-Saadi",
      title: "Project Manager",
    },
    {
      quote:
        "The client is delighted with Awsmd's work. The new website increased traffic by 35% and brought in more leads. The Awsmd team consistently met deadlines and communicated well, setting them apart. Additionally, they were highly organized and kept tasks prioritized.",
      name: "Cindy Vincent",
      title: "Project Manager",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
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
            06 — What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We supply clients across the entire globe with improved network
            connections.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl font-bold text-black">4.9</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-6 h-6 text-yellow-400 fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">Gold verified</span>
          </div>
          <p className="text-gray-600">
            Our Customers love to work with us, 40 Reviews
          </p>
        </motion.div>

        {/* Testimonials Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <blockquote className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-black">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
