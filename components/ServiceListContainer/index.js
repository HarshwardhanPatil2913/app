/* eslint-disable react/jsx-filename-extension */
import { Grid, List, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import ServiceListItem from './ServiceListItem';

import PropTypes from 'prop-types';
import Services from './Services';

const ServiceContainer = (props) => {
  const { serviceList } = props;
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('md'));
  const [active, setActive] = useState(1);

  return (
    <Grid container>
      <Grid xs={12} md={6} lg={5} item>
        <List>
          {serviceList.map((serviceListItem) => (
            <ServiceListItem
              active={active}
              matches={matches}
              setActive={setActive}
              key={serviceListItem.id}
              {...serviceListItem}
            />
          ))}
        </List>
      </Grid>
      {matches && (
        <Grid item md={6} lg={7}>
          <Services services={serviceList[active - 1].services} />
        </Grid>
      )}
    </Grid>
  );
};

ServiceContainer.propTypes = {
  serviceList: PropTypes.array.isRequired,
};

export default ServiceContainer;
