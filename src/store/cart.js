import { create } from 'zustand'
import { persist } from 'zustand/middleware';

export const useCartStore = create(persist((set) => ({
  products: [],
  addProducts: (product, quantity) => {
    product = { ...product, quantity: quantity }
    set((state) => ({ products: state.products.concat(product) }))
  },
  removeProducts: (product) =>
    set((state) => ({
      products: state.products.filter((p) => p.name != product.name),
    })),
}), {name: "cart-store"}))
