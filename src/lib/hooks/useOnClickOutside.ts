import { useEffect } from "react";


export function useOnClickOutside(refs: React.RefObject<HTMLElement>[], callback: () => void) {
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (e.target instanceof HTMLElement &&
                refs.every(ref => !ref.current?.contains(e.target as Node))) {
                callback();
            }
        }

        window.document.addEventListener("click", handleClick);

        return () => {
            window.document.removeEventListener("click", handleClick);
        }
    }, [refs, callback])
}