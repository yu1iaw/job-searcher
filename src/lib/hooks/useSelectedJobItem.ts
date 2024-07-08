import { useQuery } from "@tanstack/react-query";
import { handleError } from "../utils";
import { SelectedJobItem } from "../types";
import supabase from "../supabase";


type JobItemApiResponse = {
    jobItem: SelectedJobItem;
}

export const fetchJobItem = async (id: number): Promise<JobItemApiResponse> => {
    const { data, error } = await supabase
        .from('job_offers_details')
        .select(`*, job_offer:id (*)`)
        .eq('id', id)
        .single()
    
    if (error) throw error.details;
    
    const { job_offer, ...rest } = data;
    const jobItem = {
        ...rest,
        ...job_offer
    }
    // @ts-ignore
    return { jobItem };
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