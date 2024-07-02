import { useJobItemsContext } from "../contexts/JobItemsContextProvider";
import { SortedBy } from "../lib/types";




export default function SortingControls() {
    const { sortedBy, handleSortedBy: onSortedBy } = useJobItemsContext();
    
    return (
        <section className="sorting">
            <i className="fa-solid fa-arrow-down-short-wide"></i>

            <SortingButton label="Relevant" sortedBy={sortedBy} onSortedBy={onSortedBy} />
            <SortingButton label="Recent" sortedBy={sortedBy} onSortedBy={onSortedBy} />
        </section>
    )
}


type SortingButtonProps = {
    label: SortedBy;
    sortedBy: SortedBy;
    onSortedBy: (filter: SortedBy) => void;
}

const SortingButton = ({label, sortedBy, onSortedBy}: SortingButtonProps) => {
    return (
        <button
            onClick={() => onSortedBy(label)}
            className={`sorting__button sorting__button--${label.toLowerCase()} ${sortedBy === label ? 'sorting__button--active' : ''}`}
        >
            {label}
        </button>
    )
}