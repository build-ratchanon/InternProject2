import Image from "next/image";
import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";

import img1Desktop from "@/images/IMG1Desktop.png";
import img1Mobile from "@/images/IMG1Mobile.png";

function Page1() {
  return (
    <Container maxWidth={"xl"}>
      {/* Page1 */}
      <Grid
        container
        alignItems="center"
        sx={{ display: { xs: "none", md: "flex" } }}
      >
        <Grid
          item
          xs={3.5}
          sx={{
            zIndex: 1,
            pl: "4%",
          }}
        >
          <Grid
            sx={{
              backgroundColor: "#0E204E",
              width: "min(40.7vw, 790px)",
              pl: "19%",
              pr: "10%",
              pt: "17%",
              pb: "14%",
            }}
          >
            <Typography variant="h2" color="#FFFFFF">
              Pineapple Island: GenZ and Millenial Abode
            </Typography>

            <Typography variant="h6" color="#FFFFFF" mt="4%">
              a community that gives you a taste of happiness, a place you’ll
              love to live and an opportunity to build a home.
            </Typography>
          </Grid>
        </Grid>

        <Grid item xs={8.5}>
          <Image
            style={{ maxWidth: "70.3vw", height: "auto", position: "relative" }}
            src={img1Desktop}
            alt="Image1 Desktop"
          />
        </Grid>
      </Grid>

      {/* Page1 Mobile */}
      <Grid
        container
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Grid item display="flex" justifyContent="center" alignItems="center" position="relative" width="100%" px="1.2%">
          <Image
            style={{ objectFit: "cover", filter: "brightness(55%)", width: "min(100%, 550px)", height: "auto" }}
            src={img1Mobile}
            alt="Image1 Mobile"
          />

          <Grid
            position="absolute"
            display="flex"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            // px="7px"
            px="3%"
            // pt="178px"
            // pt="52%"
            maxWidth= "550px"
          >
            <Typography variant="h5" color="#FFFFFF">
              Pineapple Island: <br />
              GenZ and Millenial Abode
            </Typography>

            <Typography
              variant="subtitle2" color="#FFFFFF"
              mt={3}
              mb={4}
            >
              a community that gives you a taste of happiness, a place you’ll
              love to live and an opportunity to build a home.
            </Typography>

            <Button
              variant="contained"
              disableElevation
              href="#inTouchPage"
              sx={{
                textTransform: "none",
                fontFamily: "Lato",
                fontSize: "16px",
                fontWeight: 700,
                fontStyle: "normal",
                padding: 0,
                paddingY: "6px",
              }}
              style={{
                background: "#FFF",
                color: "#0E204E",
                width: "127px",
                borderRadius: 5,
              }}
            >
              Get in Touch
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page1;
