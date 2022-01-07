import { Grid, Typography } from "@mui/material";
import pic from "../../utils/images/Rectangle 2.d979f6d4.svg";
import pic1 from "../../utils/images/Rectangle1.320067d1.png";
import React from "react";
import { Box } from "@mui/system";
import SpeedIcon from "@mui/icons-material/Speed";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export const Sec2 = () => {
  return (
    <Grid
      container
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ mb: 25, px: 2 }}
    >
      <Grid item md={7} sm={12}>
        <Box sx={{ display: { lg: "block", xs: "none" } }}>
          <img
            style={{
              height: 750,
              width: 614,
              objectFit: "contain",
            }}
            src={pic}
            alt=""
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { lg: "flex-end", xs: "center" },
            mr: { lg: 5, md: 0 },
            mb: 5,
          }}
        >
          <img
            style={{
              height: 720,
              width: 320,
            }}
            src={pic1}
            alt=""
          />
        </Box>
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        sx={{ textAlign: { md: "start", xs: "center" } }}
      >
        <Box sx={{ mb: 13 }}>
          <SpeedIcon
            sx={{
              color: "#fa3d3d",
              backgroundColor: "#faebeb",
              borderRadius: "10px",
              height: 25,
              width: 25,
              p: "9px",
              my: 1,
            }}
          />
          <Typography sx={{ mb: 3 }} variant="h4">
            Thousands of specialists at your disposal
          </Typography>
          <Typography variant="body">
            At Medoncall, we ensure that the best of practitioners attend
            <br /> to your request providing the highest quality of medical
            <br />
            services for a quick and seamless recovery.
          </Typography>
        </Box>
        <Box sx={{ mb: 13 }}>
          <NotificationsActiveIcon
            sx={{
              color: "#fa3d3d",
              backgroundColor: "#faebeb",
              borderRadius: "10px",
              height: 25,
              width: 25,
              p: "9px",
              my: 1,
            }}
          />
          <Typography sx={{ mb: 3 }} variant="h4">
            {" "}
            Cost - friendly prices.
          </Typography>
          <Typography variant="body">
            With our unique telemedicine solution, you do not have to break{" "}
            <br />
            the bank to get top – notch medical consultations that
            <br /> enable you and your loved ones access all-inclusive <br />{" "}
            and affordable healthcare services.
          </Typography>
        </Box>
        <Box sx={{ mb: 13 }}>
          <LocationOnIcon
            sx={{
              color: "#fa3d3d",
              backgroundColor: "#faebeb",
              borderRadius: "10px",
              height: 25,
              width: 25,
              p: "9px",
              my: 1,
            }}
          />
          <Typography sx={{ mb: 3 }} variant="h4">
            {" "}
            Scheduled Home Visits
          </Typography>
          <Typography variant="body">
            Even if you require physical attention, we will <br />
            still come to you ensuring optimum
            <br /> convenience as promised.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
