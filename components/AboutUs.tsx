import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const aboutData = {
  stats: [
    {
      title: "+300",
      text: "We have successfully completed a total of 300+ projects",
      img: "/api.awsmd.com/uploads/1738483700236_bc667a0a39.jpg",
    },
    {
      title: "100K",
      text: "We’ve gathered dozens of reviews from the clients and + 100k reviews from their users",
      img: "/api.awsmd.com/uploads/1754283303425_11baef8c08.jpg",
    },
    {
      title: "+10",
      text: "Years of experience",
      img: "/api.awsmd.com/uploads/1755611490935_3289400113.jpg",
    },
    {
      title: "+280",
      text: "Team members all over the world",
      img: "/api.awsmd.com/uploads/1759257775560_250d689fdc.jpg",
    },
  ],
  circles: [
    {
      size: "100%",
      top: "0%",
      right: "0%",
      words: [],
      text: {
        bold: "Solid Strategy",
        paragraph:
          "aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights",
      },
    },
    {
      size: "85.4%",
      top: "2.13812%",
      right: "2.13812%",
      words: [
        { label: "A/B Testing", top: "93.3013%", right: "25%" },
        {
          label: "Growth",
          top: "85.3553%",
          right: "85.3553%",
          main: true,
        },
        { label: "Experiments", top: "54.3578%", right: "99.8097%" },
        { label: "Optimization", top: "25%", right: "93.3013%" },
      ],
      text: {
        bold: "Using agile data analysis",
        paragraph:
          "supported by data science, our process has proven to deliver constant business growth.",
      },
    },
    {
      size: "68.14%",
      top: "4.66579%",
      right: "4.66579%",
      words: [
        { label: "Development", top: "88.3022%", right: "17.8606%" },
        { label: "Visual Design", top: "99.8097%", right: "45.6422%" },
        {
          label: "Insights",
          top: "85.3553%",
          right: "85.3553%",
          main: true,
        },
        { label: "User Experience", top: "54.3578%", right: "99.8097%" },
        { label: "Innovations", top: "32.899%", right: "96.9846%" },
      ],
      text: {
        bold: "Ideas have to be manifested,",
        paragraph:
          "tested and proven to work. Continued experiments are one of our key drivers.",
      },
    },
    {
      size: "42%",
      top: "8.4939%",
      right: "8.4939%",
      words: [
        {
          label: "Product",
          top: "14.6447%",
          right: "14.6447%",
          main: true,
        },
        { label: "Data Science", top: "82.1394%", right: "11.6978%" },
        { label: "UX Research", top: "95.3154%", right: "71.1309%" },
        { label: "UX Strategy", top: "50%", right: "100%" },
      ],
      text: {
        bold: "Solid Strategy",
        paragraph:
          "aligned with business needs and robust data analysis are fundamental ingredients to extract actionable insights.",
      },
    },
  ],
};

const CirclePoint = ({ point }) => {
  const baseClass = "about-circle-point_point__QSQD7 absolute";
  const modifierClass = point.main
    ? "about-circle-point_pointMain__Ub44Y about-circle_circle_pointMain__3zIYl"
    : "about-circle_circle_point__Us3Ru";

  return (
    <div
      className={`${baseClass} ${modifierClass}`}
      style={{
        top: point.top,
        right: point.right,
      }}
      data-label={point.label}
    />
  );
};


