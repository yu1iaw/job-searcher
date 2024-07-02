import { DotFilledIcon, FontBoldIcon } from "@radix-ui/react-icons";
import { useBookmarks } from "../contexts/BookmarksContextProvider";

export default function Logo() {
    const { bookmarkedIds } = useBookmarks();
    
    return (
        <a href="." className="logo">
            {!!bookmarkedIds.length && (
                <DotFilledIcon color="tomato" className="logo__dicon" width={19} height={19} />
            )}
            <FontBoldIcon className="logo__bicon" color="ivory" width={22} height={22} />
        </a>
    )
}