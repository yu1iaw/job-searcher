import { useRef, useState } from "react";
import { TriangleDownIcon } from "@radix-ui/react-icons";
import BookmarksPopover from "./BookmarksPopover";
import { useOnClickOutside } from "../lib/hooks/useOnClickOutside";



export default function BookmarksButton() {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const popupRef = useRef<HTMLDivElement>(null);
    useOnClickOutside([buttonRef, popupRef], () => setIsOpenPopup(false));


    return (
        <section>
            <button
                ref={buttonRef}
                onClick={() => setIsOpenPopup(!isOpenPopup)}
                className="bookmarks-btn"
            >
                Bookmarks <TriangleDownIcon />
            </button>
            {isOpenPopup && <BookmarksPopover ref={popupRef} />}
        </section>
    )
}