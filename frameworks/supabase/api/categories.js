import useSWR from 'swr'



const ENDPOINT = 'categories'



const fetcher = async (ENDPOINT) => {

    // for now use static data to display
    return ([
        {
            label: 'MEN',
            id: 1
        },
        {
            label: 'WOMAN',
            id: 2
        }
    ])
   
}

export function useCategories() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
