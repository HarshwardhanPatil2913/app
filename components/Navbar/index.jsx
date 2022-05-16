import * as React from "react";
import { BottomNavigation, Grid } from "@mui/material";
import styles from "../../styles/Navbar.module.css";
import DrawerComponent from "./DrawerComponent";
import BottomNavigationComponent from "./BottomNavigation";
import { navLinks, navLinks1 } from "./data";

export default function Navbar() {
  return (
    <div>
      <Grid container>
        <Grid
          item
          md={1}
          lg={1}
          xs={0}
          sm={0}
          sx={{ display: { xs: "none", md: "block", lg: "block", sm: "none" } }}
        >
          <DrawerComponent navLinks={navLinks} />
        </Grid>
        <Grid
          xs={1}
          md={0}
          lg={0}
          sm={1}
          sx={{
            display: { xs: "block", md: "none", lg: "none", sm: "block" },
          }}
          item
        >
          <BottomNavigation
            sm={1}
            xs={2}
            container
            className={styles.bottomnav1}
          >
            {navLinks1.map((navLinks1) => {
              return <BottomNavigationComponent {...navLinks1} />;
            })}
          </BottomNavigation>
        </Grid>
      </Grid>
    </div>
  );
}
