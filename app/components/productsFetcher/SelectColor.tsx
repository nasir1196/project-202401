"use client";

import Image from "next/image";
import {
  CartProductType,
  SelectedImgType,
} from "../../product/ProductDetails";

interface SelectColorProps {
  images: SelectedImgType;
  cartProduct: CartProductType;
  handleColorSelect: (value: SelectedImgType) => void;
}
const SelectColor: React.FC<SelectColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <span className="font-semibold">COLOR:</span>
        <div className="flex gap-1">
          {images.map((image) => {
            return (
              <div
              onClick={()=>handleColorSelect(image)}
                className={`
                        h-7
                         w-7
                         rounded-full
                         border-teal-300
                         flex
                         items-center
                         justify-center
                         ${
                           cartProduct.selectedImg.color === image.color
                             ? "border-[1.5px]"
                             : "border-none"
                         }
                         `}
                key={image.colorCode}
              >
                <div
                  style={{ background: image.colorCode }}
                  className="h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer"
                >

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectColor;