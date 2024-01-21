import ProductDetails from "../ProductDetails";
import { product } from "@/utils/product"; 
import Container from "@/app/components/Container";
import ListRating from "../ListRating";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  return (
    <div className="mt-10">
      <Container>
        <ProductDetails product={product} productId={params} />
        <div className="flex flex-col mt-20  gap-4">
          <div>Add Rating</div>
          <div>
            <ListRating product={product} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;