
import { useState, createContext } from 'react'
import { useContext } from 'react'

export const CartContext = createContext({
})

export function CartProvider({ children }) {
    const [itemsInCart, setItemsInCart] = useState([]);

    return (
        <CartContext.Provider value={{ itemsInCart, setItemsInCart }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
