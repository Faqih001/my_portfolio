"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

// Default button class for the scroll-to-top button
const DEFAULT_BTN_CLS =
  "fixed bottom-4 right-4 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-2xl transition-all duration-200 ease-out";
const SCROLL_THRESHOLD = 50;

// ScrollToTop component 
const ScrollToTop = () => {

  // State for the button class
  const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > SCROLL_THRESHOLD) {
        setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
      } else {
        setBtnCls(DEFAULT_BTN_CLS + " hidden");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll, { passive: true });
    };
  }, []);

  // Scroll to top function
  const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button className={btnCls} onClick={onClickBtn}>
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
