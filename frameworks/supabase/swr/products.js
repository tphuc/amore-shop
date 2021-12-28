import useSWR from 'swr'
import { supabase } from '..'



const ENDPOINT = 'products'



const fetcher = async (ENDPOINT, filter) => {
    let res = supabase.from('products').select(`
        *,
        categories!inner(*) (
            *
        )
    `)



    for (let k in filter) {
        if (filter[k]) {
            switch (k) {
                case 'label':
                    res = res.filter('label', 'ilike', `%${filter[k]}%`)
                    break
                case 'category':
                    res = res.eq('categories.id', filter[k])
                    break
            }
        }
    }

    res = await res;
    
    return res.data

}

export function useProducts(filter) {
    const { data, error, mutate } = useSWR([ENDPOINT, filter], fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}



