import { Alert } from "@heroui/react";

export default function AlertModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={onClose} // ปิดเมื่อคลิกพื้นที่ว่าง
    >
      <div
        className="w-[300px] p-4 bg-white rounded-lg shadow-lg animate-blink"
        onClick={(e) => e.stopPropagation()} // ป้องกันการปิดเมื่อคลิกที่ Alert
      >
        <Alert color="danger" title="Noo!!! you're selecting wrong day babe." />
      </div>
    </div>
  );
}