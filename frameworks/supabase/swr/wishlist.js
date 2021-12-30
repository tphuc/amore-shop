import useSWR from 'swr'
import { supabase } from '..'



const ENDPOINT = 'wishlists'



const fetcher = async (ENDPOINT, user_id) => {
    let res = await supabase.from(ENDPOINT).select('*').filter('user', 'eq', user_id)
    return res.data
   
}

export function useCategories(user_id) {
    const { data, error, mutate } = useSWR([ENDPOINT, user_id], fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
