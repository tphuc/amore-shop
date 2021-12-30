import { supabase } from ".."

export const CommentsAPI = {

    addItem: async function(user, product, content ){
        let res = await supabase.from('comments').insert({
            user,
            product,
            content
        })
        return res
    },

}