import { Box, Typography } from "@mui/material";
import React from "react";

export const Sec6 = () => {
  return (
    <Box
      sx={{
        mt: 27,
        mx: 12,
        display: { lg: "flex", xs: "none" },
        flexDirection: "column",
      }}
    >
      <Typography variant="h2">
        Stay ahead with the latest <br /> Health News
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          m: 10,
        }}
      >
        <img
          src="http://medoncall.co/static/media/Rectangle18.267b380a.svg"
          alt=""
          style={{
            borderBottomLeftRadius: 50,
            borderTopLeftRadius: 50,
            height: "400px",
            backgroundPosition: "50%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Box sx={{}}>
          <img
            src="http://medoncall.co/static/media/Rectangle19.1b4c3a9b.svg"
            alt=""
            style={{
              height: "400px",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              margin: "0 -77px",
            }}
          />{" "}
          <Typography variant="h1" sx={{ position: "relative", top: -70 }}>
            Vaccine
          </Typography>
        </Box>
        <Box>
          <img
            src="http://medoncall.co/static/media/Rectangle20.c1c0ad2b.svg"
            alt=""
            style={{
              height: "400px",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              marginRight: "-77px",
            }}
          />{" "}
          <Typography variant="h1" sx={{ position: "relative", top: -130 }}>
            BREAK THROUGH
          </Typography>
        </Box>
        <Box>
          <img
            src="http://medoncall.co/static/media/Rectangle21.2919e792.svg"
            alt=""
            style={{
              height: "400px",
              backgroundPosition: "50%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderBottomRightRadius: 50,
              borderTopRightRadius: 50,
            }}
          />
          <Typography variant="h1" sx={{ position: "relative", top: -70 }}>
            RESEARCH
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
