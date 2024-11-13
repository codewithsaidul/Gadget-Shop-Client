import ProductCard from "../Shared/ProductCard"


const FeaturedProduct = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  )
}

export default FeaturedProduct