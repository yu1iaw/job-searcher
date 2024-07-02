import { createContext, useContext } from "react";
import { useActiveHash } from "../lib/hooks/useActiveHash";


type TActiveHashContext = {
    activeId: number | null;
}

const ActiveHashContext = createContext<TActiveHashContext | null>(null);


export const ActiveHashContextProvider = ({ children }: {children: React.ReactNode}) => {
    const activeId = useActiveHash();
    

    return (
        <ActiveHashContext.Provider value={{ activeId }}>
            {children}
        </ActiveHashContext.Provider>
    );
}

export const useActiveHashContext = () => {
    const value = useContext(ActiveHashContext);

    if (!value) {
        throw new Error(`useActiveHashContext must be wrapped inside ActiveHashContextProvider`);
    }

    return value;
}