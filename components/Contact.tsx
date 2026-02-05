import React from "react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            We would love to hear from you.
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Feel free to reach out if you want to collaborate with us, or simply have a chat.
          </p>
          <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors mr-4">
            Become a Client
          </button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-gray-600 mb-4">Don't like the forms? Drop us a line via email.</p>
          <a
            href="mailto:info@awsmd.com"
            className="text-black font-semibold hover:underline"
          >
            info@awsmd.com
          </a>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 pt-8"
        >
          <p className="text-gray-600 mb-4">© Awsmd 2026. All rights reserved</p>
          <a href="#" className="text-black hover:underline mr-4">
            Privacy Policy
          </a>
          <a href="#" className="text-black hover:underline">
            Back to the top
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
