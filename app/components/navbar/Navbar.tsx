"use client"
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Container"
import Link from "next/link"
import { Redressed } from "next/font/google"

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] })

const Navbar = () => {
    return (
        <AnimatePresence>
            <motion.div className=" sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
                <motion.div className="py-4 border-b-[1px]">
                    <Container>
                        <motion.div className="flex items-center justify-between gap-3 md:gap-0">
                            <motion.div
                                initial={{ opacity: 0.7, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.7 }}
                                whileHover={{ scale: 1.2, color: "#002207fc" }}>
                                <Link href="/" className={`${redressed.className} font-bold text-2xl`}>
                                    Next-Shop
                                </Link>
                            </motion.div>
                            <div className="hidden md:block">Search</div>
                            <div className="flex items-center gap-8 md:gap-12">
                                <div>Cart Count</div>
                                <div>User Menu</div>
                            </div>
                        </motion.div>

                    </Container>
                </motion.div>
            </motion.div>
        </AnimatePresence>

    );
}

export default Navbar;