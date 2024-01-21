"use client"

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import Heading from "../components/productsFetcher/Heading";
import ReuseButton from "../components/ReuseButton";


const CartUI = () => {
    const { cartProducts } = useCart()

    if (cartProducts || cartProducts.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <div className="text-2xl">
                    Your cart is empty
                </div>
                <div>
                    <Link href={"/"} className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack size={24} />
                        <span>Start Shopping</span>
                    </Link>
                </div>
            </div>
        )
    }
    return (
        <div>
            <Heading title="Shopping Cart" center />
            <div className="grid grid-cols-5 text-xs gap-4 pb-2 items-center">
                <div className="col-span-2 justify-self-start">PRODUCT</div>
                <div className="justify-self-center">PRICE</div>
                <div className="justify-self-center">QUANTITY</div>
                <div className="justify-self-end">TOTAL</div>
            </div>
            <div>
                {
                    cartProducts && cartProducts?.map((item: any) => {
                        return (
                            <div key={item.id}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="border-t-[1.5px] border-slate-300 py-4 flex justify-between gap-4">
                <div className="w-[90px]">
                    <ReuseButton label="clear Cart" small outline onClick={() => { }} />
                </div>
                <div className="text-sm flex flex-col gap-1 items-start">
                    <div className="flex justify-between w-full text-base font-semibold">
                        <span>Subtotal</span>
                        <span>$1000</span>
                    </div>
                    <p className="text-slate-500">Tax free and shipping calculate at checkout</p>
                    <ReuseButton label="Checkout" onClick={() => { }} />
                    <Link href="/" className="text-slate-500 flex items-center gap-1 mt-2">
                        <MdArrowBack size={20} />
                        <span>Continue Shopping</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CartUI;