"use client"

import { formatPrice } from "@/utils/formatPrice";
import { CartProductType } from "../product/ProductDetails";
import Link from "next/link";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import SetQuantity from "../components/productsFetcher/SetQuantity";
import { useCart } from "@/hooks/useCart";

interface ItemContentProps {
    item: CartProductType
}

const ItemContent: React.FC<ItemContentProps> = ({ item }) => {
    const { handleRemovedProduct, handleIncreaseCartQuantity,handleDecreaseCartQuantity } = useCart()
    return (
        <div className="grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-300 py-4 items-center">
            <div className="col-span-2 justify-center flex gap-2 md:gap-4">
                <Link href={`/product/${item.id}`}>
                    <div className="relative aspect-square">
                        <Image src={item.selectedImg.image} alt={item.name} className="object-contain w-[20%] h-[20%]" />
                    </div>
                </Link>
                <div className="flex flex-col justify-between">
                    <Link href={`/product/${item.id}`}>{truncateText(item.name)}</Link>
                    <div>{item.selectedImg.color}</div>
                    <div className="w-[70px]">
                        <button className="text-slate-600 underline" onClick={() => handleRemovedProduct(item)}>Remove</button>
                    </div>
                </div>
            </div>
            <div className="justify-self-center">{formatPrice(item.price)}</div>
            <div className="justify-self-center">
                <SetQuantity
                    cartCounter={true}
                    cartProduct={item}
                    handleQtyIncrease={() => {handleIncreaseCartQuantity(item)}}
                    handleQtyDecrease={() => {handleDecreaseCartQuantity(item)}}
                />
            </div>
            <div className="justify-self-end font-semibold">
                {formatPrice(item.price * item.quantity)}
            </div>
        </div>
    )
}

export default ItemContent;