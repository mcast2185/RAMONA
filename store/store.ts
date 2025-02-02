import {create} from "zustand";
import {persist} from "zustand/middleware";
import { Design, Product } from "../sanity.types";
import { ComponentState } from "react";

export interface BasketItem {
  product: Product;
  design: Design;
  quantity: number;
};

interface ProductBasketState {
  items: BasketItem[];
  addProductItem: (product: Product) => void;
  removeProductItem: (productId: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getProductItemCount: (productId: string,) => number;
  getGroupedItems: () => BasketItem[];
};


interface DesignBasketState {
  items: BasketItem[];
  addDesignItem: (design: Design) => void;
  removeDesignItem: ( designId: string) => void;
  clearBasket: () => void;
  getTotalPrice: () => number;
  getDesignItemCount: (designId: string) => number;
  getGroupedItems: () => BasketItem[];
};


export const useProductBasketStore = create<ProductBasketState>()(
  persist((set, get) => ({
    items: [],
    addProductItem: (product: Product) => set((state: ComponentState) => {
      const existingItem = state.items.find((item: BasketItem) => item.product?._id === product._id);
      if (existingItem) {
        return {
          items: state.items.map((item: BasketItem) => item.product?._id === product._id ? {...item, quantity: item.quantity + 1}: item)
        };
      } else {
        return {items: [...state.items, { product, quantity: 1}]};
      };
    }),
    removeProductItem: (productId: string) => set((state: ComponentState) => ({
      items: state.items.reduce((acc:BasketItem[], item: BasketItem) => {
        if (item.product?._id === productId) {
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
    getProductItemCount: (productId) => {
      const item = get().items.find(item => item.product?._id === productId);
      return item ? item.quantity : 0;
    },
    getGroupedItems: () => get().items,
  }),
  {
    name: "basket-store",
  }
));

export const useDesignBasketStore = create<DesignBasketState>()(
  persist((set, get) => ({
    items: [],
    addDesignItem: (design: Design) => set((state: ComponentState) => {
      const existingItem = state.items.find((item: BasketItem) => item.design?._id === design._id);
      if (existingItem) {
        return {
          items: state.items.map((item: BasketItem) => item.design?._id === design._id ? {...item, quantity: item.quantity + 1}: item)
        };
      } else {
        return {items: [...state.items, { design, quantity: 1}]};
      };
    }),
    removeDesignItem: (designId: string) => set((state: ComponentState) => ({
      items: state.items.reduce((acc:BasketItem[], item: BasketItem) => {
        if (item.design?._id === designId) {
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
      return get().items.reduce((total: number, item: BasketItem) => total + (item.design.price ?? 0) * item.quantity, 0);
    },
    getDesignItemCount: (designId) => {
      const item = get().items.find(item => item.design?._id === designId);
      return item ? item.quantity : 0;
    },
    getGroupedItems: () => get().items,
  }),
  {
    name: "basket-store",
  }
));