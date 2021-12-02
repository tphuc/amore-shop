import useSWR from 'swr'



const ENDPOINT = 'products'



const fetcher = async (ENDPOINT) => {

    // for now use static data to display
    return ([
        {
            label: 'Short Monogram Wool Elegant Style Peacoats 1',
            id: 1
        },
        {
            label: 'Short Monogram Wool Elegant Style Peacoats 2',
            id: 2
        },
        {
            label: 'Short Monogram Wool Elegant Style Peacoats 3',
            id: 3
        },
        {
            label: 'Short Monogram Wool Elegant Style Peacoats 4',
            id: 3
        }
    ])
   
}

export function useProducts() {
    const { data, error, mutate } = useSWR(ENDPOINT, fetcher)
    return {
        mutate,
        data: data,
        isLoading: !error && !data,
        isError: error
    }
}