const Circle = ({ circle, index, activeIndex, onHover, onLeave }) => {
  // Determine opacity based on hover state of siblings
  let opacity = 1;
  if (activeIndex !== null && activeIndex > 0) {
    if (index > activeIndex) {
      if (index === 3) {
        opacity = 0.3;
      } else {
        opacity = 0.6;
      }
    }
  }

  // Background colors from CSS
  const bgColors = ["#f4f4f4", "#eee", "#e1e1e1", "#f4f4f4"];
  const bgColor = bgColors[index];

  const isHovered = index === activeIndex;

  return (
    <div
      className={`about-circle_circle__0EHtI about-graph_item__P4WQV absolute rounded-full border transition-all duration-400 ease-in-out ${isHovered ? "about-circle_circleActive__LBZXo" : ""}`}
      style={{
        width: circle.size,
        height: circle.size,
        top: circle.top,
        right: circle.right,
        backgroundColor: bgColor,
        opacity: opacity,
        borderColor: isHovered ? "rgba(0,0,0,0.2)" : "transparent",
        cursor: index > 0 ? "pointer" : "default",
      }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={onLeave}
      data-circle="true"
    >
      <div className="relative w-full h-full">
        {circle.words.map((point) => (
          <CirclePoint key={point.label} point={point} isActive={isHovered} />
        ))}
      </div>
    </div>
  );
};

const AboutUs = () => {
  const [activeCircleIndex, setActiveCircleIndex] = useState(0);
  const activeText = aboutData.circles[activeCircleIndex]?.text;

  // Split text for the data-text attribute trick
  // The 'bold' part is the data-text value. 
  // However, looking at the provided HTML, the paragraph contains the FULL text, 
  // and the data-text contains ONLY the part to be highlighted (black).
  // The CSS 'after' element with content: attr(data-text) overlays it.
  // We need to ensure the full text starts with the bold text for this to work perfectly visually.

  // Construct full text from our data structure (which has them separate)
  const fullText = `${activeText.bold} ${activeText.paragraph}`;
  // The bold part is just activeText.bold

  return (
    <div className="container mx-auto px-4 pt-[70px]">
      <h3 className="title_title___3dKt">
        02 — About Us
      </h3>

      <div className="about_about_head__4ZGI9">
        <h2 className="about_about_head_title__zA_xo">
          We Strive to Innovate
        </h2>

        <button className="button_button__aZ_6A" type="button">
          <span className="button_button_text__yxufZ">
            <span>Become a Client</span>
            <span>Become a Client</span>
          </span>
          <span className="button_button_icon__mgDpM">
            <span className="button_button_icon_dot__QKe2H"></span>
            <span className="button_button_svgs__XrFT4">
              <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H12M12 6L7 1M12 6L7 11" stroke="currentColor" strokeWidth="1.5"></path>
              </svg>
              <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 6H12M12 6L7 1M12 6L7 11" stroke="currentColor" strokeWidth="1.5"></path>
              </svg>
            </span>
            <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="button_button_icon_arrow__sBRHC">
              <path d="M0 6H12M12 6L7 1M12 6L7 11" stroke="currentColor" strokeWidth="1.5"></path>
            </svg>
          </span>
          <span className="button_button_circle__94IGi"></span>
        </button>
      </div>

      {/* 
        Using !important classes (prefixed with !) to override the imported external CSS 
        (ac733fec5634b0c4.css) which forces flex-col and hides the right section below 991px.
      */}
      <div className="about_about_content__H2qJ9">

        <div className="about_about_content_left__6bbCk">
          <div className="swiper swiper-fade relative min-h-[120px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCircleIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }} // Simple fade/slide to mimic swiper-fade
                transition={{ duration: 0.3 }}
                className="swiper-slide w-full"
              >
                <p
                  className="about_about_fillText__DBoU3 font-[400] text-[19px] lg:text-[26px] leading-[1.38] tracking-[-0.01em] text-[#878787] font-jakarta relative
                    after:content-[attr(data-text)] after:block after:absolute after:left-0 after:top-0 after:text-black after:w-full after:h-full"
                  data-text={activeText.bold}
                >
                  {fullText}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <h3 className="about_about_list_title__eaHUj mt-[50px] lg:mt-[94px] text-[18px] font-[600] leading-[1.2] text-[#999796] font-inter">
            Some Number About Us
          </h3>

          <ul className="about_about_list__bNvFa flex flex-wrap mt-[28px] -mx-[5px]">
            {aboutData.stats.map((stat) => (
              <li key={stat.title} className="about_about_list_item__wnM0G m-[4px] flex-grow-0 flex-shrink-0 basis-[calc(50%-8px)]">
                <div className="about-card_card__lHD1X p-[12px] px-[20px] bg-[#f2f0f0] rounded-[30px] min-h-[199px] relative overflow-hidden h-full">
                  <div className="about-card_card_webm__71N60 absolute right-0 bottom-0 max-w-[150px] translate-x-[18%] translate-y-[20%] z-[1]">
                    {/* Using img as video placeholder for now, styled to match video position */}
                    <img src={stat.img} alt="" className="w-full h-auto rounded-br-[30px]" />
                  </div>
                  <div className="about-card_card_container__jEZJ6 relative z-[2] pt-4">
                    <h3 className="about-card_card_title__E5QW0 font-[700] text-[46px] lg:text-[52px] leading-[1.3] font-jakarta text-black">
                      {stat.title}
                    </h3>
                    <p className="about-card_card_text__559FE mt-[5px] font-[400] text-[13px] lg:text-[14px] leading-[1.25] text-[#9b9b9b] font-inter max-w-[12em]">
                      {stat.text}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Override external CSS display:none on this element with !flex */}
        <div className="about_about_content_right__Jr2SE relative z-10">
          <div className="about-graph_circle__oCxRN w-full max-w-[500px] xl:max-w-[625px]">
            <div
              className="about-graph_box__kOXeL w-full pb-[100%] relative origin-center scale-90 lg:scale-100"
              onMouseLeave={() => setActiveCircleIndex(0)}
            >
              {aboutData.circles.map((circle, index) => (
                <Circle
                  key={circle.size}
                  circle={circle}
                  index={index}
                  activeIndex={activeCircleIndex}
                  onHover={(idx) => idx > 0 && setActiveCircleIndex(idx)}
                  onLeave={() => { }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutUs;
