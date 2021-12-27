import useSWR from 'swr'



const ENDPOINT = 'filtertopic'



const fetcher = async (ENDPOINT) => {

    // for now use static data to display
    return ([
        {
            label: 'CATEGORIES',
            id: 1
        },
        {
            label: 'COLLECTIONS',
            id: 2
        },
        {
            label: 'COLORS',
            id: 3
        },
        {
            label: 'STYLES',
            id: 4
        },
        {
            label: 'BRANDS',
            id: 5
        }
    ])
   
}

export function useFilterTopic() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
