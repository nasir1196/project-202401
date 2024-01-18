import { useState } from "react";
import ProductDetails from "../ProductDetails";
import { products } from "@/utils/fakeData";
import Container from "@/app/components/Container";
import ListRating from "../ListRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="mt-10">
      <Container>
        <ProductDetails products={products} productId={params} />
        <div className="flex flex-col mt-20  gap-4">
          <div>Add Rating</div>
          <div>
            <ListRating product={products} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;