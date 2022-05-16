/* eslint-disable import/prefer-default-export */
import Navbar from '../Navbar/index';
import { Grid } from '@mui/material';
import Header from '../Header/index';
import styles from '../../styles/Container.module.css';
import PropTypes from 'prop-types';
export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <Header />
      <Grid Container>
        <Grid
          item
          md={1}
          lg={1}
          xs={0}
          sm={0}
          sx={{ display: { xs: 'none', md: 'block', lg: 'block', sm: 'none' } }}
          className={styles.griditem1}
        >
          {children}
        </Grid>
        <Grid
          item
          xs={1}
          md={0}
          lg={0}
          sm={1}
          sx={{ display: { xs: 'block', md: 'none', lg: 'none', sm: 'block' } }}
          className={styles.griditem2}
        >
          {children}
        </Grid>
      </Grid>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
