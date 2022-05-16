import styled from '@emotion/styled';
import { Card, CardContent, Grid } from '@mui/material';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';

const StyledCardContent = styled(CardContent)`
  padding: 16px 0;
`;
const StyledCard = styled(Card)`
  height: fit-content;
  border: 1px solid #efefef;
  background-color: #fcfcfc;
  border-radius: 10px;
  box-shadow: 0 3px 4px -3.5px #838383;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled(StyledCardContent)`
  font-size: 1rem;
  font-weight: bold;
`;
const DonutChart = styled(StyledCardContent)`
  border: 1px solid black;
`;
const InfoWrapper = styled(StyledCardContent)`
  display: flex;
  align-items: center;
  padding: 5px;
  font-size: 12px;
  @media screen and (min-width: 400px) {
    font-size: 14px;
  }
`;
const TankInfo = styled.span`
  font-weight: bold;
  padding: 0 5px;
`;
const Line = styled.div`
  width: 1rem;
  /* dynamic */
  background-color: ${(props) => props.liquidColor};
  height: 0.3rem;
`;
const ProductCard = (props) => {
  const { color, productName, currentLevel, floorStock } = props;
  return (
    <Grid xs={6} sm={4} md={3} lg={2} item>
      <StyledCard>
      <Plot
                data={[
                    {
                            values: [80,100-80],
                            hole: .7,
                            type: 'pie',
                            textinfo: 'none',
                            marker: {'colors':['#efcc0d','#fafad2']},
                            hoverinfo: 'none',
                            
                    },
                ]}
                    layout={ {
                        title: "<b>Smart Lava Yellow</b>",
                        
                        titlefont:{
                            size:14,
                            family: 'Arial, Helvetica, sans-serif',
                            color: "#434343",
                            
                        },
                        
                        annotations: [
                            {
                            font: {
                                size: 8,
                                
                            },
                            showarrow: false,
                            text: "Remaining <br><b>2671</b><br>Applicatons",
                            align: 'center',
                            font:{
                                size:6,
                               
                            },
                            showlegend:false,
                            
                            }
                        ],
                        showlegend: false,
                        width: 150, 
                        height: 150,
                        autosize:false,
                            margin:{
                                t:50,
                                b:0,
                                r:0,
                                l:0,
                            //  pad:4
                            },
                            
                        
                        
                       
                    } }
                />
        {/* <Title>{productName}</Title>
        <DonutChart>Donut Chart</DonutChart>
        <InfoWrapper>
          <Line liquidColor={color} />
          <TankInfo>{currentLevel}%</TankInfo>
          Tank Level
        </InfoWrapper> */}
        <InfoWrapper>
          <TankInfo>{floorStock}/gallons</TankInfo>
          Floor Stock
        </InfoWrapper>
      </StyledCard>
    </Grid>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  currentLevel: PropTypes.number.isRequired,
  floorStock: PropTypes.number.isRequired,
};

export default ProductCard;
