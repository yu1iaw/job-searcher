import { useEffect, useState } from "react";


export const useLocalStorage = <T>(storageKey: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        return JSON.parse(localStorage.getItem(storageKey) || JSON.stringify(initialValue))
    });

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey])

    return [value, setValue] as const;
}