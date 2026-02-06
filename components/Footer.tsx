import React from "react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="footer-parallax_parallax_component__ypYz_">
      <footer className="footer_footer__Hhmm8">
        <div className="container">
          {/* Logo Section */}
          <a className="logo_logo__q6bk_ logo_logo_dark__KWxYi" href="/">
            {/* Inline Logo SVG Placeholder or Text */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Replicating the logo icon from previous design but fitting into the new structure if needed. 
                                 However, the user wants "ScratchDev" and Logo. 
                                 The class logo_logo_icon__8QPwX expects an img or svg. 
                                 I'll use a text based logo or simple span as I don't have the svg file. */}
              <span className="logo_logo_text__nIG8b" style={{ fontSize: '24px', fontWeight: 'bold' }}>ScratchDev</span>
            </div>
          </a>

          <div className="footer_footer_row__s1ZE7">
            <div className="footer_footer_left__ubOIu">
              <h2 className="footer_footer_title__BLm7B">We would love to hear from you.</h2>
              <p className="footer_footer_text__Abl4i">Feel free to reach out if you want to collaborate with us, or simply have a chat</p>

              {/* Become a Client Button */}
              <button className="button_button__aZ_6A button_button_light__M6d2_ button_button_arrow__F1hNQ footer_footer_becomeBtn__npQVs" type="button">
                <span className="button_button_text__yxufZ" data-class="text">
                  <span>Become a Client</span>
                  <span>Become a Client</span>
                </span>
                <span className="button_button_icon__mgDpM" data-class="icon">
                  <span className="button_button_circle__94IGi" data-circle="true"></span>
                  {/* Arrow 1 */}
                  <svg className="button_button_icon_arrow__sBRHC" data-class="arrow-2" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '14px' }}>
                    <path d="M0 6H12M12 6L7 1M12 6L7 11" data-stroke="true" strokeWidth="1.5" stroke="currentColor"></path>
                  </svg>
                  {/* Arrow 2 (Animated) */}
                  <span className="button_button_svgs__XrFT4" data-class="arrow">
                    <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 6H12M12 6L7 1M12 6L7 11" data-stroke="true" strokeWidth="1.5" stroke="currentColor"></path>
                    </svg>
                  </span>
                </span>
              </button>

              <p className="footer_footer_text__Abl4i">Don’t like the forms? Drop us a line via email.</p>
              <a className="footer_footer_mail__3bfqo" href="mailto:info@scratchdev.com">info@scratchdev.com</a>
            </div>

            <div className="footer_footer_right__I_ux_">
              <nav className="footer-nav_nav__92SOe">
                <div className="footer-nav_nav_col___0Ln6">
                  <h3 className="footer-nav_nav_title__tBH4B">Contact us</h3>
                  <ul>
                    <li className="footer-list_list_item__fWKV_">
                      Our Email<br />
                      <a href="mailto:info@scratchdev.com"><u>info@scratchdev.com</u></a>
                    </li>
                    <li className="footer-list_list_item__fWKV_">
                      San Francisco, CA 2 Embarcadero Center, 8 floor, 94111
                    </li>
                  </ul>
                </div>
                <div className="footer-nav_nav_col___0Ln6">
                  <h3 className="footer-nav_nav_title__tBH4B">Follow us</h3>
                  <ul>
                    {['dribbble', 'linkedin', 'clutch', 'instagram', 'behance'].map((social) => (
                      <li className="footer-list_list_item__fWKV_" key={social}>
                        <a href="#" className="footer-nav_nav_link__NagoM">
                          <span>{social}</span>
                          {/* Arrow Icon Replacement */}
                          <svg className="footer-nav_nav_link_arrow___XBKP" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '13px', marginLeft: 'auto' }}>
                            <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="footer-nav_nav_col___0Ln6">
                  <h3 className="footer-nav_nav_title__tBH4B">Services</h3>
                  <ul>
                    <li className="footer-list_list_item__fWKV_"><a href="#" className="footer-nav_nav_link__NagoM">Mobile development</a></li>
                    <li className="footer-list_list_item__fWKV_"><a href="#" className="footer-nav_nav_link__NagoM">Web development</a></li>
                    <li className="footer-list_list_item__fWKV_"><a href="#" className="footer-nav_nav_link__NagoM">Solid design solutions</a></li>
                    <li className="footer-list_list_item__fWKV_"><a href="#about" className="footer-nav_nav_link__NagoM">About</a></li>
                    <li className="footer-list_list_item__fWKV_"><a href="#development" className="footer-nav_nav_link__NagoM">Development</a></li>
                    <li className="footer-list_list_item__fWKV_"><a href="#" className="footer-nav_nav_link__NagoM">Blog</a></li>
                    <li className="footer-list_list_item__fWKV_"><a href="#reviews" className="footer-nav_nav_link__NagoM">Reviews</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

          <div className="footer_footer_end__Ku7d4">
            <p className="footer_footer_copyright__rco2j">
              © ScratchDev 2026. All rights reserved
              <span></span>
              <a href="#">Privacy Policy</a>
            </p>
            <button className="footer_footer_scroll__Uura_" onClick={scrollToTop}>
              Back to the top
              <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '14px' }}>
                <path d="M0 6H12M12 6L7 1M12 6L7 11" data-stroke="true" strokeWidth="1.5" stroke="currentColor"></path>
              </svg>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
