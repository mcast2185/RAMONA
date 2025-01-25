import {create} from "zustand";
import {persist} from "zustand/middleware";
import { Design, Product } from "../../../sanity.types";
import { ComponentState } from "react";

export interface BasketItem {
  product: Product;
  design: Design;
  quantity: number;
};

interface BasketState {
  items: BasketItem[];
  addItem: (product: Product, design: Design) => void;
  removeItem: (productId: string, designId: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getItemCount: (productId: string, designId: string) => number;
  getGroupedItems: () => BasketItem[];
};

const useBasketStore = create<BasketState>()(
  persist((set, get) => ({
    items: [],
    addItem: (product: Product, design: Design) => set((state: ComponentState) => {
      const existingItem = state.items.find((item: BasketItem) => item.product._id === product._id);
      if (existingItem) {
        return {
          items: state.items.map((item: BasketItem) => item.product._id === product._id ? {...item, quantity: item.quantity + 1}: item)
        };
      } else {
        return {items: [...state.items, { product, design, quantity: 1}]};
      };
    }),
    removeItem: (productId: string) => set((state: ComponentState) => ({
      items: state.items.reduce((acc:BasketItem[], item: BasketItem) => {
        if (item.product._id === productId) {
          if (item.quantity > 1) {
            acc.push({...item, quantity: item.quantity -1});
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [] as BasketItem[])
    })),
    clearBasket: () => set({ items: []}),
    getTotalPrice: () => {
      return get().items.reduce((total: number, item: BasketItem) => total + (item.product.price ?? 0) * item.quantity, 0);
    },
    getItemCount: (productId) => {
      const item = get().items.find(item => item.product._id === productId);
      return item ? item.quantity : 0;
    },
    getGroupedItems: () => get().items,
  }),
  {
    name: "basket-store",
  }
));