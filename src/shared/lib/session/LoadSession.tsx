import { useEffect, useState } from "react";
import { useSession } from "@/shared/lib/session";

export default function LoadSession() {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const result = useSession.persist?.rehydrate?.();

        if (result && typeof result.then === "function") {
            result.then(() => setReady(true));
        } else {
            setReady(true);
        }
    }, []);

    if (!ready) return null;
    return null;
}
