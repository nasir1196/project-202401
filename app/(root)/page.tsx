import Container from "../components/Container";
import Banner from "../components/banner/Banner";
import Catagories from "../components/catagories/Catagories";
import OfferBanner from "../components/offerBanner/OfferBanner";

export default function Home() {
  return (
    <div className="p-8">
      <Container>
        <div>
          <OfferBanner />
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Catagories />
        </div>
      </Container>
    </div>
  );
}
