import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import CartTotal from "./CartTotal";

const Products = () => {
  // Grab user from store
  const userName = useSelector((state) => state.userName.userName);

  // Grab products from store
  const products = useSelector((state) => state.products);

  return (
    <div>
      <h1>Products</h1>
      <hr />
      {/* Only logged in users can buy products */}
      {userName === "Logged out" && (
        <h5 className="m-1">
          Please make sure you are logged in or registered to buy products.
        </h5>
      )}
      <CartTotal />
      <ul className="list-group">
        {products.map((product) => (
          <ProductItem
            description={product.description}
            id={product.id}
            img={product.img}
            key={product.id}
            name={product.name}
            price={product.price}
          />
        )) || <h3>Loading ...</h3>}
      </ul>
    </div>
  );
};

export default Products;
