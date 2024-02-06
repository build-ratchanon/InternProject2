import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React from "react";
import {
  Box,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";

import IMGB1 from "@/images/ImageDesktop1.png";
import IMGB2 from "@/images/ImageDesktop2.png";
import IMGB3 from "@/images/ImageDesktop3.png";
import IMGB4 from "@/images/ImageDesktop4.png";
import IMGB5 from "@/images/ImageDesktop5.png";
import IMGB6 from "@/images/ImageDesktop6.png";
import IMGB7 from "@/images/ImageDesktop7.png";
import IMGB8 from "@/images/ImageDesktop8.png";
import IMGB9 from "@/images/ImageDesktop9.png";
//
import IMGB1M from "@/images/ImageMobile1.png";
import IMGB2M from "@/images/ImageMobile2.png";
import IMGB3M from "@/images/ImageMobile3.png";
import IMGB4M from "@/images/ImageMobile4.png";
import IMGB5M from "@/images/ImageMobile5.png";
import IMGB6M from "@/images/ImageMobile6.png";
import IMGB7M from "@/images/ImageMobile7.png";
import IMGB8M from "@/images/ImageMobile8.png";
import IMGB9M from "@/images/ImageMobile9.png";
import IMGB10M from "@/images/ImageMobile10.png";
import IMGB11M from "@/images/ImageMobile11.png";
import IMGB12M from "@/images/ImageMobile12.png";
import IMGB13M from "@/images/ImageMobile13.png";

function Page5() {
  return (
    <Grid>
      {/* Page 5 Gallery */}
      <Grid
        container //hole
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        mt={"10%"}
        px={"5%"}
      >
        <Typography
          variant="h3"
          className={styles.title5}
          py={"2%"}
          fontSize={60} 
          sx={{ display: { lg: "none", xl: "flex" } }}
        >
          Galleries
        </Typography>

        <Typography
          variant="h3"
          className={styles.title5}
          py={"2%"}
          sx={{ display: { lg: "flex", xl: "none" } }}
        >
          Galleries
        </Typography>

        <Typography
          variant="subtitle1"
          className={styles.subtitle5}
          fontSize={20}
          sx={{ display: { lg: "none", xl: "flex" } }}
        >
          a community that gives you a taste of happiness, a place you’ll love
          to live and an <br />
          opportunity to build a home.
        </Typography>

        <Typography
          variant="subtitle1"
          className={styles.subtitle5}
          sx={{ display: { lg: "flex", xl: "none" } }}
        >
          a community that gives you a taste of happiness, a place you’ll love
          to live and an <br />
          opportunity to build a home.
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <ImageList cols={3} gap={25}>
            <Image src={IMGB1} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB2} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB3} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB4} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB5} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB6} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB7} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB8} alt="Box Image 1" className={styles.imgBox_D} />
            <Image src={IMGB9} alt="Box Image 1" className={styles.imgBox_D} />
          </ImageList>
        </Box>
      </Grid>

      {/* Page 5 Gallery Mobile*/}
      <Grid
        container //hole
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ display: { xs: "flex", sm: "flex ", md: "none" } }}
        px={"5%"}
        pb={"10%"}
      >
        <Grid>
          <Typography className={styles.title2M} pb={"10%"}>
            Available Homes
          </Typography>
        </Grid>

        <Grid display={"flex"} textAlign={"center"} px={4} py={2}>
          <Typography className={styles.subtitle5}>
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Grid>

        <Grid>
          <ImageList cols={2} gap={15}>
            <Image src={IMGB1M} alt="Box Image 1" className={styles.imgBox_M} />
            <Image src={IMGB2M} alt="Box Image 2" className={styles.imgBox_M} />
            <Image src={IMGB3M} alt="Box Image 3" className={styles.imgBox_M} />
            <Image src={IMGB4M} alt="Box Image 4" className={styles.imgBox_M} />
          </ImageList>

          <ImageList cols={2}  variant="masonry" gap={15}>
            <ImageListItem>
              <Image
                src={IMGB5M}
                alt="Box Image 5"
                className={styles.imgBox_M}
              />
              <Image
                src={IMGB6M}
                alt="Box Image 6"
                className={styles.imgBox_M}
              />
            </ImageListItem>

            <ImageListItem>
              <Image
                src={IMGB7M}
                alt="Box Image 7"
                className={styles.imgBox_M}
              />
            </ImageListItem>
          </ImageList>

          <ImageList cols={2} variant="masonry" gap={15}>
            <ImageListItem>
              <Image
                src={IMGB8M}
                alt="Box Image 10"
                className={styles.imgBox_M}
              />
            </ImageListItem>

            <ImageListItem>
              <Image
                src={IMGB9M}
                alt="Box Image 8"
                className={styles.imgBox_M}
              />
              <Image
                src={IMGB10M}
                alt="Box Image 9"
                className={styles.imgBox_M}
              />
            </ImageListItem>
          </ImageList>

          <ImageList cols={2} gap={15}>
            <Image
              src={IMGB11M}
              alt="Box Image 11"
              className={styles.imgBox_M}
            />
            <Image
              src={IMGB12M}
              alt="Box Image 12"
              className={styles.imgBox_M}
            />
          </ImageList>

          <ImageList cols={1}>
            <Image
              src={IMGB13M}
              alt="Box Image 13"
              className={styles.imgBox_M}
            />
          </ImageList>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page5;
