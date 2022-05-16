import styled from "@emotion/styled";
import Cloudy from "../../assets/Icons/cloudy_icon";
import PropTypes from "prop-types";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Avenir;
`;
const Description = styled.div`
  padding: 5px;
`;
const Temperature = styled.div`
  padding: 5px;
  font-weight: bolder;
`;
function Weather(props) {
  const { temperature, description } = props;
  return (
    <Wrapper>
      <Cloudy />
      <Temperature>{temperature} &#176;</Temperature>
      <Description>{description}</Description>
    </Wrapper>
  );
}

Weather.propTypes = {
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};
export default Weather;
