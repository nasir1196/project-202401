import Container from "../components/Container";
import Banner from "../components/banner/Banner";
import AlterNav from "../components/navbar/AlterNav";
import OfferBanner from "../components/offerBanner/OfferBanner";
import ProductContainer from "../components/productsFetcher/ProductContainer";


export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div className="hidden md:block lg:block xl:block">
          <AlterNav />
        </div>
        <div>
          <OfferBanner />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <ProductContainer />
        </div>
      </Container>
    </div>
  );
}
