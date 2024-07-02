import { useEffect, useState } from "react";


export function useActiveHash() {
    const [activeId, setActiveId] = useState<number | null>(null);

    useEffect(() => {
        const handleChangeHash = () => {
            setActiveId(+window.location.hash.slice(1));
        }
        handleChangeHash();

        window.addEventListener("hashchange", handleChangeHash);

        return () => {
            window.removeEventListener("hashchange", handleChangeHash);
        }
    }, [])

    return activeId;
}