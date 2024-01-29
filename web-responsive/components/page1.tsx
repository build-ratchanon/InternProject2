import styles from "@/styles/Home.module.css";
import Image from "next/image";
import React from "react";
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";

import img1Desktop from "@/images/IMG1Desktop.png";
import img1Mobile from "@/images/IMG1Mobile.png";

function Page1() {
  return (
    <Grid>
      {/* Page1 */}

      <Grid
        container //hole
        // display={'flex'}
        alignItems={"center"}
        justifyContent={"center"}
        right={0}
        sx={{ display: { xs: "none", sm: "flex", md: "flex" } }}
      >
        <Grid
          item //box
          className={styles.box1}
          sx={{
            // width: '35%',
            // height: '55%',
            backgroundColor: "#0E204E",
            position: "absolute",
            left: "5%",
            zIndex: 1,
            px: "4%",
            py: "4%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          <Grid>
            <Typography variant="h3" className={styles.title1}>
              Pineapple Island: <br />
              GenZ and Millenial <br />
              Abode
            </Typography>

            <Typography
              variant="subtitle1"
              className={styles.subtitle1}
              fontSize={20}
              sx={{ display: { lg: "none", xl: "flex" } }}
            >
              a community that gives you a taste of happiness, a place you’ll
              love to <br />
              live and an opportunity to build a home.
            </Typography>

            <Typography
              variant="subtitle1"
              className={styles.subtitle1}
              sx={{ display: { lg: "flex", xl: "none" } }}
            >
              a community that gives you a taste of happiness, a place you’ll
              love to <br />
              live and an opportunity to build a home.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          item //pic
          sx={{
            width: "75%",
            position: "relative",
            right: "-12.9%",
          }}
        >
          <Image
            className={styles.img1D}
            src={img1Desktop}
            alt="Image1 Desktop"
            // width={1075}
            // height={717}
          />
        </Grid>
      </Grid>

      {/* Page1 Mobile */}
      <Grid
        container
        sx={{ display: { xs: "flex", sm: "none", md: "none" } }}
        justifyContent={"center"}
        alignItems={"center"}
        position={"relative"}
      >
        <Grid>
          <Image
            className={styles.img1M}
            src={img1Mobile}
            alt="Image1 Mobile"
          />
        </Grid>

        <Grid
          position={"absolute"}
          px={5}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography
            className={styles.title1}
            fontSize={24}
            textAlign={"center"}
          >
            Pineapple Island: <br />
            GenZ and Millenial Abode
          </Typography>

          <Typography className={styles.subtitle1} textAlign={"center"} mb={4}>
            a community that gives you a taste of happiness, a place you’ll love
            to <br />
            live and an opportunity to build a home.
          </Typography>

          <Button
            variant="contained"
            disableElevation
            href="#inTouchPage"
            sx={{
              fontSize: "13px",
              fontWeight: "400",
              fontStyle: "normal",
            }}
            style={{ background: "#FFF", color: "#0E204E" }}
          >
            Get in Touch
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page1;
