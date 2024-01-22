"use client";

import { Rating } from "@mui/material";
import { formatPrice } from "@/utils/formatPrice";
import Container from "@/app/components/Container";
import { useCallback, useEffect, useState } from "react";
import SelectColor from "@/app/components/productsFetcher/SelectColor";
import SetQuantity from "../components/productsFetcher/SetQuantity";
import ReuseButton from "../components/ReuseButton";
import ProductImages from "../components/productsFetcher/ProductImages";
import { useCart } from "@/hooks/useCart";
import { MdCheckCircle } from "react-icons/md";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

interface ProductDetailsProps {
  product: any;
  productId: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  category: string;
  brand: string;
  selectedImg: SelectedImgType;
  quantity: number;
  price: number;
};

export type SelectedImgType = {
  map(
    arg0: (image: any) => import("react").JSX.Element
  ): import("react").ReactNode;
  color: string;
  colorCode: string;
  image: string;
};

const Horizontal = () => {
  return <hr className="w-[30%] my-2" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({
  product,
  productId,
}) => {
  const router = useRouter()
  const { cartProducts, handleAddProductToCart } = useCart()
  const [isProductInCart, setIsProductInCart] = useState(false)
  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    category: product.category,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    quantity: 1,
    price: product.price,
  });

  useEffect(() => {
    setIsProductInCart(false)
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex((item) => item.id === product.id)
      if (existingIndex > -1) {
        setIsProductInCart(true)
      }
    }
  }, [cartProducts])

  const productRating =
    product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product.reviews.length;

  const handleColorSelect = useCallback(
    (value: SelectedImgType) => {
      setCartProduct((prev) => {
        return { ...prev, selectedImg: value };
      });
    },
    [cartProduct.selectedImg]
  );

  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 10) {
      return toast.error("Oops! Maximum reached")
    }
    setCartProduct((prev) => {
      return { ...prev, quantity:  prev.quantity++  };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity-- };
    });
  }, [cartProduct]);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImages cartProduct={cartProduct} product={product} handleColorSelect={handleColorSelect} />

        <div className="flex flex-col gap-1 text-slate-500 text-sm">
          <h1 className="text-3xl font-medium text-slate-700">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-slate-700">
            {formatPrice(product.price)}
          </p>
          <div className="flex items-center gap-2">
            <Rating value={productRating} readOnly />
            <div>{product.reviews.length} Reviews</div>
          </div>
          <Horizontal />
          <div className="text-justify">
            <h1 className="text-2xl text-slate-800">Product Details</h1>
            <p>{product.description}</p>
          </div>
          <Horizontal />
          <div>
            <span className="font-semibold">Category:</span> {product.category}
          </div>
          <div>
            <span className="font-semibold">Brand:</span> {product.brand}
          </div>
          <div
            className={
              product.inStock
                ? "font-semibold text-teal-400"
                : "font-semibold text-rose-500"
            }
          >
            {product.inStock ? "In stock" : "Out of stock"}
          </div>
          <Horizontal />
          {
            isProductInCart ? (<>
              <p className="mb-2 text-slate-500 flex items-center gap-1">
                <MdCheckCircle className="text-teal-400" size={20} />
                <span>Product added to cart</span>
              </p>
              <div className="max-w-[300px]">
                <ReuseButton label="View Cart" outline onClick={() => router.push("/cart")} />
              </div>
            </>) : (<>
              <SelectColor
                cartProduct={cartProduct}
                images={product.images}
                handleColorSelect={handleColorSelect}
              />
              <Horizontal />
              <div>
                <SetQuantity
                  cartProduct={cartProduct}
                  handleQtyDecrease={handleQtyDecrease}
                  handleQtyIncrease={handleQtyIncrease}
                />
              </div>
              <Horizontal />
              <div className="max-w-[300px]">
                <ReuseButton label="Add to Cart" onClick={() => handleAddProductToCart(cartProduct)} />
              </div>
            </>)
          }

        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
