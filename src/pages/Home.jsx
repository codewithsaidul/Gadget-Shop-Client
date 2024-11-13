import Banner from "../components/Home/Banner";
import FeaturedProduct from "../components/Home/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="my-24">
        <h2 className="mb-20 text-2xl font-bold text-center">Featured Products</h2>
        <FeaturedProduct />
      </div>
    </div>
  );
};

export default Home;
