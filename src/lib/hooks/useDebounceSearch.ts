import { useEffect, useState } from "react";


export function useDebounceSearch<T>(searchValue: T, ms = 500): T {
    const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

    useEffect(() => {
        const timerId = setTimeout(() => setDebouncedSearchValue(searchValue), ms);

        return () => {
            clearTimeout(timerId);
        }
    }, [searchValue, ms])

    return debouncedSearchValue;
}