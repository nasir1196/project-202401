"use client"
import { motion } from "framer-motion";
const ShirtItem = () => {
    return (

        <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Shirt
              </motion.div>
    );
  };
  
  export default ShirtItem;
  