import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import useStyles from "../utils/styles/footer";
import { Logo } from "../utils/styles/logo";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item sm={6} xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { md: "flex-start", xs: "center" },
            justifyContent: "center",
            mb: 5,
          }}
        >
          <Box>
            <Logo />
            <Typography variant="caption">
              Address: Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
              elit. <br />
              Non arcu condimentum sed id tempus <br />
              magnis amet, sagittis semper.
              <br /> Email Address:info@medoncall.com
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        display="flex"
        flexDirection="column"
        sx={{ alignItems: { xs: "center", md: "flex-start" } }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          COMPANY
        </Typography>
        <Typography variant="caption">Pricing </Typography>
        <Typography variant="caption">About us</Typography>{" "}
        <Typography variant="caption">Privacy Policy</Typography>{" "}
        <Typography variant="caption">Terms of Use</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        display="flex"
        flexDirection="column"
        sx={{ alignItems: { xs: "center", md: "flex-start" } }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          FEATURES
        </Typography>
        <Typography variant="caption">Drug Store</Typography>
        <Typography variant="caption">Drug Consultation</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={2}
        display="flex"
        flexDirection="column"
        sx={{ alignItems: { xs: "center", md: "flex-start" } }}
      >
        <Typography variant="h6" sx={{ mb: 3 }}>
          HELP
        </Typography>
        <Typography variant="caption">Frequently Asked Questions</Typography>
      </Grid>
      <Grid container sx={{ mt: 5 }}>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            positon: "relative",
            mb: 7,
          }}
        >
          <Typography variant="caption">
            (c)Copy 2021 | All Rights Reserved | Medoncall
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption">
            Made with ❤️ by{" "}
            <span style={{ color: "#fa3d3d", textDecorationLine: "underline" }}>
              Apptide Technologies
            </span>
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 7,
          }}
        >
          <FacebookIcon />
          <TwitterIcon sx={{ mx: 3 }} />
          <InstagramIcon />
        </Grid>
      </Grid>
    </Grid>
  );
};
