import React from 'react';

interface StickyHeaderProps {
    onOpenModal: () => void;
}

const StickyHeader: React.FC<StickyHeaderProps> = ({ onOpenModal }) => {
    return (
        <div className="hero-sticky_fixed__ZuNHj hero-sticky_fixedInvert__5QLdd">
            <button className="hero-sticky_becomeClient__Hph4c" onClick={onOpenModal}>
                <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 0V14M0 7H14" stroke="currentColor" strokeWidth="1.5"></path>
                </svg>
                <span>
                    <span>Become a Client</span>
                    <span>Become a Client</span>
                </span>
            </button>
            <div>
                <div className="choose-language_root__0jm_7">
                    <button className="choose-language_button__7gw5y" data-lang-button="true">
                        <span>EN</span>
                        <svg viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <button className="menu-button_button__hHosa menu-button_button_invert__z0_kg hero-sticky_menuBtn__a2I5H">
                <div className="menu-button_button_block__I7CmA">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </button>
        </div>
    );
};

export default StickyHeader;
