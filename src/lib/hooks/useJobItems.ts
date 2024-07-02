import { useQueries } from "@tanstack/react-query";
import { handleError } from "../utils";
import { fetchJobItem } from "./useSelectedJobItem";
import { SelectedJobItem } from "../types";


export function useJobItems(ids: number[]) {
    const results = useQueries({
        queries: ids.map(id => ({
            queryKey: ['job-item', id],
            queryFn: () => fetchJobItem(id),
            staleTime: 1000 * 60 * 60,
            refetchOnWindowFocus: false,
            retry: false,
            enabled: !!id,
            onError: handleError
        }))
    })

    const bookmarks = results.map(res => res.data?.jobItem).filter(Boolean) as SelectedJobItem[];
    const isLoading = results.some(res => res.isLoading);
    const dataUpdatedAt = results[0]?.dataUpdatedAt;

    return { bookmarks, isLoading, dataUpdatedAt }
}