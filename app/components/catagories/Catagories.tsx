import Image from "next/image";
import shirt from "../../../public/image/best-Black-formal-shirt-in-bd-800x800-removebg-preview.png"
import Link from "next/link";
import panjabi from "../../../public/image/panjabi.png"
import pent from "../../../public/image/pent.png"
import tshirt from "../../../public/image/t-shirt.png"
import polo from "../../../public/image/polo-tshirt.png"
const Catagories = () => {
  return (
    <div className="categories">
      <h1>
        Catagories
      </h1>
      <p >
        A list of product, Secure and Authenticate
      </p>
      <div className="products">
        <Link href={'/'}>
        <div className="product">
          <Image src={shirt} alt="" />
        </div>
        <div className="product-name">
          <h5>Shirt</h5>
        </div>
        </Link>

        <Link href={'/'}>
        <div className="product">
          <Image src={panjabi} alt="" />
        </div>
        <div className="product-name">
          <h5>Panjabi</h5>
        </div>
        </Link>
        
        <Link href={'/'}>
        <div className="product">
          <Image src={pent} alt="" />
        </div>
        <div className="product-name">
          <h5>Pent</h5>
        </div>
        </Link>

        <Link href={'/'}>
        <div className="product">
          <Image src={tshirt} alt="" />
        </div>
        <div className="product-name">
          <h5>T-Shirt</h5>
        </div>
        </Link>

        <Link href={'/'}>
        <div className="product">
          <Image src={polo} alt="" />
        </div>
        <div className="product-name">
          <h5>Polo Shirt</h5>
        </div>
        </Link>

      </div>
    </div>
  );
};

export default Catagories;
