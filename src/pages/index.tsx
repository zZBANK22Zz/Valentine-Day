// pages/index.tsx
import { useState, useEffect } from "react";
import Router from "next/router";
import { FaceSmileIcon, FaceFrownIcon } from "@heroicons/react/24/solid";
import BadfeelModal from "../component/badfeel-banger";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Start with false

  const GoodFeeling = () => {
    setShowText(false);
    Router.push("/good-feeling");
  };

  const BadFeeling = () => {
    setOpenModal(true);
    console.log("Modal state:", openModal);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-pink-100 bg-flower-pattern bg-cover">
      <b
        className={`font-cute text-[100px] mt-56 transition-opacity duration-1000 ease-in-out text-shadow-white ${
          showText ? "opacity-100" : "opacity-0"
        }`}
      >
        How are you today?
      </b>
      {showText && (
        <div className="flex gap-5 mt-10">
          <button
            onClick={GoodFeeling}
            className="flex items-center justify-center px-5 py-3 bg-green-400 text-white text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-green-300"
          >
            <FaceSmileIcon className="h-6 w-6 mr-2" />
            Good
          </button>
          <button
            onClick={BadFeeling}
            className="flex items-center justify-center px-5 py-3 bg-red-400 text-white text-lg font-semibold rounded-full shadow-lg transition transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
          >
            <FaceFrownIcon className="h-6 w-6 mr-2" />
            Bad
          </button>
        </div>
      )}
      <BadfeelModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}