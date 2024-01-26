"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import {products} from "@/utils/fakeData"
import { truncateText } from "@/utils/truncateText"; 
import { formatPrice } from "@/utils/formatPrice"; 
import { Rating } from "@mui/material";
import {useRouter, usePathname} from "next/navigation";

const PoloShirtItem = () => {

  const pathName= usePathname();
  const getPath:any =pathName.slice(1)
  const router = useRouter();
  
  
  return (
    <div>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {products && products.map((product: any) =>{
          const productRating =
          product.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
          product.reviews.length;
         return(
          
            getPath === product.category&&  <motion.div
            onClick={() => router.push(`/product/${product.id}`)}
            className="col-span-1 cursor-pointer border-[1.2px] border-slate-200
            bg-slate-50 rounded-sm p-2 text-center text-sm"
            initial={{ x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.1 }}
          >
            <motion.div className="flex flex-col items-center w-full gap-1">
              <motion.div className="aspect-square overflow-hidden relative w-full">
                <Image
                  src={product.images[0].image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-full h-full object-contain product"
                />
              </motion.div>
              <motion.div className="mt-4 product-name">{truncateText(product.name)}</motion.div>
              <motion.div>
                <Rating name="simple-controlled" value={productRating} readOnly />
              </motion.div>
              <motion.div>{product.reviews.length} Reviews</motion.div>
              <motion.div className="font-semibold">
                {formatPrice(product.price)}
              </motion.div>
            </motion.div>
          </motion.div>
            
          
        )})}
      </motion.div>
    </div>
  );
};

export default PoloShirtItem;