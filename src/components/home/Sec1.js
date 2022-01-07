import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import Typical from "react-typical";
export const Sec1 = () => {
  const array = [
    "Consult Healthcare professionals",
    1000,
    "All in one App",
    1000,
    "Purchase Prescribed Drugs",
    1000,
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: 300,
        mt: 15,
        mb: 10,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          sx={{
            fontSize: {
              md: 50,
              xs: 30,
            },
            textAlign: "center",
          }}
        >
          <Typical loop={Infinity} wrapper="b" steps={array} />
        </Typography>
      </Box>
      <Typography
        sx={{
          maxWidth: 550,
          textAlign: "center",
          lineHeight: "24px",
          fontSize: "16px",
        }}
        variant="body"
      >
        Get connected with highly experienced medical health care practitioners
        at your own time. No waits, no commuting delays. Professionals
        anywhere,anytime{""}
        <div style={{ fontWeight: "bold" }}> How easy can that be!</div>
      </Typography>
      <Grid container>
        <Grid
          item
          display="flex"
          sx={{
            justifyContent: { xs: "center", sm: "flex-end" },
          }}
          xs={12}
          sm={6}
        >
          <Button
            sx={{
              mb: { xs: 4, sm: 0 },
              mr: { sm: 4, xs: 0 },
              textTransform: "capitalize",
              py: 1,
              px: 4,
            }}
            color="secondary"
            variant="contained"
          >
            Download Now
          </Button>
        </Grid>
        <Grid
          item
          display="flex"
          sx={{
            justifyContent: { xs: "center", sm: "flex-start" },
          }}
          xs={12}
          sm={6}
        >
          <Button
            sx={{
              ml: { sm: 4, xs: 0 },
              textTransform: "capitalize",
              py: 1,
              px: 4,
            }}
            color="secondary"
            variant="contained"
          >
            {" "}
            Explore features
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
