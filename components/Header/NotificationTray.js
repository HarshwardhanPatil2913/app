import Alerts from "./Alerts";
import Weather from "./Weather";
import { Grid } from "@mui/material";

const weather = {
  temperature: 92,
  description: "Cloudy",
};
const NotificationTray = () => {
  return (
    <Grid
      container
      sx={{ margin: "10px", alignItems: "center", justifyContent: "center" }}
    >
      <Grid item sx={{ borderRight: "2px solid #EFEFEF" }} xs={6}>
        <Weather {...weather} />
      </Grid>
      <Grid item xs={6}>
        <Alerts />
      </Grid>
    </Grid>
  );
};

export default NotificationTray;
