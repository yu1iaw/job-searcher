import { useEffect } from "react";
import { useJobItemsContext } from "../contexts/JobItemsContextProvider";
import { useSearchContext } from "../contexts/SearchContextProvider";
import { SortedBy } from "../lib/types";
import { useSortingControlsQuery } from "../lib/hooks/useSortingControlsQuery";
import { ShuffleIcon } from "@radix-ui/react-icons";



export default function SortingControls() {
    const { sortedBy, handleSortedBy: onSortedBy, handleFullJobList } = useJobItemsContext();
    const { debouncedSearchValue } = useSearchContext();
    const { fullJobList } = useSortingControlsQuery(debouncedSearchValue, sortedBy);    
    
    
    useEffect(() => {
        sortedBy === "Shuffle" && handleFullJobList(fullJobList);

    }, [sortedBy, fullJobList.length])

    
    return (
        <section className="sorting">
            <i className="fa-solid fa-arrow-down-short-wide"></i>
            <SortingButton label="Relevant" onSortedBy={() => onSortedBy('Relevant')} sortedBy={sortedBy} />
            <SortingButton label="Shuffle" onSortedBy={() => onSortedBy('Shuffle')} sortedBy={sortedBy} />
        </section>
    )
}

type SortingButtonProps = {
    label: SortedBy;
    sortedBy: SortedBy;
    onSortedBy: () => void;
}

const SortingButton = ({label, sortedBy, onSortedBy}: SortingButtonProps) => {
    return (
        <button
            onClick={onSortedBy}
            className={`sorting__button sorting__button--${label.toLowerCase()} ${sortedBy === label ? 'sorting__button--active' : ''}`}
        >
            {label === "Relevant" ? label : (
                <ShuffleIcon height={18} width={18} />
            )}
        </button>
    )
}