import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useSearchContext } from "./SearchContextProvider";
import { JobItem, PageDirection, SortedBy } from "../lib/types";
import { useSearchQuery } from "../lib/hooks/useSearchQuery";

type TJobItemsContext = {
    currentPage: number;
    sortedBy: SortedBy;
    jobItemsIsLoading: boolean;
    totalJobItems: number;
    totalPages: number;
    limitedItems: JobItem[];
    handleChangePage: (direction: PageDirection) => void;
    handleSortedBy: (filter: SortedBy) => void;
}

const JobItemsContext = createContext<TJobItemsContext | null>(null);


export const JobItemsContextProvider = ({ children }: {children: React.ReactNode}) => {
    const { debouncedSearchValue } = useSearchContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedBy, setSortedBy] = useState<SortedBy>("Relevant");
    const { jobItems, jobItemsIsLoading } = useSearchQuery(debouncedSearchValue);
    const totalJobItems = jobItems?.length || 0;
    const totalPages = Math.ceil(totalJobItems / 7);
    const filteredJobItems = useMemo(() => jobItems?.length && [...jobItems].sort((a, b) => {
        if (sortedBy === "Relevant") {
            return b.relevanceScore - a.relevanceScore;
        } else {
            return a.daysAgo - b.daysAgo;
        }
    }) || [], [jobItems, sortedBy]);

    const limitedItems = useMemo(() => filteredJobItems.slice(currentPage * 7 - 7, currentPage * 7) || [], [filteredJobItems, currentPage]);


    const handleChangePage = useCallback((direction: PageDirection) => {
        if (direction === "next") {
            setCurrentPage(prev => totalPages > 0 ? Math.min(totalPages, prev + 1) : prev + 1);
        } else if (direction === "previous") {
            setCurrentPage(prev => Math.max(1, prev - 1));
        }
    }, [totalPages])

    const handleSortedBy = useCallback((filter: SortedBy) => {
        setCurrentPage(1);
        setSortedBy(filter);
    }, [])

    const contextValue = useMemo(() => ({
        currentPage,
        sortedBy,
        jobItemsIsLoading,
        totalJobItems,
        totalPages,
        limitedItems,
        handleChangePage,
        handleSortedBy
    }), [currentPage, sortedBy, jobItemsIsLoading, totalJobItems, totalPages, limitedItems, handleChangePage, handleSortedBy])

    
    return (
        <JobItemsContext.Provider
            value={contextValue}
        >
            {children}
        </JobItemsContext.Provider>
    );
}

export const useJobItemsContext = () => {
    const value = useContext(JobItemsContext);

    if (!value) {
        throw new Error(`useJobItemsContext must be wrapped inside JobItemsContextProvider`);
    }

    return value;
}