import React from "react";
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import ('../../components/ProductContainer/index'),
  { ssr: false }
)
// import ProductContainer from "../../components/";
function Product() {
  return (
    <div>
      {" "}
      <DynamicComponentWithNoSSR/>
      {/* <ProductContainer /> */}
    </div>
  );
}
export default Product;
