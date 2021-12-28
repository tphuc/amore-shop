import useSWR from 'swr'
import { supabase } from '..'



const ENDPOINT = 'orders'



const fetcher = async (ENDPOINT, id) => {
    let res = await supabase.from(ENDPOINT)
        .select('*')
        .eq('user', id)
    return res.data
}

export function useUserOrders(id) {
    const { data, error, mutate } = useSWR([ENDPOINT, id], fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
