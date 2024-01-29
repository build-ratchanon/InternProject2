import Image from "next/image";
import styles from "@/styles/Home.module.css";
import React from "react";
import {
  Button,
  Grid,
  InputBase,
  Typography,
} from "@mui/material";

import CopyRightIcon from "@/icons/copyrightIcon.png";

function Footer() {
  return (
    <Grid className="footer">
      <Grid
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        display={"flex"}
        px={"20%"}
      >
        <Grid
          width={"50%"}
          paddingX={"10%"}
          paddingTop={"6%"}
          display={"flex"}
          flexWrap={"wrap"}
        >
          <Typography variant="h4" className={styles.titleFooter1}>
            Banana <br /> Island
          </Typography>

          <Typography className={styles.subFooter1} py={"10%"}>
            a community that gives you a taste of happiness, a place you’ll love
            to live and an opportunity to build a home.
          </Typography>
        </Grid>

        <Grid
          width={"50%"}
          paddingLeft={"10%"}
          paddingRight={"4%"}
          paddingTop={"7%"}
          paddingBottom={"3%"}
        >
          <Typography className={styles.titleFooter2}>Follow up</Typography>

          <Typography className={styles.subFooter2} pb={"5%"} pr={"10%"}>
            Keep up with our newsletter to get updates about projects and offers
          </Typography>

          <Grid display={"flex"} style={{ background: "#FFF" }}>
            <InputBase
              sx={{ ml: 3, my: 1, flex: 1 }}
              placeholder="Email"
              fullWidth
            />
            <Button style={{ color: "#0E204E" }}>subscribe</Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        sx={{ display: { xs: "flex", sm: "flex ", md: "none" } }}
        style={{ background: "#0E204E" }}
        px={"5%"}
        justifyContent={"center"}
      >
        <Grid
          px={3}
          py={3}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography variant="h5" className={styles.titlefooterM} pb={"6%"}>
            Pineapple Island
          </Typography>

          <Grid
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"}
          >
            <Image
              src={CopyRightIcon}
              alt="copy right icon"
              style={{ paddingRight: "2%" }}
            />
            <Typography fontSize={13} style={{ color: "#FFF" }}>
              Copyright2021 Glowdsgn All Rights Reserved
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
