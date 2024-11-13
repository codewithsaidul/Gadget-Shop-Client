import Accordion from "../components/Home/Accordion";
import Banner from "../components/Home/Banner";
import FeaturedProduct from "../components/Home/FeaturedProduct";
import UserReview from "../components/Home/UserReview";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="container mx-auto px-4 sm:px-0">
        <div className="my-24">
          <h2 className="mb-20 text-2xl font-bold text-center">Featured Products</h2>
          <FeaturedProduct />
        </div>
        <div className="my-24">
          <h2 className="mb-20 text-2xl font-bold text-center">User Review</h2>
          <UserReview />
        </div>
        <div className="my-24">
          <h2 className="mb-20 text-2xl font-bold text-center">Frequently Asked Question</h2>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Home;
