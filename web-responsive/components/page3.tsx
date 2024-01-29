import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React from "react";
import {
  Grid,
  Typography,
} from "@mui/material";

import img3Desktop from "@/images/IMG3Desktop.png";
import img3Mobile from "@/images/IMG3Mobile.png";

function Page3() {
  return (
    <Grid id='whatWeDoPage'>
      {/* Page 3 */}
      <Grid
        container //hole
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        mt={"10%"}
        px={"10%"}
        pt={"10%"}
        className="Page3Desktop"
      >
        <Grid width={"22%"}>
          <Typography variant="h3" className={styles.title3}>
            Why <br /> Choose <br /> Pineapple <br /> Island
          </Typography>
        </Grid>

        <Grid item display={"flex"} width={"78%"}>
          <Grid
            item
            className={styles.subtitle3}
            sx={{
              background: "#FFF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // px: '7%'
              boxShadow: 5,
            }}
          >
            <Typography
              variant="subtitle1"
              className={styles.subtitle3}
              fontSize={16}
              p={4}
              sx={{ display: { lg: "none", xl: "flex" } }}
              px={13}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>

            <Typography
              variant="subtitle1"
              className={styles.subtitle3}
              fontSize={14}
              sx={{ display: { lg: "flex", xl: "none" } }}
              px={7}
            >
              Pineapple Island is the most sought-after community in Ibadan that
              values and puts the needs of their clients first. It is a
              territory with loft complexes that creates a country life and
              homely feeling that is integrated with industrial development. A
              perfect, professional built abode that gives you the true taste of
              beauty and happiness.
            </Typography>
          </Grid>

          <Image
            src={img3Desktop}
            alt="Image3 Desktop"
            className={styles.img3D}
          />
        </Grid>
      </Grid>

      {/* Page3 Mobile */}
      <Grid
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
        justifyContent={"center"}
        alignItems={"center"}
        // position={'relative'}
        flexDirection={"column"}
      >
        <Grid>
          <Typography className={styles.title2M} pt={"20%"} pb={"5%"}>
            Why Choose <br /> Pineapple Island
          </Typography>
        </Grid>

        <Grid display={"flex"} textAlign={"center"} p={4}>
          <Typography className={styles.subtitle3}>
            Pineapple Island is the most sought-after community in Ibadan that
            values and puts the needs of their clients first. It is a territory
            with loft complexes that creates a country life and homely feeling
            that is integrated with industrial development. A perfect,
            professional built abode that gives you the true taste of beauty and
            happiness.
          </Typography>
        </Grid>

        <Image
          src={img3Mobile}
          alt="Image3 Mobile"
          className={styles.img3M}
          style={{ justifyContent: "center" }}
        />
      </Grid>
    </Grid>
  );
}

export default Page3;