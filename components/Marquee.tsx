import React from "react";
import { motion } from "framer-motion";

const Marquee: React.FC = () => {
  return (
    <div className="marquee_marquee__ZFB97 overflow-hidden py-10">
      <div className="marquee_marquee_wrapper__OPxaX flex">
        <motion.div
          className="marquee_marquee_item__kBXsQ flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <div className="marquee_marquee_repeater__Yd3f3 px-4">
            <p className="focused_focused_text__xjujt">
              Innovating from scratch
            </p>
          </div>
          <div className="marquee_marquee_repeater__Yd3f3 px-4">
            <p className="focused_focused_text__xjujt">
              Innovating from scratch
            </p>
          </div>
        </motion.div>
        <motion.div
          className="marquee_marquee_item__kBXsQ flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          <div className="marquee_marquee_repeater__Yd3f3 px-4">
            <p className="focused_focused_text__xjujt">
              Innovating from scratch
            </p>
          </div>
          <div className="marquee_marquee_repeater__Yd3f3 px-4">
            <p className="focused_focused_text__xjujt">
              Innovating from scratch
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
