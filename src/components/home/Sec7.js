import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import pic6 from "../../utils/images/googleplay.59320bb7.svg";
import pic7 from "../../utils/images/Applestore.56c2e69e.svg";

export const Sec7 = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: { lg: -0.9, xs: 0 },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            md: 50,
            xs: 30,
          },
          fontWeight: 700,
          mt: { lg: 35, xs: 15 },
          mb: { lg: 5, xs: 2.5 },
        }}
      >
        Get it on App Store
      </Typography>
      <Grid container display="flex" justifyContent="center" spacing={2.5}>
        <Grid item>
          <img src={pic6} alt="" />
        </Grid>
        <Grid item>
          <img src={pic7} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
};
