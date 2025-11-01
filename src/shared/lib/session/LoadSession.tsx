import { useEffect } from "react";
import { useSession } from ".";

export default function LoadSession() {
    const { hydrate } = useSession();
    useEffect(() => {
        hydrate();
    }, [hydrate]);
    return null;
}
