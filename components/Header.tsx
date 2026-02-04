import React from "react";

const Header: React.FC = () => {
  return (
    <header className="header_header__bp5X_ absolute w-full z-50">
      <div className="header_header_logo__ghx19">
        <div className="home-link_root__D9gb_">
          <button className="home-link_logo__oWtLD">
            <img
              className="home-link_logo_icon__C3LLf"
              src="/src/scratch_build_logo.png"
              alt="logo"
            />
            <span className="home-link_logo_text__T3Tis">Awsmd</span>
          </button>
        </div>
      </div>
      <div className="header_header_nav__SZeKH">
        <button className="header_header_nav_item__DiFi1">
          <span>
            <span>About Us</span>
            <span>About Us</span>
          </span>
        </button>
        <button className="header_header_nav_item__DiFi1">
          <span>
            <span>Cases</span>
            <span>Cases</span>
          </span>
        </button>
        <button className="header_header_nav_item__DiFi1">
          <span>
            <span>Reviews</span>
            <span>Reviews</span>
          </span>
        </button>
        <button className="header_header_nav_item__DiFi1">
          <span>
            <span>Contact Us</span>
            <span>Contact Us</span>
          </span>
        </button>
      </div>
      <div className="header_header_flex__uQxOS flex items-center justify-end gap-4 px-4">
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors">
          + Become a Client
        </button>
        <div className="text-white/80 hover:text-white cursor-pointer flex items-center gap-1">
          EN <span className="text-xs">▼</span>
        </div>
        <button className="w-10 h-10 rounded-full bg-white/10 flex flex-col justify-center items-center gap-1.5 backdrop-blur-sm hover:bg-white/20 transition-colors">
          <div className="w-5 h-0.5 bg-white"></div>
          <div className="w-5 h-0.5 bg-white"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;
