import { useJobItemsContext } from "../contexts/JobItemsContextProvider";
import JobList from "./JobList";
import Spinner from "./Spinner";



export default function JobListSearch() {
    const { limitedItems, jobItemsIsLoading } = useJobItemsContext();

    return (
        <JobList jobItems={limitedItems} bookmarksStyles={false}>
            {jobItemsIsLoading && <Spinner />}
        </JobList>
    )
}