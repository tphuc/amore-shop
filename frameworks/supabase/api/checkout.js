import { supabase } from ".."

export const CheckoutAPI = {

    addItem: async function(user, address, full_name, paymentMethod, phone, total, cart, is_paid, ){
        let res = await supabase.from('orders').insert({
            address,
            full_name,
            paymentMethod,
            phone,
            total,
            cart,
            is_paid,
            user
        })
        return res
    },

}