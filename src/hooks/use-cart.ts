import { Product } from "@/payload-types"
import {create} from "zustand"

export type CartItem = {
    product: Product
}

type CartState = {
    items: CartItem
    addItem: (product: Product) => void
    removeItem: (product: Product) => void
    clearCart: () => void

}

export const useCart = create<CartState>()