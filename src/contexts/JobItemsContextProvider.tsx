import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useSearchContext } from "./SearchContextProvider";
import { JobItem, PageDirection, SortedBy } from "../lib/types";
import { useSearchQuery } from "../lib/hooks/useSearchQuery";
import { JOBS_PER_PAGE } from "../lib/constants";

type TJobItemsContext = {
    currentPage: number;
    sortedBy: SortedBy;
    jobItemsIsLoading: boolean;
    totalJobItems: number;
    totalPages: number;
    limitedItems: JobItem[];
    handleChangePage: (direction: PageDirection) => void;
    handleSortedBy: (filter: SortedBy) => void;
    handleSearchText: () => void;
    handleFullJobList: (list: JobItem[]) => void;
}

const JobItemsContext = createContext<TJobItemsContext | null>(null);


export const JobItemsContextProvider = ({ children }: {children: React.ReactNode}) => {
    const { debouncedSearchValue } = useSearchContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [sortedBy, setSortedBy] = useState<SortedBy>("Relevant");
    const [fullJobList, setFullJobList] = useState<JobItem[]>([]);
    const { jobItems, total, jobItemsIsLoading } = useSearchQuery(debouncedSearchValue, currentPage);
    const totalPages = Math.ceil(total / JOBS_PER_PAGE);

    const filteredJobItems = useMemo(() => {
        if (sortedBy === "Shuffle") {
            return [...fullJobList].sort(() => Math.random() - 0.5).slice(currentPage * JOBS_PER_PAGE - JOBS_PER_PAGE, currentPage * JOBS_PER_PAGE);
        } else {            
            return [...jobItems || []]
        }
    }, [sortedBy, jobItems, fullJobList, currentPage])
    

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

    const handleFullJobList = useCallback((list: JobItem[]) => {
        setFullJobList(list);
    }, [])

    const handleSearchText = useCallback(() => {
        setCurrentPage(1);
    }, [])


    const contextValue = useMemo(() => ({
        currentPage,
        sortedBy,
        jobItemsIsLoading,
        totalJobItems: total,
        totalPages,
        limitedItems: filteredJobItems,
        handleChangePage,
        handleSortedBy,
        handleSearchText,
        handleFullJobList
    }), [currentPage, sortedBy, jobItemsIsLoading, total, totalPages, filteredJobItems, handleChangePage, handleSortedBy, handleSearchText, handleFullJobList])

    
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