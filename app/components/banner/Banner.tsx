"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import onlinePayment from "../../../public/banner/onlinePayment.jpg";
import cashOnDelivery from "../../../public/banner/cashOnDelivery.jpg";
import cashDelivery from "../../../public/banner/cashDelivery.jpg";
import addCartKey from "../../../public/banner/addCartKey.jpg";
import cardPayment from "../../../public/banner/cardPayment.jpg";
import mobilePayment from "../../../public/banner/mobilePayment.jpg";
import onTimeDelivery from "../../../public/banner/onTimeDelivery.jpg";
import secureShpping from "../../../public/banner/secureShpping.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import { Navigation, Pagination, EffectCube } from "swiper/modules";

const images = [
  { id: 1, image: onlinePayment, alt: "Online Payment", title: "Online Payment" },
  { id: 2, image: cashOnDelivery, alt: "Cash On Delivery", title: "Cash On Delivery" },
  { id: 3, image: cashDelivery, alt: "Wallet Payment", title: "Wallet Payment" },
  { id: 4, image: addCartKey, alt: "Add to Cart", title: "Add to Cart" },
  { id: 5, image: cardPayment, alt: "Card Payment", title: "Card Payment" },
  { id: 6, image: mobilePayment, alt: "Mobile Payment", title: "Mobile Payment" },
  { id: 7, image: onTimeDelivery, alt: "On Time Delivery", title: "On Time Delivery" },
  { id: 8, image: secureShpping, alt: "Secure Shopping", title: "Secure Shopping" },
];

const Banner = () => {
  return (
    <motion.div className="my-10 py-10">
      <Swiper
        navigation
        modules={[Navigation, Pagination, EffectCube]}
        effect="cube"
        className="h-96 w-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
          <div className="position-image">
            <Image src={image.image} alt="img"/>
            <div className="main-image">
              <h2> {
              image.title
             }</h2>
            
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default Banner;
