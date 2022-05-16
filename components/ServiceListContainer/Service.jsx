import { ListItem, Paper, Typography } from '@mui/material';

const Service = (props) => {
  const { serviceText, name, points, time } = props;
  return (
    <Paper sx={{ width: '100%' }} elevation={1}>
      <Typography>{serviceText}</Typography>
      <Typography>Name:{name}</Typography>
      <Typography>Points:{points}</Typography>
      <Typography>Time:{time}</Typography>
    </Paper>
  );
};

export default Service;
