import { useQuery } from "@tanstack/react-query";
import { BASE_API_URL } from "../constants";
import { JobItem } from "../types";
import { handleError } from "../utils";


type JobItemsApiResponse = {
    public: boolean;
    sorted: boolean;
    jobItems: JobItem[];
}

const fetchJobItems = async (value: string): Promise<JobItemsApiResponse> => {
    const res = await fetch(`${BASE_API_URL}?search=${value}`)
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.description);
    }

    const data = await res.json();
    return data;
}

export function useSearchQuery(value: string) {
    const { data, isInitialLoading } = useQuery(
        ['job-items', value],
        () => fetchJobItems(value),
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: Boolean(value),
            onError: handleError
        }
    )

    const jobItems = data?.jobItems;

    return { jobItems, jobItemsIsLoading: isInitialLoading }
}