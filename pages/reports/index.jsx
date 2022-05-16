import * as React from 'react';
import { Card, CardContent, Grid } from '@mui/material';
import styled from '@emotion/styled';
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
function Reports() {
  return (
    <div>
      <ProductsContainer container px={2} spacing={2}>
        {arr.map((_, index) => {
          return <Grid key={index} xs={6} sm={4} md={3} lg={2} item></Grid>;
        })}
      </ProductsContainer>
    </div>
  );
}
export default Reports;
const ProductsContainer = styled(Grid)`
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ProductCard = styled(Card)`
  height: fit-content;
  background-color: #fbfbfb;
`;
