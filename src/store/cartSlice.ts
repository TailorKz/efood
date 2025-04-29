import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CartItem = {
  cartItemId: string
  id: number
  foto: string
  nome: string
  preco: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Omit<CartItem, 'cartItemId'>>) => {
      state.items.push({ ...action.payload, cartItemId: Date.now().toString() })
    },
    remove: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(
        (item) => item.cartItemId !== action.payload
      )
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, remove, open, close } = cartSlice.actions
export default cartSlice.reducer
