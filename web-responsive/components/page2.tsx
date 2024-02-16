import styles from "@/styles/Home.module.css";
import Image from "next/image";
import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

import img2Desktop from "@/images/IMG2Desktop.png";
import img2Mobile from "@/images/IMG2Mobile.png";

function Page2() {
  return (
    <Container id="aboutPage" maxWidth={false} sx={{ maxWidth: "1920px" }}>
      {/* Page 2 */}
      <Grid
        container //hole
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        my="13.4%"
        px="8.8%"
      >
        <Grid item xs={3}>
          <Typography
            variant="h3"
            color={"#0E204E"}
            fontFamily="Playfair Display"
            fontWeight={700}
            fontSize={"clamp(1.5rem, -0.4853rem + 3.5294vw, 3.75rem);"}
            lineHeight="134%"
          >
            About <br /> Pineapple <br /> Island
          </Typography>
        </Grid>

        <Grid container xs={9} sx={{ display: "flex" }}>
          <Grid item xs={7.5}>
            <Carousel>
                <Carousel.Item>
                  <Image
                    src={img2Desktop}
                    alt="Image2 Desktop"
                    style={{width: "100%", height: "auto"}}
                    />
                </Carousel.Item>

                <Carousel.Item>
                  <Image
                    src={img2Desktop}
                    alt="Image2 Desktop"
                    style={{width: "100%", height: "auto"}}
                  />
                </Carousel.Item>
                
                <Carousel.Item>
                  <Image
                    src={img2Desktop}
                    alt="Image2 Desktop"
                    style={{width: "100%", height: "auto"}}
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <Image
                    src={img2Desktop}
                    alt="Image2 Desktop"
                    style={{width: "100%", height: "auto"}}
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <Image
                    src={img2Desktop}
                    alt="Image2 Desktop"
                    style={{width: "100%", height: "auto"}}
                  />
                </Carousel.Item>
              </Carousel>
          </Grid>

          <Grid 
            item 
            xs
            sx={{
              background: "#0E204E",
              color: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: "5.1%",
              py: "5.35%",
            }}
          >
            <Typography
              variant="subtitle1"
              fontFamily="Manrope"
              fontWeight={400}
              fontSize={"clamp(0.625rem, 0.0735rem + 0.9804vw, 1.25rem)"}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/* Page2 Mobile */}
      <Grid
        container
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
        justifyContent="center"
        alignItems="center"
        // position='relative'
        flexDirection="column"
      >
        <Grid textAlign="center">
          <Typography
            variant="h4"
            fontFamily="Playfair Display"
            fontWeight={700}
            fontSize="clamp(1.5rem, -0.1071rem + 6.8571vw, 2.25rem)"
            pt="30%"
            pb="13%"
          >
            About <br /> Pineapple Island
          </Typography>
        </Grid>

        <Grid
          item
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Image
            src={img2Mobile}
            alt="Image2 Mobile"
            style={{
              objectFit: "cover",
              filter: "brightness(55%)",
              width: "min(89vw, 550px)",
              height: "auto",
            }}
          />

          <Grid
            position="absolute"
            display="flex"
            textAlign="center"
            px={7}
            py={5}
          >
            <Typography
              variant="subtitle1"
              fontFamily="Lato"
              fontWeight={400}
              color="#FFFFFF"
              fontSize="clamp(0.8125rem, -0.4918rem + 6.5217vw, 1.75rem)"
              fontStyle="normal"
              lineHeight="160%"
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Page2;
