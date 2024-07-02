import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarks } from "../contexts/BookmarksContextProvider";


type BookmarkIconProps = {
    jobItemId: number;
}

export default function BookmarkIcon({ jobItemId }: BookmarkIconProps) {
    const { bookmarkedIds, onToggleBookmark } = useBookmarks();
    const isActiveBookmark = bookmarkedIds.find(bookmarkId => bookmarkId === jobItemId);
    
    return (
        <button
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onToggleBookmark(jobItemId);
            }}
            className="bookmark-btn"
        >
            <BookmarkFilledIcon className={`${isActiveBookmark ? 'filled' : ''}`} />
        </button>
    )
}