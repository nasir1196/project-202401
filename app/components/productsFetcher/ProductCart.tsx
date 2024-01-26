"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { truncateText } from "@/utils/truncateText"; 
import { formatPrice } from "@/utils/formatPrice"; 
import { Rating } from "@mui/material";
import { useRouter ,usePathname} from "next/navigation";

interface ProductCartProps {
  data: any;
}

const ProductCart: React.FC<ProductCartProps> = ({ data }) => {
  const router = useRouter();
  const productRating =
    data.reviews.reduce((acc: number, item: any) => item.rating + acc, 0) /
    data.reviews.length;
  return (
    <motion.div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 cursor-pointer border-[1.2px] border-slate-200
      bg-slate-50 rounded-sm p-2 text-center text-sm"
      initial={{ x: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.div className="flex flex-col items-center w-full gap-1">
        <motion.div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={data.images[0].image}
            alt={data.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full object-contain product"
          />
        </motion.div>
        <motion.div className="mt-4 product-name">{truncateText(data.name)}</motion.div>
        <motion.div>
          <Rating name="simple-controlled" value={productRating} readOnly />
        </motion.div>
        <motion.div>{data.reviews.length} Reviews</motion.div>
        <motion.div className="font-semibold">
          {formatPrice(data.price)}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProductCart;