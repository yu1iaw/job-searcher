import { useQuery } from "@tanstack/react-query";
import { JobItem } from "../types";
import { handleError } from "../utils";
import supabase from "../supabase";
import { JOBS_PER_PAGE } from "../constants";


type JobItemsApiResponse = {
    jobItems: JobItem[];
    count: number | null;
}

const fetchJobItems = async (value: string, page: number): Promise<JobItemsApiResponse> => {
    const { data, count, error } = await supabase
        .from('job_offers')
        .select(`*`, { count: "exact" })
        .ilikeAnyOf('title', [`%${value}%`, `%${value}_%`])
        .order('daysAgo', {ascending: true})
        .limit(JOBS_PER_PAGE)
        .range(page * JOBS_PER_PAGE - JOBS_PER_PAGE, page * JOBS_PER_PAGE - 1)
    
    if (error) {
        console.log(error);
        throw error;
    }
    
    return {
        jobItems: data,
        count
    }
}


export function useSearchQuery(value: string, page = 1) {
    const { data, isInitialLoading } = useQuery(
        ['job-items', value, page],
        () => fetchJobItems(value, page),
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            // enabled: Boolean(value),
            onError: handleError
        }
    )
    
    const jobItems = data?.jobItems;    
    const total = data?.count ?? 0;
  

    return { jobItems, total, jobItemsIsLoading: isInitialLoading }
}