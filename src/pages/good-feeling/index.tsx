import { useState } from "react";
import CardModal from "@/component/cardModal";
import AlertModal from "@/component/alertModal";
import { useRouter } from "next/router";

const GoodFeelPage = () => {
    const [showAlert, setShowAlert] = useState(false);
    const r = useRouter();

    const handleSelect = (index: number) => {
        if (index === 0) {
            r.push("/specialday");
        } else if (index === 1 || index === 2 || index === 3) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    };

    const handleSelectSpecialDay = () => {
        r.push("/specialday");
    }

    return (
        <div className="relative min-h-screen">
            {/* Hide all content when the alert is shown */}
            {!showAlert && (
                <div className="bg-pink-100 bg-flower-pattern bg-cover min-h-screen">
                    <h1 className="text-center text-[60px] font-bold font-cute py-10">
                        You know today is?
                    </h1>
                    <div className="flex flex-row justify-center mt-10">
                        <CardModal onSelect={handleSelect} />
                    </div>
                    <div className="flex justify-center mt-10">
                        <img
                            src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXU1MDlscjB6d2VkZGY5dWpibmphdDVmeHZqZHExNmpkd2piMmxnMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/1D1ysSBoLxAJImgZlx/giphy.gif"
                            alt="Valentine's Day GIF"
                            className="w-[300px] h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            )}

            {/* Show AlertModal when needed */}
            {showAlert && <AlertModal onClose={() => setShowAlert(false)}/>}
        </div>
    );
};

export default GoodFeelPage;