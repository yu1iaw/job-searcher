import { forwardRef } from "react";
import { createPortal } from "react-dom";
import { useBookmarks } from "../contexts/BookmarksContextProvider"
import JobList from "./JobList";
import Spinner from "./Spinner";



const BookmarksPopover = forwardRef<HTMLDivElement>((_, ref) => {
    const { bookmarks, isLoading, dataUpdatedAt } = useBookmarks();

    return createPortal(
        <div ref={ref} className="bookmarks-popover">
            {bookmarks.length > 0 ? (
                <JobList jobItems={bookmarks} bookmarksStyles>
                    {isLoading && <Spinner />}
                </JobList>
            ) : (
                typeof dataUpdatedAt === "undefined" ? (
                    <small className="bookmarks-popover--empty">Start adding jobs to your bookmarks</small>
                    ) : (
                    <ul className="job-list">
                        <Spinner />
                    </ul>
                )
            )}
        </div>,
        document.body
    )
})

export default BookmarksPopover;