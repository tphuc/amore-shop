import { supabase } from "..";

export const ProductAPI = {
    getAll: async () => {
        let res = await supabase.from('products').select('*')
        return res.data
    },
    getById: async (id) => {
        let res = await supabase.from('products').select('*').match({id}).single()
        return res.data
    },
}