"use client";
import { motion } from "framer-motion";
import Container from "../Container";
import Link from "next/link";
import { MdFacebook } from "react-icons/md";
import FooterList from "./FooterList";
import bKash from "../../../public/payment/bKash.png";
import bank from "../../../public/payment/bank.png";
import mastercard from "../../../public/payment/mastercard.png";
import nagad from "../../../public/payment/nagad.png";
import onlinebank from "../../../public/payment/onlinebank.png";
import visa from "../../../public/payment/visa.png";

import {
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer className="bg-slate-700 text-slate-200 text-sm mt-16 sm:mx-10 md:mx-2 lg:mx-0">
      <Container>
        <motion.div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <motion.h3
              initial={{
                opacity: 0.9,
                color: "#02949b",
                fontWeight: "bold",
              }}
              animate={{
                x: [0, -100, 0],
                opacity: 1,
                scale: 1.1,
              }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
            >
              Shop Categories
            </motion.h3>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Shirt
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Pants
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Polo T-Shirt
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                T-Shirt
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Panjabi
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                More Products
              </motion.div>
            </Link>
          </FooterList>

          <FooterList>
            <motion.h3
              initial={{
                opacity: 0.9,
                color: "#02949b",
                fontWeight: "bold",
              }}
              animate={{
                x: [0, -100, 0],
                opacity: 1,
                scale: 1.1,
              }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
            >
              Customer Service
            </motion.h3>
            <Link href="/contact">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Online Payment
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Shopping Policy
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Return & Exchange
              </motion.div>
            </Link>
            <Link href="#">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                Cash On Delivery
              </motion.div>
            </Link>
            <Link href="condition">
              <motion.div
                initial={{ scale: 0.95 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.2, color: "#02949b" }}
              >
                FAQs
              </motion.div>
            </Link>
          </FooterList>

          <FooterList>
            <motion.div className="w-full mb-6 md:mb-0">
              <motion.h3
                initial={{
                  opacity: 0.9,
                  color: "#02949b",
                  fontWeight: "bold",
                }}
                animate={{
                  x: [0, -100, 0],
                  opacity: 1,
                  scale: 1.1,
                }}
                transition={{
                  duration: 2,
                  delay: 0.3,
                }}
              >
                Payment Gateway
              </motion.h3>
            </motion.div>
          </FooterList>

          <FooterList>
            <motion.h3
              initial={{
                opacity: 0.9,
                color: "#02949b",
                fontWeight: "bold",
              }}
              animate={{
                x: [0, -100, 0],
                opacity: 1,
                scale: 1.1,
              }}
              transition={{
                duration: 2,
                delay: 0.3,
              }}
            >
              Follow Us
            </motion.h3>
            <motion.div className="flex gap-2">
              <Link href="https://www.facebook.com/NT1196" target="_blank">
                <motion.div
                  className="cursor-pointer md:py-5 py-0 text-center"
                  initial={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "red" }}
                >
                  <MdFacebook size={24} />
                </motion.div>
              </Link>

              <Link href="https://www.twitter.com/nasir1196" target="_blank">
                <motion.div
                  className="cursor-pointer md:py-5 py-0 text-center"
                  initial={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "red" }}
                >
                  <AiFillTwitterCircle size={24} />
                </motion.div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/nasir1196"
                target="_blank"
              >
                <motion.div
                  className="cursor-pointer md:py-5 py-0 text-center"
                  initial={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "red" }}
                >
                  <AiFillLinkedin size={24} />
                </motion.div>
              </Link>

              <Link href="https://github.com/nasir1196" target="_blank">
                <motion.div
                  className="cursor-pointer md:py-5 py-0 text-center"
                  initial={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "red" }}
                >
                  <AiFillGithub size={24} />
                </motion.div>
              </Link>

              <Link
                href="https://www.youtube.com/channel/UCmd6uAf2brkxxe16TA9gZzA"
                target="_blank"
              >
                <motion.div
                  className="cursor-pointer md:py-5 py-0 text-center"
                  initial={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "red" }}
                >
                  <AiFillYoutube size={24} />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div className="flex md:flex-row sm:flex-col md:gap-3 gap-0 my-4">
              <Link href="/about">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  {" "}
                  About
                </motion.div>
              </Link>
              <Link href="/contact">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  {" "}
                  Contact
                </motion.div>
              </Link>
            </motion.div>

            <motion.div className="flex md:flex-row sm:flex-col md:gap-3 gap-0 my-2">
              <Link href="disclaimer">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  {" "}
                  Disclaimer
                </motion.div>
              </Link>

              <Link href="privacy-policy">
                <motion.div
                  initial={{ scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.2, color: "#02949b" }}
                >
                  Privacy Policy
                </motion.div>
              </Link>
            </motion.div>
          </FooterList>
        </motion.div>
      </Container>

      <Container>
        <motion.div className="cursor-pointer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-1 md:px-2 lg:px-5">
          <motion.div>
            <Image
              src={bKash}
              alt="gateway"
              className="block h-32 w-36 object-contain"
            />
          </motion.div>
          <motion.div>
            <Image
              src={bank}
              alt="gateway"
              className="block h-32 w-36 object-contain"
            />
          </motion.div>
          

          <motion.div>
            <Image
              src={nagad}
              alt="gateway"
              className="block h-32 w-36 object-contain"
            />
          </motion.div>
          <motion.div>
            <Image
              src={onlinebank}
              alt="gateway"
              className="block h-32 w-36 object-contain"
            />
          </motion.div>
          <motion.div>
            <Image
              src={visa}
              alt="gateway"
              className="block h-32 w-36 object-contain"
            />
          </motion.div>
        </motion.div>
        </Container>

      <motion.footer>
        <motion.p
          className="cursor-pointer md:py-5 py-0 text-center"
          initial={{ x: 0 }}
          transition={{ duration: 0.4 }}
          whileHover={{ color: "#02949b" }}
        >
          &copy; {new Date().getFullYear()} - 2ABBU All rights reserved.
        </motion.p>
      </motion.footer>
    </motion.footer>
  );
};

export default Footer;
