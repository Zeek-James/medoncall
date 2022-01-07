import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "#fa3d3d",
    lineHeight: 20,
    fontWeight: 700,
    marginBottom: 10,
  },
  circleCont: {
    display: "flex",
    alignItems: "center",
  },
  circle: {
    height: 10,
    width: 10,
    background: "#fa3d3d",
    borderRadius: "50%",
  },
}));
export const Logo = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h5">MedonCall</Typography>
      <div className={classes.circleCont}>
        <div className={classes.circle} />
        <Box
          sx={{
            mx: 0.5,
          }}
          className={classes.circle}
        />
        <div className={classes.circle} />
      </div>
    </div>
  );
};
