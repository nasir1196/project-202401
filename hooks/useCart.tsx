import { CartProductType } from "@/app/product/ProductDetails";
import { createContext, useContext, useState } from "react";

interface CartContextType {
    cartTotalQty: number,
    // cartProducts:CartProductType[] | null;
    // handleAddProductToCart:(product:CartProductType)=>void
}
interface Props {
    [propName: string]: any
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    // const [cartProducts, setCartProducts] = useState<CartProductType[]| null>(null)

    const value = { cartTotalQty }


    return <CartContext.Provider value={value} />
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider")
    }

    return context
}