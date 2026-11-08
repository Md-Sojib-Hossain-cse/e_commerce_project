import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "@/redux/store"

export interface TCartItem {
  productId: string
  name: string
  image?: string
  unitPrice: number
  quantity: number
  totalAmount: number
}

interface CartState {
  items: TCartItem[]
  totalItems: number
  totalAmount: number
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
}

const calculateTotals = (items: TCartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const totalAmount = items.reduce((sum, item) => sum + item.totalAmount, 0)

  return { totalItems, totalAmount }
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<Omit<TCartItem, "totalAmount">>
    ) => {
      const { productId, quantity, unitPrice, ...rest } = action.payload

      const existingItem = state.items.find(
        (item) => item.productId === productId
      )

      if (existingItem) {
        existingItem.quantity += quantity
        existingItem.totalAmount =
          existingItem.quantity * existingItem.unitPrice
      } else {
        state.items.push({
          productId,
          quantity,
          unitPrice,
          ...rest,
          totalAmount: quantity * unitPrice,
        })
      }

      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.totalAmount = totals.totalAmount
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      )

      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.totalAmount = totals.totalAmount
    },

    updateCartItemQuantity: (
      state,
      action: PayloadAction<{ productId: string; quantity: number }>
    ) => {
      const { productId, quantity } = action.payload

      const item = state.items.find((item) => item.productId === productId)

      if (item && quantity > 0) {
        item.quantity = quantity
        item.totalAmount = item.quantity * item.unitPrice

        const totals = calculateTotals(state.items)
        state.totalItems = totals.totalItems
        state.totalAmount = totals.totalAmount
      }
    },

    clearCart: (state) => {
      state.items = []
      state.totalItems = 0
      state.totalAmount = 0
    },

    hydrateCart: (state, action: PayloadAction<TCartItem[]>) => {
      state.items = action.payload

      const totals = calculateTotals(state.items)
      state.totalItems = totals.totalItems
      state.totalAmount = totals.totalAmount
    },
  },
})

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  hydrateCart,
} = cartSlice.actions

export const selectCartItems = (state: RootState) => state.cart.items
export const selectCartTotalItems = (state: RootState) => state.cart.totalItems
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.totalAmount

export const selectCartItemByProductId =
  (productId: string) => (state: RootState) =>
    state.cart.items.find((item) => item.productId === productId)

export default cartSlice.reducer
