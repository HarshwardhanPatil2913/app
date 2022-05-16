import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

const BottomNavigationComponent = (props) => {
  const { name, icon, path } = props;
  return (
    <div>
      <Grid sm={0.5} item className={styles.gridItems}>
        <Link href={path}>
          <ListItemButton key={name} className={styles.listitembutton1}>
            <ListItemIcon className={styles.listitemicon}>{icon}</ListItemIcon>
            <ListItemText className={styles.listitemtext} primary={name} />
          </ListItemButton>
        </Link>
      </Grid>
    </div>
  );
};
BottomNavigationComponent.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
};
export default BottomNavigationComponent;
