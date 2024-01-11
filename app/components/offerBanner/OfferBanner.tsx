"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import bannerImage from '../../../public/offer/black-friday.jpg'


const OfferBanner = () => {
    return (
        <motion.div className="relative bg-gradient-to-r from-orange-500 to-orange-800 mb-8">
            <motion.div className="mx-auto px-8 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <motion.div className="mb-8 md:mb-0 text-center">
                    <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Winter Sale!</motion.h1>
                    <motion.p className="text-lg md:text-xl text-white mb-2">Enjoy discount on selected items</motion.p>
                    <motion.p className="text-2xl md:text-5xl text-yellow-400 font-bold">GET 15% OFF</motion.p>
                </motion.div>
                <motion.div initial={{ x: 0, scale:1.3 }} transition={{ duration: 0.6 }} whileHover={{ scale: 1.450 }} className="w-1/3 relative aspect-video">
                    <Image src={bannerImage} alt="Banner Image" fill={true} className="w-full h-full object-contain rounded-md" />
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default OfferBanner;