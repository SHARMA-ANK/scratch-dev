import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SmartDevelopment = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Hand moves more significantly down
    const yHand = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]); // Use percentage for screen-independent movement

    // Screens move upwards 
    const yScreens = useTransform(scrollYProgress, [0, 1], [0, -40]);

    const renderScreenItem = (row: number, index: number, hasLogo: boolean = false, isEmpty: boolean = false) => {
        let fileIndex = 0;
        if (index <= 2) fileIndex = index;
        if (index >= 4) fileIndex = index - 1;

        const imgSrc = `media/development/screen${row}-${fileIndex}.png`;

        if (isEmpty) {
            return (
                <li className="dev-screens_screens_item__7a__O" key={index}>
                    <div className="dev-media_media__rjGrk"></div>
                </li>
            );
        }

        return (
            <li className="dev-screens_screens_item__7a__O" key={index}>
                <div className="dev-media_media__rjGrk">
                    <img
                        alt="media"
                        decoding="async"
                        className="dev-media_media_preview__gac3v"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        src={imgSrc}
                    />
                </div>
                {hasLogo && (
                    <div className="dev-screens_screens_logo__dgfZA">

                    </div>
                )}
            </li>
        );
    };

    return (
        <section className="development_dev__ZUMqF" id="development" ref={containerRef} style={{ position: 'relative', overflow: 'hidden' }}>

            <div className="dev-line_line__aWpS_">
                <svg className="dev-line_line_svg__lTEBS" viewBox="0 0 1728 1101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1" style={{ strokeDasharray: "3246.53, 0" }}></path>
                </svg>
            </div>

            <div className="development_contentbox__UjoNa">
                <div className="marquee_marquee__ZFB97 development_dev_marquee__bRhyK">
                    <div className="marquee_marquee_wrapper__OPxaX">
                        <div className="marquee_marquee_item__kBXsQ" style={{ animation: "marquee_toLeft__5KWlF 30s linear infinite" }}>
                            <div className="marquee_marquee_repeater__Yd3f3">
                                <p className="development_dev_marquee_text__oxpfZ">Data driven user focused value based</p>
                            </div>
                        </div>
                        <div className="marquee_marquee_item__kBXsQ" style={{ animation: "marquee_toLeft__5KWlF 30s linear infinite" }}>
                            <div className="marquee_marquee_repeater__Yd3f3">
                                <p className="development_dev_marquee_text__oxpfZ">Data driven user focused value based</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container development_dev_container__GvCfx">
                    <div className="dev-content_dev_content__EguIn">
                        <h2 className="dev-content_dev_title__nwp5r">
                            <span className="dev-content_dev_title_sd__B29dd">{`{SMART}`} DEVELOPMENT</span>
                            <span className="dev-content_dev_title_stars__qdKOg">**</span>
                        </h2>
                        <div className="dev-content_dev_bottom__wIerq">
                            <p className="dev-content_dev_text__3EkeN">Making your business outstanding is a science. We take it (a) seriously and (b) creatively.</p>
                            <div className="dev-content_dev_controls__wP5T_">
                                <button className="dev-content_dev_btn_white__xEXo0">Check Our Portfolio</button>
                                <button className="dev-content_dev_btn_gray__6rVLp">Get In Touch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="development_dev_phones__imyxO">
                <img alt="phone-left" className="development_dev_phones_left__bMCN4" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} src="media/phone-left.webp" />
                <img alt="phone-right" className="development_dev_phones_right__HDoTA" style={{ position: 'absolute', height: '100%', width: '100%', left: 0, top: 0, right: 0, bottom: 0, color: 'transparent' }} src="media/phone-right.webp" />
            </div>

            {/* Interaction Wrapper: Parallax Container */}
            <div className="interaction-wrapper" style={{ position: 'relative', marginTop: 0 }}>

                {/* Hand Layer: Absolute + Parallax Y from Top */}
                <motion.div
                    className="development_dev_hand__CESVA"
                    style={{
                        position: 'absolute',
                        top: -700,
                        left: 0,
                        width: '100%',
                        zIndex: 10,
                        y: yHand,
                        pointerEvents: 'none',
                        margin: 0, // Override CSS margin
                        height: 'auto' // Ensure height does not collapse
                    }}
                >
                    <img
                        alt="hand"
                        className="development_dev_hand_image__G9lS_"
                        style={{ position: 'relative', width: '100%', height: 'auto', maxWidth: '1870px', display: 'block', margin: '0 auto' }}
                        src="media/development/hand.webp"
                    />
                    <div className="dev-video_video__oxf1k">
                        <video src="media/development/phone.mp4" playsInline autoPlay muted loop></video>
                    </div>
                </motion.div>

                {/* Screens Layer: Background Parallax */}
                <motion.div
                    className="development_dev_screens__CsH88"
                    style={{
                        marginTop: '100px',
                        zIndex: 1,
                        position: 'relative',
                        y: yScreens
                    }}
                >
                    <div className="development_dev_screens_wrapper__6yBxK">
                        <div className="dev-screens_screens__pjAOM">
                            {/* Row 1 */}
                            <ul className="dev-screens_screens_list__BiiTu">
                                {renderScreenItem(1, 1, true)}
                                {renderScreenItem(1, 2)}
                                {renderScreenItem(1, 3, false, true)}
                                {renderScreenItem(1, 4)}
                                {renderScreenItem(1, 5)}
                            </ul>
                            {/* Row 2 */}
                            <ul className="dev-screens_screens_list__BiiTu" style={{ marginLeft: '-100px' }}>
                                {renderScreenItem(2, 1)}
                                {renderScreenItem(2, 2)}
                                {renderScreenItem(2, 3, false, true)}
                                {renderScreenItem(2, 4, true)}
                                {renderScreenItem(2, 5)}
                            </ul>
                            {/* Row 3 */}
                            <ul className="dev-screens_screens_list__BiiTu">
                                {renderScreenItem(3, 1)}
                                {renderScreenItem(3, 2, true)}
                                {renderScreenItem(3, 3, false, true)}
                                {renderScreenItem(3, 4)}
                                {renderScreenItem(3, 5)}
                            </ul>
                        </div>
                    </div>
                </motion.div>

            </div>

        </section>
    );
};

export default SmartDevelopment;
