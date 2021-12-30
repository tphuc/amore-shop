import { supabase } from ".."

export const UserAPI = {
    update: async (id, data) => {
        let res = await supabase.from('users').update(data).eq('id', id)
        return res
    }
}