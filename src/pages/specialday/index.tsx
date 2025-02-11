import { useEffect, useState } from "react";
import StoryModal from "@/component/storyModal";

const SpecialDayPage = () => {
  const [isClient, setIsClient] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log("Modal State:", showModal);
  }, [showModal]);

  useEffect(() => {
    setIsClient(true);

    setTimeout(() => {
      const iframe = document.getElementById(
        "youtube-player"
      ) as HTMLIFrameElement;
      if (iframe) {
        iframe.src =
          "https://www.youtube.com/embed/kPa7bsKwL-c?autoplay=1&loop=1&playlist=kPa7bsKwL-c";
        setVideoPlaying(true);
      }
    }, 1000);
  }, []);

  return (
    <div className="relative bg-pink-100 bg-flower-pattern bg-cover min-h-screen flex flex-col items-center">
      <div
        className={`w-full flex flex-col items-center transition-all duration-300 ${
          showModal ? "blur-lg" : ""
        }`}
      >
        {isClient && (
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-0">
            <iframe
              id="youtube-player"
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/kPa7bsKwL-c?autoplay=1&loop=1&playlist=kPa7bsKwL-c${
                videoPlaying ? "" : "&mute=1"
              }`}
              title="YouTube Love Song"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {!videoPlaying && (
          <button
            onClick={() => {
              setVideoPlaying(true);
              const iframe = document.getElementById(
                "youtube-player"
              ) as HTMLIFrameElement;
              if (iframe) {
                iframe.src =
                  "https://www.youtube.com/embed/kPa7bsKwL-c?autoplay=1&loop=1&playlist=kPa7bsKwL-c";
              }
            }}
            className="px-6 py-3 bg-red-500 text-white text-lg font-bold rounded-lg shadow-md mt-5"
          >
            🔊 Play Sound
          </button>
        )}
        <h1 className="text-[60px] text-center font-bold font-cute py-5">
          Correct!!! This is Valentine Day
        </h1>
        <p className="text-center font-bold font-cute text-lg">
          I love you so much that I can say I love you more than you know.
        </p>
        <br />
        <p className="text-center font-bold font-cute text-lg">
          So, Happy Valentine’s Day Babe maybe{" "}
          <span className="underline">At 12:00 PM</span> waiting for me. I will
          give you something.
        </p>

        <div className="flex justify-center mt-10">
          <img
            src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3B0czllOHhmZjM4dHJwNmF3dXdwN2xvaWxxZGltY3FidHA2amRzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/26BRv0ThflsHCqDrG/giphy.gif"
            alt="Valentine's Day GIF"
            className="w-[300px] h-auto rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-[40px] font-bold font-cute py-5">
            Try clicking here, babe! I have something for you 💝
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="px-6 py-3 bg-pink-500 text-white text-lg font-bold rounded-lg shadow-md mt-5 transition-transform duration-300 hover:scale-105 font-cute"
          >
            💖 something...
          </button>
        </div>

        <div className="absolute left-0 bottom-0">
          <img
            src="/image copy.png"
            alt="money"
            width={300}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      <StoryModal
        isOpen={showModal}
        onClose={() => {
          console.log("Setting showModal to false...");
          setShowModal(false);
        }}
      />
    </div>
  );
};

export default SpecialDayPage;
