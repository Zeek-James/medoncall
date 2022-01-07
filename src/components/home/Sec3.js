import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import pic2 from "../../utils/images/Rectangle2.6c76acc2.png";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: "#e9ebeb",
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: "#fa3d3d",
    },
  },
  subTitle: {
    "&:hover": {
      backgroundColor: "#fff",
      color: "#fa3d3d",
    },
  },
});

export const Sec3 = () => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  const handleRadiant = (e) => {
    e.preventDefault();
    setProgress(100);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();
    setProgress(0);
  };

  return (
    <Box sx={{ mb: 25, mx: 2 }}>
      <Typography
        sx={{
          fontSize: {
            md: 50,
            xs: 30,
          },
          fontWeight: 700,
          textAlign: { xs: "center", lg: "start" },
          ml: { lg: 17, xs: 0 },
          mb: 12,
        }}
      >
        Do more with MedOnCall
      </Typography>
      <Grid container spacing={10} sx={{ px: { lg: 15, md: 5, sx: 2 } }}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ alignItems: { lg: "flex-end", xs: "center" } }}
          display="flex"
          flexDirection="column"
          // sx={{ mx: 2 }}
        >
          <Box sx={{ maxWidth: 450, mb: 8 }}>
            <Box onMouseEnter={handleRadiant} onMouseLeave={handleMouseLeave}>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="h3"
                  sx={{ flexGrow: 1, mb: 3 }}
                  className={classes.subTitle}
                >
                  Pick a service
                </Typography>
                <ArrowRightAltIcon />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}>
                <LinearProgress
                  variant="determinate"
                  sx={{ height: 3 }}
                  value={progress}
                  // color="secondary"
                  className={classes.root}
                />
              </Box>
              <Typography>
                Choose a service to get professsional in specialized fields,
                whether General checkup, Emergency,Body and Nutrition,there is a
                consultant for it
              </Typography>
            </Box>
          </Box>
          <Box sx={{ maxWidth: 450, mb: 8 }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="h3"
                  sx={{ flexGrow: 1, mb: 3 }}
                  className={classes.subTitle}
                >
                  Connect Virtually
                </Typography>
                <ArrowRightAltIcon />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}></Box>
              <Typography>
                Whatever means of communication you prefer-vedio calling, audio
                calling or texting is adequate. keep it in mind that all
                information divulged will be treated confidentially.
              </Typography>
            </Box>
          </Box>
          <Box sx={{ maxWidth: 450 }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="h3"
                  sx={{ flexGrow: 1, mb: 3 }}
                  className={classes.subTitle}
                >
                  Need medications
                </Typography>
                <ArrowRightAltIcon />
              </Box>
              <Box sx={{ width: "100%", mb: 2 }}></Box>
              <Typography>
                We provide an online pharmacy where you order precribed
                medication. for quality assurance purpose we source our products
                directly from the manufacturer.
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          sx={{ justifyContent: { lg: "flex-end", xs: "center" } }}
        >
          <img
            src={pic2}
            alt=""
            style={{
              height: 720,
              width: 350,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
