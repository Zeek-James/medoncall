import { Box, Button, Card, Grid, Typography } from "@mui/material";
import pic3 from "../../utils/images/consultation1.7588fa20.png";
import pic4 from "../../utils/images/consultation2.720aaf54.png";
import pic5 from "../../utils/images/consultation3.43e2c551.png";
import React from "react";

export const Sec4 = () => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: {
            md: 50,
            xs: 30,
          },
          fontWeight: 700,
          ml: 10,
          mb: 10,
        }}
        variant="h2"
      >
        It only gets better...
      </Typography>
      <Grid container display="flex">
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <Card
            sx={{
              //   maxWidth: 445,
              px: "25px",
              py: "25px",
              border: "solid 1px #c9cccd",
              borderRadius: "20px",
              mb: { xs: 4, lg: 0 },
            }}
          >
            <Typography color="secondary" variant="h3" sx={{ mb: 2 }}>
              Flexible Health Plan
            </Typography>
            <Typography>
              we work within your budget offering you a variety <br />
              of packages for you,your family and employees <br />
              with the best of services included
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} lg={6} display="flex" justifyContent="center">
          <Card
            sx={{
              //   maxWidth: 495,
              px: "25px",
              py: "25px",
              border: "solid 1px #c9cccd",
              borderRadius: "20px",
            }}
          >
            <Typography color="secondary" variant="h3" sx={{ mb: 2 }}>
              Covid complaint practices
            </Typography>
            <Typography>
              Concerned about covid,be rest assured; our doctorsare <br />
              highly experienced to administer treatment,
              <br /> taking into all the required preventive measures
              <br /> when visiting our home.
            </Typography>
          </Card>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          mt: { lg: 12, xs: 0 },
        }}
      >
        <Box
          sx={{
            display: { lg: "flex", xs: "none" },
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <img src={pic3} alt="" style={{ width: 209, height: 413 }} />
          <img
            src={pic4}
            alt=""
            style={{ width: 271, height: 535, margin: "0 100px " }}
          />
          <img src={pic5} alt="" style={{ width: 209, height: 413 }} />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 7,
          }}
        >
          <Button
            color="secondary"
            variant="contained"
            sx={{
              textTransform: "capitalize",
              px: 4,
              py: 1.5,
            }}
          >
            Learn more about this
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
