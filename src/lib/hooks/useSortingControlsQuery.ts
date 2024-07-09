import { useQuery } from "@tanstack/react-query";
import supabase from "../supabase";
import { JobItem, SortedBy } from "../types";
import { handleError, handleStringPattern } from "../utils";


type FullJobListApiResponse = {
    fullJobList: JobItem[]
}

const fetchFullJobList = async (value: string): Promise<FullJobListApiResponse> => {    
    const strToMatch = handleStringPattern(value);

    const { data, error } = await supabase
        .from('job_offers')
        .select(`*`)
        .ilike('title', `%${strToMatch}%`)

    if (error) {
        console.log(error);
        throw error;
    }

    return { fullJobList: data };
}

export function useSortingControlsQuery(value: string, filter: SortedBy) {
    const { data } = useQuery(
        ['job-items', value],
        () => fetchFullJobList(value),
        {
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: filter === "Shuffle",
            onError: handleError,
        }
    )

    const fullJobList = data?.fullJobList || [];
    
    return { fullJobList }
}