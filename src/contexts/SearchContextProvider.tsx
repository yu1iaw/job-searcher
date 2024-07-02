import { createContext, useContext, useState } from "react";
import { useDebounceSearch } from "../lib/hooks/useDebounceSearch";


type TSearchContext = {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
    debouncedSearchValue: string;
}

const SearchContext = createContext<TSearchContext | null>(null);


export const SearchContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [searchValue, setSearchValue] = useState("");
    const debouncedSearchValue = useDebounceSearch(searchValue, 400);
    

    return (
        <SearchContext.Provider value={{ searchValue, setSearchValue, debouncedSearchValue }}>
            {children}
        </SearchContext.Provider>
    );
}

export const useSearchContext = () => {
    const value = useContext(SearchContext);

    if (!value) {
        throw new Error(`useSearchContext must be wrapped inside SearchContextProvider`);
    }

    return value;
}