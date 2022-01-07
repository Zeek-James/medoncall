import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import MedicationLiquidIcon from "@mui/icons-material/MedicationLiquid";

export const Sec5 = () => {
  return (
    <Box sx={{ mt: { lg: 34, xs: 15 }, mx: 8 }}>
      <Box
        sx={{
          textAlign: {
            md: "end",
            xs: "center",
          },
          lineHeight: "92px",
          mb: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: {
              md: 50,
              xs: 30,
            },

            fontWeight: 700,
          }}
        >
          Pharmary?You have it on
          <br /> the same app?
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            px: 3,
            py: 1,
            mr: { md: 5, xs: 0 },
            textTransform: "capitalize",
          }}
        >
          Read More
        </Button>
      </Box>
      <Grid container spacing={15} sx={{ px: 7 }}>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              textAlign: "center",
              borderRadius: "20px",
              padding: "30px",
              width: "250px",
            }}
          >
            <MedicationLiquidIcon
              sx={{
                backgroundColor: "#faebeb",
                color: "#fa3d3d",
                p: 1,
                mb: 1,
                borderRadius: 2,
                height: 70,
                width: 60,
              }}
            />
            <Typography sx={{ mb: 2 }} variant="h3" color="secondary">
              Buy over the counter
            </Typography>
            <Typography>
              Buy regular medicine you'd get from the pharmacist without
              necessary prescriptions
            </Typography>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Card
            sx={{
              textAlign: "center",
              borderRadius: "20px",
              padding: "30px",
              width: "265px",
            }}
          >
            <MedicalServicesIcon
              sx={{
                backgroundColor: "#faebeb",
                color: "#fa3d3d",
                p: 1,
                mb: 1,
                borderRadius: 2,
                height: 70,
                width: 60,
              }}
            />
            <Typography sx={{ mb: 2 }} variant="h3" color="secondary">
              Buy Prescription Drugs
            </Typography>
            <Typography>
              Get medicine prescribed by your personal doctor or pharmacist on
              Medoncall or anywhere else
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
