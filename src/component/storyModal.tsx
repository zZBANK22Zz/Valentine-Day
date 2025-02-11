import { useEffect } from "react";
import { Card, CardHeader, CardBody } from "@heroui/react";

interface StoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoryModal: React.FC<StoryModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-50"
      onClick={onClose}
    >
      <Card
        className="relative w-[90%] md:w-[600px] p-6 shadow-2xl bg-white text-center rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => {
            console.log("Close button clicked!");
            onClose();
          }}
          className="absolute top-3 right-3 text-red-500 text-2xl font-bold hover:text-red-700"
        >
          ✖
        </button>
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
          <h2 className="text-2xl font-bold text-pink-500 font-cute">
            💖 Our Beautiful Story 💖
          </h2>
          <small className="text-default-500 font-cute">
            A Special Moment Just for Us
          </small>
        </CardHeader>
        <CardBody className="py-4 flex justify-center items-center">
          <video
            controls
            autoPlay
            loop
            className="max-w-sm w-full h-auto rounded-lg shadow-lg font-cute"
          >
            <source src="/videos/my-video.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </CardBody>
        <CardBody className="flex flex-col items-center">
          <p className="text-gray-700 mt-4 text-lg px-4 font-cute">
            Every moment with you is a story I want to tell forever. 💖
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default StoryModal;
