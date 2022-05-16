import styled from "@emotion/styled";
import { IconButton, Typography } from "@mui/material";
import LocationIcon from "../../assets/Icons/location_icon";
import PropTypes from "prop-types";

const LocationInfo = styled(Typography)`
  font-weight: bold;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1.8px solid #efefef;
`;
const Location = ({ location }) => {
  return (
    <Wrapper>
      <LocationInfo>{location} </LocationInfo>
      <IconButton>
        {" "}
        <LocationIcon />
      </IconButton>
    </Wrapper>
  );
};
Location.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Location;
