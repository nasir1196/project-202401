import ProductDetails from "../ProductDetails";
import Container from "@/app/components/Container";
import ListRating from "../ListRating";
import { products } from "@/utils/fakeData";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {

  const product = products.find((pd) => pd.id === params.productId)
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