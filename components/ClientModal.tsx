import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

interface ClientModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ClientModal: React.FC<ClientModalProps> = ({ isOpen, onClose }) => {
    const form = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Prevent scrolling when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            // Reset status when modal closes
            if (!isOpen) {
                setTimeout(() => setStatus('idle'), 300);
            }
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsLoading(true);
        setStatus('idle');

        // Keys from environment variables
        const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsLoading(false);
                setStatus('success');
                // Optional: Close modal after success
                // setTimeout(onClose, 2000);
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                setStatus('error');
            });
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay/Backdrop */}
            <div
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 9998,
                    opacity: isOpen ? 1 : 0,
                    transition: 'opacity 0.3s ease'
                }}
                onClick={onClose}
            />

            <div className="side_modal_window__nqgt8" style={{ right: 0, zIndex: 9999, display: 'block', position: 'fixed', height: '100%', top: 0 }}>
                <div className="client-form_client__zsjN5" style={{ height: '100%', overflowY: 'auto', background: '#fff' }}>
                    <button className="client-form_client_cross__8ZXCT" onClick={onClose}></button>
                    <h2 className="client-form_client_title__CdMlw">Hey! Tell us all the things</h2>

                    {status === 'success' ? (
                        <div className="client-form_client_form__jnobj" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50%' }}>
                            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🎉</div>
                            <h3 className="input_input_title__4Gy5G" style={{ fontSize: '1.5rem', textAlign: 'center' }}>Message Sent Successfully!</h3>
                            <p className="client-form_client_controls_mail__3ggKl" style={{ marginTop: '1rem' }}>We'll get back to you soon.</p>
                            <button className="button_button__aZ_6A button_button_dark__mFnzv" onClick={onClose} style={{ marginTop: '2rem' }}>
                                <span className="button_button_text__yxufZ">Close</span>
                            </button>
                        </div>
                    ) : (
                        <form className="client-form_client_form__jnobj" ref={form} onSubmit={sendEmail}>
                            <div className="client-form_client_row__KdD6U">
                                <div className="client-form_client_col__UNPCR">
                                    <div data-error="false" className="input_input__QldSr">
                                        <header className="input_input_head__k3gOX" data-class="head">
                                            <h3 className="input_input_title__4Gy5G" data-class="title">Name &amp; Company</h3>
                                        </header>
                                        <div className=" input_input_field__e0_9K" data-class="field">
                                            <input required placeholder="John from Apple" className="input_input_input__lh80_" data-class="input" name="user_name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="client-form_client_col__UNPCR">
                                    <div data-error="false" className="input_input__QldSr">
                                        <header className="input_input_head__k3gOX" data-class="head">
                                            <h3 className="input_input_title__4Gy5G" data-class="title">Your Email</h3>
                                        </header>
                                        <div className=" input_input_field__e0_9K" data-class="field">
                                            <input required type="email" placeholder="john@apple.com" className="input_input_input__lh80_" data-class="input" name="user_email" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div data-error="false" className="input_input__QldSr client-form_client_about__7_0_n">
                                <header className="input_input_head__k3gOX" data-class="head">
                                    <h3 className="input_input_title__4Gy5G" data-class="title">Tell us more about your project</h3>
                                </header>
                                <div className="input_input_field__textarea__QdBSv input_input_field__e0_9K client-form_client_about_field__4yqZ3" data-class="field">
                                    <textarea required name="message" placeholder="Something about your great idea" className="input_input_input__lh80_" data-class="input" style={{ height: '90px' }}></textarea>
                                </div>
                            </div>

                            {status === 'error' && (
                                <div style={{ color: 'red', marginBottom: '1rem', textAlign: 'center' }}>
                                    Something went wrong. Please try again or email us directly.
                                </div>
                            )}

                            <div className="client-form_client_controls__q6I43">
                                <p className="client-form_client_controls_mail__3ggKl">Our Email <a href="mailto:info@scratchdev.com"><u>info@scratchdev.com</u></a></p>
                                <button
                                    className="button_button__aZ_6A button_button_dark__mFnzv button_button_arrow__F1hNQ client-form_client_controls_submit__c4OE5"
                                    type="submit"
                                    disabled={isLoading}
                                    style={{ opacity: isLoading ? 0.7 : 1, cursor: isLoading ? 'not-allowed' : 'pointer' }}
                                >
                                    <span className="button_button_text__yxufZ" data-class="text">
                                        <span>{isLoading ? 'Sending...' : 'Submit the request'}</span>
                                        <span>{isLoading ? 'Sending...' : 'Submit the request'}</span>
                                    </span>
                                    {!isLoading && (
                                        <span className="button_button_icon__mgDpM" data-class="icon">
                                            <span className="button_button_circle__94IGi" data-circle="true"></span>
                                            <svg className="button_button_icon_arrow__sBRHC" data-class="arrow-2" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 6H12M12 6L7 1M12 6L7 11" data-stroke="true" strokeWidth="1.5"></path>
                                            </svg>
                                            <span className="button_button_svgs__XrFT4" data-class="arrow">
                                                <svg viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 6H12M12 6L7 1M12 6L7 11" data-stroke="true" strokeWidth="1.5"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    )}
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default ClientModal;
