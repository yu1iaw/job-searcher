import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useJobItemsContext } from "../contexts/JobItemsContextProvider";
import { PageDirection } from "../lib/types";



export default function PaginationControls() {
    const { currentPage, totalPages, handleChangePage: onClick } = useJobItemsContext();

    return (
        <section className="pagination">
            {currentPage > 1 && (
                <PaginationButton currentPage={currentPage} direction="previous" onClick={() => onClick('previous')} />
            )}
            {currentPage < totalPages && ( 
                <PaginationButton currentPage={currentPage} direction="next" onClick={() => onClick("next")} /> 
            )}
        </section>
    )
}


type PaginationButtonProps = {
    currentPage: number;
    direction: PageDirection;
    onClick: () => void;
}

const PaginationButton = ({ currentPage, direction, onClick }: PaginationButtonProps) => {
    const pageNum = currentPage + (direction === "next" ? 1 : -1);

    return (
        <button
            className={`pagination__button pagination__button--${direction}`}
            onClick={(e) => {
                e.currentTarget.blur();
                onClick();
            }}
        >
            Page {pageNum}
            {direction === "next" ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        </button>
    )
}