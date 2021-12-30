import { supabase } from ".."

export const WishlistAPI = {

    addItem: async function(product, user){
        let res = await supabase.from('wishlist').insert({
            user,
            product
        })
        return res
    },

    removeItem: async function(product, user){
        let res = await supabase.from('wishlist').delete().match({
            product,
            user
        })
        return res
    }

}