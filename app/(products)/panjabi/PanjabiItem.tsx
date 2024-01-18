"use client"
import ProductCart from "@/app/components/productsFetcher/ProductCart";
import { products } from "@/utils/fakeData";
import { motion } from "framer-motion";

const PanjabiItem = () => {
  
  return (
    <div>
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        { products?.map((product: any) => (
          <ProductCart key={product.id} data={product} />
        ))}
      </motion.div>
    </div>
  );
};

export default PanjabiItem;