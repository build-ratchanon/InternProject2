import Image from "next/image";
import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";

import img1Desktop from "@/images/IMG1Desktop.png";
import img1Mobile from "@/images/IMG1Mobile.png";

function Page1() {
  return (
    <Container maxWidth={false} sx={{ maxWidth: "1920px" }}>
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
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Playfair Display",
                fontSize: "clamp(1rem, 3.333vw, 64px)",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Pineapple Island: GenZ and Millenial Abode
            </Typography>

            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Manrope",
                fontSize: "clamp(0.7rem, 1.042vw, 24px)",
                fontStyle: "normal",
                fontWeight: 400,
                overflow: "auto",
                marginTop: "20px",
              }}
            >
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
        justifyContent="center"
        alignItems="center"
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Grid display="flex" justifyContent="center" position="relative">
          <Image
            style={{ objectFit: "cover", filter: "brightness(55%)" }}
            src={img1Mobile}
            alt="Image1 Mobile"
          />

          <Grid
            position="absolute"
            display="flex"
            alignItems="center"
            flexDirection="column"
            textAlign="center"
            px="7px"
            pt="178px"
          >
            <Typography
              sx={{
                color: "#FFFFFF",
                fontFamily: "Playfair Display",
                fontSize: "1.625rem",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Pineapple Island: <br />
              GenZ and Millenial Abode
            </Typography>

            <Typography
              mb={4}
              sx={{
                alignItems: "center",
                color: "#FFFFFF",
                fontFamily: "Manrope",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "21px",
                overflow: "auto",
                marginTop: "20px",
              }}
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
