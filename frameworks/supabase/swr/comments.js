import useSWR from 'swr'
import { supabase } from '..'



const ENDPOINT = 'comments'



const fetcher = async (ENDPOINT) => {

    let res = await supabase.from(ENDPOINT).select(`
        *,
        user (
            *
        )
    `)
    return res.data
   
}

export function useComments() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
