import { useState } from "react";

export default function useRedrawKeys<K extends string>(keys: readonly K[]) {
    const [state, setState] = useState<Record<K, number>>(
        () => Object.fromEntries(keys.map((k) => [k, 0])) as Record<K, number>
    );

    const bump = (k: K) => {
        setState((prev) => ({ ...prev, [k]: prev[k] + 1 }));
    };

    return [state, bump] as const;
}
