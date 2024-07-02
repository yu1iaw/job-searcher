import { useQuery } from "@tanstack/react-query";
import { handleError } from "../utils";
import { SelectedJobItem } from "../types";
import { BASE_API_URL } from "../constants";



type JobItemApiResponse = {
    public: boolean;
    jobItem: SelectedJobItem;
}

export const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
    const res = await fetch(`${BASE_API_URL}/${id}`);
    // 4xx or 5xx
    if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.description);
    }
    const data = await res.json();
    return data;
}

export function useSelectedJobItem(id: number | null) {
    const { data, isInitialLoading } = useQuery(
        ['job-item', id],
        () => id ? fetchJobItem(id) : null,
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: !!id,
            onError: (error) => {
                console.log(error);  
                handleError(error);
            }
        }
    )
    const selectedJobItem = data?.jobItem;

    return { selectedJobItem, isLoading: isInitialLoading }
}