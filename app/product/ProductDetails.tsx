"use client";

import { Rating } from "@mui/material";
import { formatPrice } from "@/utils/formatPrice";
import Container from "@/app/components/Container";
import { useCallback, useState } from "react";
import SelectColor from "@/app/components/productsFetcher/SelectColor";
import SetQuantity from "../components/productsFetcher/SetQuantity";
import ReuseButton from "../components/ReuseButton";
import ProductImages from "../components/productsFetcher/ProductImages";

interface ProductDetailsProps {
  products: any;
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
  products,
  productId,
}) => {
  const pDetails = products.filter((pd: any) => pd.id === productId.productId);
  const product = pDetails[0];
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
    if (cartProduct.quantity === 99) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity + 1 };
    });
  }, [cartProduct]);

  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity - 1 };
    });
  }, [cartProduct]);
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ProductImages cartProduct={cartProduct} product={products} handleColorSelect={handleColorSelect} />

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
            <ReuseButton label="Add to Cart" onClick={() => { }} />
          </div>
        </div>
      </div>
      <div className="my-4">
        <h1 className="text-3xl font-semibold text-slate-800 text-center my-7">
          Customer Reviews
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {product.reviews.map((rev: any) => {
            const getName = products.filter(
              (item: any) => item.id === rev.productId
            );
            return (
              <div
                className="border-[1.3px] border-teal-500 rounded-md p-3"
                key={rev.id}
              >
                <h2 className="font-semibold text-slate-500">
                  Product: {getName[0].name}
                </h2>
                <p className="text-slate-600">
                  <span className="text-sm font-semibold mr-2">
                    Customer Comment:{" "}
                  </span>
                  {rev.comment}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
