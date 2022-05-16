import styled from '@emotion/styled';
import { Collapse, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import Arrowright from '../../assets/icons/ArrowRight';
import Doc from '../../assets/icons/Doc';
import Eye from '../../assets/icons/Eye';
import Service from './Service';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const StyledListItem = styled(ListItem)`
  color: ${(props) => (props.activeColor ? '#FFFFFF' : '#000000')};
  border: 1px solid ${(props) => (props.activeColor ? '#FFFFFF' : '#000000')};
  margin: 10px auto 0 auto;
  border-radius: 4px;
  width: 90%;
  background-color: ${(props) => (props.activeColor ? '#1E90FF' : '#FFFFFF')};
  justify-content: space-between;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ServiceListItem = (props) => {
  const [open, setOpen] = useState(false);
  const { id, serviceItem, services, matches, active, setActive } = props;
  const { listTitle, time } = serviceItem;

  const handleClick = (id) => {
    if (!matches) setOpen(!open);
    else setActive(id);
  };
  return (
    <>
      <StyledListItem
        activeColor={matches ? active === id : true}
        onClick={() => handleClick(id)}
        key={id}
      >
        <Container>
          <Wrapper>
            <ListItemIcon sx={{ minWidth: '30px' }}>
              <Doc activeColor={matches ? active === id : true} />
            </ListItemIcon>
            <ListItemText>{listTitle}</ListItemText>
          </Wrapper>
          <Wrapper>
            <ListItemIcon sx={{ minWidth: '30px' }}>
              <Eye activeColor={matches ? active === id : true} />
            </ListItemIcon>
            <ListItemText>{time}</ListItemText>
          </Wrapper>
        </Container>
        <ListItemIcon sx={{ minWidth: '30px' }}>
          <Arrowright
            activeColor={matches ? active === id : true}
            open={matches ? !matches : open}
          />
        </ListItemIcon>
      </StyledListItem>
      {!matches && (
        <Collapse key={id} timeout="auto" unmountOnExit in={open}>
          <Service services={services} />
        </Collapse>
      )}
    </>
  );
};
ServiceListItem.propTypes = {
  id: PropTypes.number.isRequired,
  serviceItem: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
  matches: PropTypes.bool.isRequired,
  active: PropTypes.number.isRequired,
  setActive: PropTypes.func.isRequired,
};

export default ServiceListItem;
