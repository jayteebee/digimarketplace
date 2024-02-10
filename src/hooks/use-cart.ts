import { Product } from "@/payload-types"
import {create} from "zustand"
import {persist} from "zustand/middleware"

export type CartItem = {
    product: Product
}

type CartState = {
    items: CartItem
    addItem: (product: Product) => void
    removeItem: (product: Product) => void
    clearCart: () => void

}

export const useCart = create<CartState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (product) => set((state) => ({items: [...state.items, {product}]})),
        }),
        removeItem: (id) => set((state) => ({items: state.items.filter((item) => item.product.id !== product.id)})),
        clearCart: () => set({items: []}),
        
    )
)