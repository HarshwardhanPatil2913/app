import Divider from '@mui/material/Divider';
import { Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styles from '../../styles/Navbar.module.css';

const DrawerComponent = (props) => {
  return (
    <div>
      <Drawer variant="permanent" className={styles.drawer}>
        <ListItemButton className={styles.listitemmenubutton}>
          <MenuIcon />
        </ListItemButton>

        <Divider />

        {props.navLinks.map((props) => (
          <Link href={props.path}>
            <ListItemButton key={props.name} className={styles.listitembutton}>
              <ListItemIcon className={styles.listitemicon}>
                {props.icon}
              </ListItemIcon>

              <div className={styles.listitemtext}>{props.name}</div>
            </ListItemButton>
          </Link>
        ))}
      </Drawer>
    </div>
  );
};
// DrawerComponent.propTypes = {
//   name: PropTypes.string.isRequired,
//   icon: PropTypes.elementType.isRequired,
//   link: PropTypes.string.isRequired,
// };
export default DrawerComponent;
