import React, { createContext, useContext } from "react";
import { SelectedJobItem } from "../lib/types";
import { useJobItems } from "../lib/hooks/useJobItems";
import { useLocalStorage } from "../lib/hooks/useLocalStorage";

type TBookmarksContext = {
    bookmarkedIds: number[];
    onToggleBookmark: (id: number) => void;
    bookmarks: SelectedJobItem[];
    isLoading: boolean;
    dataUpdatedAt: number;
}

const BookmarksContext = createContext<TBookmarksContext | null>(null);


export const BookmarksContextProvider = ({ children }: {children: React.ReactNode}) => {
    const [bookmarkedIds, setBookmarkedIds] = useLocalStorage<number[]>("bookmarkedIds", []);
    const { bookmarks, isLoading, dataUpdatedAt } = useJobItems(bookmarkedIds);


    const onToggleBookmark = (id: number) => {
        if (bookmarkedIds.includes(id)) {
            setBookmarkedIds(bookmarkedIds.filter(bookmarkId => bookmarkId !== id));
        } else {
            setBookmarkedIds([...bookmarkedIds, id]);
        }
    }

    return (
        <BookmarksContext.Provider value={{ bookmarkedIds, onToggleBookmark, bookmarks, isLoading, dataUpdatedAt }}>
            {children}
        </BookmarksContext.Provider>
    );
}

export const useBookmarks = () => {
    const value = useContext(BookmarksContext);

    if (!value) {
        throw new Error(`useBookmarks must be wrapped inside BookmarksContextProvider`);
    }

    return value;
}
