import useSWR from 'swr'
import { supabase } from '..'



const ENDPOINT = 'users'



const fetcher = async (ENDPOINT) => {
    let id = supabase.auth.user().id
    let res = await supabase.from(ENDPOINT).select('*').match({id}).single()
    return res.data
   
}

export function useUser() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
