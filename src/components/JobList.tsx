import JobListItem from "./JobListItem";
import { JobItem, SelectedJobItem } from "../lib/types";
import { useActiveHashContext } from "../contexts/ActiveHashContextProvider";


type JobListProps = {
    jobItems: JobItem[] | SelectedJobItem[];
    children: React.ReactNode;
    bookmarksStyles: boolean;
}

export default function JobList({ jobItems, children, bookmarksStyles }: JobListProps) {
    const { activeId } = useActiveHashContext();

    return (
        <ul className={`job-list ${bookmarksStyles ? 'bookmarks' : ''}`}>
            {children}
            {!children && jobItems?.map(jobItem => (
                <JobListItem
                    key={jobItem.id}
                    jobItem={jobItem}
                    isActive={activeId === jobItem.id}
                    bookmarksStyles={bookmarksStyles}
                />
            ))}
        </ul>
    )
}