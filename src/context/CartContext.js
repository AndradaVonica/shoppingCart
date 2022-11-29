
import { useState, createContext } from 'react'

export const CartContext = createContext({
    items: [],
    addItemToCart: () => { },
    removeItemFromCart: () => { },
    deleteItemFromCart: () => { },
    getTotalCost: () => { }
});

export function CartProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

    // const contextValue = {
    //     items: [],
    //     addItemToCart,
    //     removeItemFromCart,
    //     deleteItemFromCart,
    //     getTotalCost

    // }
}

