import { useState } from "react";
import ActionSheet from "@/shared/components/ActionSheet";
import StoreInfoForm from "./components/StoreInfoForm";
import FloatingButton from "./components/FloatingButton";
import HomeContent from "./components/HomeContent";

export default function HomePage() {
    const [showSheet, setShowSheet] = useState(false);

    const onCloseSheet = () => {
        setShowSheet(false);
    };

    return (
        <div className="relative h-full">
            <HomeContent />

            <FloatingButton
                onClick={() => setShowSheet(true)}
                className="absolute justify-end bottom-4"
            />

            <ActionSheet
                title="맛닭꼬끼오 공릉점"
                isOpen={showSheet}
                onClose={onCloseSheet}
                disableDrag
            >
                <StoreInfoForm afterSubmit={onCloseSheet} />
            </ActionSheet>
        </div>
    );
}
