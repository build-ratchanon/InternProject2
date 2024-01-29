import styles from "@/styles/Home.module.css";
import Image from "next/image";
import React from "react";
import { Grid, Typography } from "@mui/material";

import img2Desktop from "@/images/IMG2Desktop.png";
import img2Mobile from "@/images/IMG2Mobile.png";

function Page2() {
  return (
    <Grid id='aboutPage'>
      {/* Page 2 */}
      <Grid
        container //hole
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        my={"10%"}
        px={"10%"}
      >
        <Grid width={"23%"}>
          <Typography variant="h3" className={styles.title2}>
            About <br /> Pineapple <br /> Island
          </Typography>
        </Grid>

        <Grid item display={"flex"} width={"77%"}>
          <Image
            src={img2Desktop}
            alt="Image2 Desktop"
            className={styles.img2D}
          />

          <Grid
            item
            className={styles.subtitle2}
            sx={{
              background: "#0E204E",
              color: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              px: "5%",
            }}
          >
            <Typography
              className={styles.subtitle2}
              variant="subtitle1"
              fontSize={18}
              p={4}
              sx={{ display: { lg: "none", xl: "flex" } }}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>

            <Typography
              className={styles.subtitle2}
              variant="subtitle1"
              fontSize={14}
              sx={{ display: { lg: "flex", xl: "none" } }}
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
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
        justifyContent={"center"}
        alignItems={"center"}
        // position={'relative'}
        flexDirection={"column"}
      >
        <Grid>
          <Typography className={styles.title2M} pt={"20%"} pb={"5%"}>
            About <br /> Pineapple Island
          </Typography>
        </Grid>

        <Grid
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          position={"relative"}
        >
          <Image
            src={img2Mobile}
            alt="Image2 Mobile"
            className={styles.img2M}
          />

          <Grid
            position={"absolute"}
            display={"flex"}
            textAlign={"center"}
            px={6}
          >
            <Typography className={styles.subtitle2}>
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
    </Grid>
  );
}

export default Page2;
