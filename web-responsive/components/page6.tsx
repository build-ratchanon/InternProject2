import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";

import img6Desktop_L from "@/images/img6Desktop_L.png";
import img6Desktop_R from "@/images/img6Desktop_R.png";

import ArrowIcon from '@/icons/Arrow.png'

function Page6() {
  return (
    <Grid>
      {/* Page 6 Desktop */}
      <Grid
        container //hole
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        mt={"10%"}
        px={"15%"}
      >
        <Grid container display={"flex"} py={8}>
          <Grid width={"55%"} display={"flex"} alignItems={"center"}>
            <Image
              src={img6Desktop_L}
              alt="Image6 Desktop Left"
              className={styles.img6DL}
            />
            <Box sx={{ width: "27%", height: "60%", bgcolor: "#0E204E" }} />
          </Grid>

          <Grid
            width={"45%"}
            // display={'flex'}
            alignItems={"center"}
            justifyContent={"center"}
            pl={"5%"}
            // style={{background: '#1ebd33'}}
          >
            <Typography
              variant="h4"
              className={styles.title5}
              py={"2%"}
              fontSize={55}
              paddingY={4}
              sx={{ display: { lg: "none", xl: "flex" } }}
            >
              Amazing Features
            </Typography>

            <Typography
              variant="h4"
              className={styles.title5}
              py={"2%"}
              fontSize={40}
              paddingY={4}
              sx={{ display: { lg: "flex", xl: "none" } }}
            >
              Amazing Features
            </Typography>

            <Box
              bgcolor={"rgba(14, 63, 51, 0.20)"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 1,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 3,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              bgcolor={"rgba(14, 63, 51, 0.20)"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 1,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 3,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              bgcolor={"rgba(14, 63, 51, 0.20)"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 1,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 3,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              bgcolor={"rgba(14, 63, 51, 0.20)"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 1,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 3,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              bgcolor={"rgba(14, 63, 51, 0.20)"}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 1,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                paddingY: 3,
                paddingX: 3,
              }}
            >
              <Typography
                className={styles.subtitle6}
                fontSize={21}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Typography
                className={styles.subtitle6}
                fontSize={15}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Lorem ipsum dolor sit amet, consectetur
              </Typography>

              <Image
                src={ArrowIcon}
                alt="arrow"
                // className={styles.arrowIcon}
              />
            </Box>
          </Grid>
        </Grid>

        {/* /////////////////////// */}

        <Grid container display={"flex"} flexDirection={"row"} py={8}>
          <Grid
            width={"45%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            // style={{background: '#1ebd33'}}
            pr={"10%"}
          >
            <Grid>
              <Typography
                variant="h3"
                fontSize={70}
                className={styles.title2}
                pb={4}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                Become an <br /> Agent
              </Typography>

              <Typography
                variant="h3"
                className={styles.title2}
                pb={4}
                sx={{ display: { lg: "flex", xl: "none" } }}
              >
                Become an <br /> Agent
              </Typography>

              <Typography
                pb={4}
                fontSize={22}
                sx={{ display: { lg: "none", xl: "flex" } }}
              >
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>

              <Typography pb={4} sx={{ display: { lg: "flex", xl: "none" } }}>
                a community that gives you a taste of happiness, a place you’ll
                love to live and an opportunity to build a home.
              </Typography>

              <Button
                variant="contained"
                disableElevation
                sx={{
                  width: 250,
                  height: 50,
                  fontSize: 17,
                  background: "#0E204E",
                  paddingY: 1,
                  display: { lg: "none", xl: "flex" },
                }}
              >
                Join Now
              </Button>
              <Button
                variant="contained"
                disableElevation
                style={{background: '#0E204E', color: '#FFF'}}
                sx={{
                  width: 200,
                  paddingY: 1,
                  display: { lg: "flex", xl: "none" },
                }}
              >
                Join Now
              </Button>
            </Grid>
          </Grid>

          <Grid width={"55%"} display={"flex"} alignItems={"center"}>
            <Box sx={{ width: "27%", height: "60%", bgcolor: "#0E204E" }} />
            <Image
              src={img6Desktop_R}
              alt="Image6 Desktop Right"
              className={styles.img6DR}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Page 6  Mobile*/}
      <Grid
        container //hole
        sx={{ display: { xs: "flex", sm: "flex ", md: "none" } }}
        style={{ background: "#0E204E" }}
        px={"5%"}
      >
        <Grid
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          alignItems={"center"}
          px={3}
          py={5}
        >
          <Typography variant="h5" className={styles.title6M}>
            Become an Agent
          </Typography>

          <Typography
            className={styles.subtitle6M}
            px={"7%"}
            pt={"5%"}
            pb={"8%"}
          >
            A community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>

          <Button
            variant="contained"
            disableElevation
            style={{ background: "#FFF", color: "#0E204E" }}
          >
            Join Now
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page6;
