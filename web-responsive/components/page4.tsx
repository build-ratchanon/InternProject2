import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
//
import img4Desktop_L from "@/images/IMG4LeftDesktop.png";
import img4Desktop_R from "@/images/IMG4RightDesktop.png";
import img4Mobile from "@/images/IMG4Mobile.png";
//
import treeIcon from '@/icons/tree-icon.png'
import networkIcon from '@/icons/network-icon.png'
import payIcon from '@/icons/payments-icon.png'
import serviceIcon from '@/icons/services-icon.png'
import privateIcon from '@/icons/lock-icon.png'
import lightIcon from '@/icons/light-icon.png'
//
import treeIconMobile from '@/icons/tree-iconM.png'
import networkIconMobile from '@/icons/network-iconM.png'
import payIconMobile from '@/icons/payment-iconM.png'
import serviceIconMobile from '@/icons/service-iconM.png'
import privateIconMobile from '@/icons/lock-iconM.png'
import lightIconMobile from '@/icons/light-iconM.png'

function Page4() {
  return (
    <Grid id='projectPage'>
      {/* Page 4 Desktop */}
      <Grid
        container //hole
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        mt={"10%"}
        px={"10%"}
      >
        <Typography
          variant="h3"
          className={styles.title4}
          py={"5%"}
          fontSize={60}
          sx={{ display: { lg: "none", xl: "flex" } }}
        >
          What Pineapple Land Offers
        </Typography>

        <Typography
          variant="h3"
          className={styles.title4}
          py={"5%"}
          sx={{ display: { lg: "flex", xl: "none" } }}
        >
          What Pineapple Land Offers
        </Typography>

        <Grid container display={"flex"} flexDirection={"row"}>
          <Grid width={"50%"} display={"flex"} alignItems={"center"}>
            <Image
              src={img4Desktop_L}
              alt="Image4 Desktop Left"
              className={styles.img4DL}
            />
            <Box sx={{ width: "27%", height: "60%", bgcolor: "#0E204E" }} />
          </Grid>

          <Grid
            width={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Grid className={styles.icon}>
              <Image
                src={treeIcon}
                alt="tree icon"
                style={{ paddingBottom: "25%" }}
              />
              <Typography>Eco Friendly</Typography>
            </Grid>

            <Grid className={styles.icon}>
              <Image
                src={networkIcon}
                alt="network icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography>Smart Homes</Typography>
            </Grid>

            <Grid className={styles.icon}>
              <Image
                src={payIcon}
                alt="payment icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography>Good Rates</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid container display={"flex"} flexDirection={"row"}>
          <Grid
            width={"50%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Grid className={styles.icon}>
              <Image
                src={serviceIcon}
                alt="service icon"
                style={{ paddingBottom: "25%" }}
              />
              <Typography>Serviced Apartment</Typography>
            </Grid>

            <Grid className={styles.icon}>
              <Image
                src={privateIcon}
                alt="private icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography>Private Security</Typography>
            </Grid>

            <Grid className={styles.icon}>
              <Image
                src={lightIcon}
                alt="24/7 icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography>24/7 Electricity</Typography>
            </Grid>
          </Grid>

          <Grid
            width={"50%"}
            // style={{background: '#1ebd33'}}
            display={"flex"}
            alignItems={"center"}
          >
            <Box sx={{ width: "27%", height: "60%", bgcolor: "#0E204E" }} />
            <Image
              src={img4Desktop_R}
              alt="Image4 Desktop Right"
              className={styles.img4DR}
            />
          </Grid>
        </Grid>
      </Grid>

      {/* Page4 Mobile */}
      <Grid
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
        flexWrap={"wrap"}
        // flexDirection={'column'}
        justifyContent={"center"}
        // alignItems={'center'}
        // position={'relative'}
      >
        <Grid>
          <Typography className={styles.title2M} pt={"25%"} pb={"10%"}>
            Pineapple Island Offers
          </Typography>
        </Grid>

        <Image
          src={img4Mobile}
          alt="Image3 Mobile"
          className={styles.img3M}
          style={{ justifyContent: "center", position: "relative" }}
        />

        <Grid
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          sx={{ width: 300, height: "auto", bgcolor: "#0E204E" }}
          p={4}
          top={-60}
          position={"relative"}
          boxShadow={4}
        >
          <Grid display={"flex"} width={"100%"}>
            <Grid className={styles.iconM}>
              <Image
                src={treeIconMobile}
                alt="tree icon"
                style={{ paddingBottom: "25%" }}
              />
              <Typography className={styles.subtitle4M} sx={{ color: "#FFF" }}>
                Eco Friendly
              </Typography>
            </Grid>

            <Grid className={styles.iconM}>
              <Image
                src={networkIconMobile}
                alt="network icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography className={styles.subtitle4M} sx={{ color: "#FFF" }}>
                Smart Homes
              </Typography>
            </Grid>

            <Grid className={styles.iconM}>
              <Image
                src={payIconMobile}
                alt="payment icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography className={styles.subtitle4M} sx={{ color: "#FFF" }}>
                Good Rates
              </Typography>
            </Grid>
          </Grid>

          <Grid display={"flex"}>
            <Grid className={styles.iconM}>
              <Image
                src={serviceIconMobile}
                alt="service icon"
                style={{ paddingBottom: "25%" }}
              />
              <Typography className={styles.subtitle4M} sx={{ color: "#FFF" }}>
                Serviced Apartment
              </Typography>
            </Grid>

            <Grid className={styles.iconM}>
              <Image
                src={privateIconMobile}
                alt="private icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography className={styles.subtitle4M} sx={{ color: "#FFF" }}>
                Private Security
              </Typography>
            </Grid>

            <Grid className={styles.iconM}>
              <Image
                src={lightIconMobile}
                alt="24/7 icon"
                style={{ paddingBottom: "25%" }}
              />

              <Typography className={styles.subtitle4M} sx={{ color: "#FFF" }}>
                24/7 Electricity
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page4;
