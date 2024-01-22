import { CartProductType } from "@/app/product/ProductDetails";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface CartContextType {
    cartTotalQty: number,
    totalCartAmount: number,
    cartProducts: CartProductType[] | null;
    handleAddProductToCart: (product: CartProductType) => void;
    handleRemovedProduct: (product: CartProductType) => void;
    handleIncreaseCartQuantity: (product: CartProductType) => void;
    handleDecreaseCartQuantity: (product: CartProductType) => void;
    handleClearCart: () => void;
}
interface Props {
    [propName: string]: any
}

export const CartContext = createContext<CartContextType | null>(null);

export const CartContextProvider = (props: Props) => {
    const [cartTotalQty, setCartTotalQty] = useState(0)
    const [totalCartAmount, setTotalCartAmount] = useState(0)
    const [cartProducts, setCartProducts] = useState<CartProductType[] | null>(null)


    useEffect(() => {
        const cartItem: any = localStorage.getItem("2AbbuCartItems")
        const cProducts: CartProductType[] | null = JSON.parse(cartItem)
        setCartProducts(cProducts)
    }, [])


    useEffect(() => {



        const getTotal = () => {
            if (cartProducts) {
                const { total, qty } = cartProducts?.reduce((acc, item) => {
                    const itemsTotal = item.price * item.quantity

                    acc.total += itemsTotal
                    acc.qty += item.quantity

                    return acc;
                }, { total: 0, qty: 0 })

                setCartTotalQty(qty)
                setTotalCartAmount(total)
            }
        }
        getTotal();
    }, [cartProducts])

    const handleAddProductToCart = useCallback((product: CartProductType) => {
        setCartProducts((prev) => {
            let updatedCart;

            if (prev) {
                updatedCart = [...prev, product]
            } else {
                updatedCart = [product]
            }
            toast.success("Product added to Cart")
            localStorage.setItem("2AbbuCartItems", JSON.stringify(updatedCart))
            return updatedCart;
        })
    }, [])

    const handleRemovedProduct = useCallback((product: CartProductType) => {
        if (cartProducts) {
            const filterProduct = cartProducts.filter((item) => {
                return item.id !== product.id
            })

            setCartProducts(filterProduct)
            toast.success("Removed Product")
            localStorage.setItem("2AbbuCartItems", JSON.stringify(filterProduct))
        }
    }, [cartProducts])



    const handleIncreaseCartQuantity = useCallback((product: CartProductType) => {
        let updatedCart;

        if (product.quantity === 10) {
            return toast.error("Oops! Maximum reached")
        }

        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existIndex = cartProducts.findIndex((item) => item.id === product.id)

            if (existIndex > -1) {
                updatedCart[existIndex].quantity = updatedCart[existIndex].quantity++
            }

            setCartProducts(updatedCart)
            localStorage.setItem("2AbbuCartItems", JSON.stringify(updatedCart))

        }
    }, [cartProducts])

    const handleDecreaseCartQuantity = useCallback((product: CartProductType) => {
        let updatedCart;

        if (product.quantity === 1) {
            return toast.error("Oops! Minimum reached")
        }

        if (cartProducts) {
            updatedCart = [...cartProducts]
            const existIndex = cartProducts.findIndex((item) => item.id === product.id)

            if (existIndex > -1) {
                updatedCart[existIndex].quantity = updatedCart[existIndex].quantity--
            }

            setCartProducts(updatedCart)
            localStorage.setItem("2AbbuCartItems", JSON.stringify(updatedCart))

        }
    }, [cartProducts])

    const handleClearCart = useCallback(() => {
        setCartProducts(null)
        setCartTotalQty(0)
        localStorage.setItem("2AbbuCartItems", JSON.stringify(null))
        toast.success("Cart successfully clear")
    }, [cartProducts])

    const value = { cartTotalQty, cartProducts, handleAddProductToCart, handleRemovedProduct, handleIncreaseCartQuantity, handleDecreaseCartQuantity, handleClearCart, totalCartAmount }


    return <CartContext.Provider value={value} {...props} />
}

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider")
    }

    return context
}