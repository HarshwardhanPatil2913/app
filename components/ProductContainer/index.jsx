import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductsContainer = styled(Grid)`
  margin-bottom: 20px;
`;
const products = [
  {
    id: 1,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#FFB221",
  },
  {
    id: 2,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#B5BC5A",
  },
  {
    id: 3,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#57CFDE",
  },
  {
    id: 4,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#E66040",
  },
  {
    id: 5,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#1768C7",
  },
  {
    id: 6,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#F7E50D",
  },
  {
    id: 7,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#6CB0BC",
  },
  {
    id: 8,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#A37100",
  },
  {
    id: 9,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#63B54A",
  },
  {
    id: 10,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#646D71",
  },
  {
    id: 11,
    productName: "Product Name",
    currentLevel: 90,
    floorStock: 950,
    color: "#A05FB9",
  },
];
const ProductContainer = () => {
  return (
    <ProductsContainer
      container
      px={{ xs: 1, sm: 2 }}
      spacing={{ xs: 1, sm: 2 }}
    >
      {products.map((product) => {
        return <ProductCard {...product} key={product.id} />;
      })}
    </ProductsContainer>
  );
};

export default ProductContainer;
