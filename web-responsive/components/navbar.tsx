import styles from "@/styles/Home.module.css";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  Link,
  MenuItem,
  Typography,
} from "@mui/material";
import Hamburger from "hamburger-react";

function NavBar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      {/* NavBar Desktop*/}
      <Container maxWidth={false} sx={{ maxWidth: "1920px"}}>
        <Grid
          className="NavBar"
          sx={{
            display: { xs: "none", md: "flex" },
            height: 168,
            px: "100px",
            pt: "25px",
          }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item display={"flex"} justifyContent={"center"}>
            <Typography className={styles.logo}>
              Pineapple <br />
              Island
            </Typography>
          </Grid>

          <Grid
            item
            display={"flex"}
            justifyContent={"center"}
            sx={{ display: { sm: "flex" } }}
          >
            <Grid item sx={{ marginX: 6, marginY: 5 }}>
              <Link
                href="#aboutPage"
                underline="none"
                color={"#000"}
                className={styles.content}
              >
                About Us
              </Link>
            </Grid>
            <Grid item sx={{ marginX: 6, marginY: 5 }}>
              <Link
                href="#whatWeDoPage"
                underline="none"
                className={styles.content}
              >
                What we do
              </Link>
            </Grid>
            <Grid item sx={{ marginX: 6, marginY: 5 }}>
              <Link
                href="#projectPage"
                underline="none"
                className={styles.content}
              >
                Project
              </Link>
            </Grid>
          </Grid>

          <Grid item display={"flex"} justifyContent={"flex-start"}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                height: "50px",
                width: "188px",
                borderRadius: 0,
                background: "#0E204E",
                color: "#FFF",
              }}
              href="#inTouchPage"
            >
              Get in touch
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* NavBar Mobile */}
      <Container maxWidth={false} sx={{ maxWidth: "600px"}}>
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            height: "128px",
            paddingX: 2.5,
          }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Grid item display={"flex"} justifyContent={"center"}>
            <Typography
              color={"#0E204E"}
              fontFamily={"Playfair Display"}
              fontSize={20}
              fontWeight={700}
              lineHeight={"normal"}
            >
              Pineapple <br />
              Island
            </Typography>
          </Grid>
          <Grid>
            <Hamburger
              toggled={isDrawerOpen}
              toggle={setIsDrawerOpen}
              size={20}
            />

            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  padding: 1,
                }}
              >
                <IconButton onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Box
                sx={{
                  paddingX: 1.25,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    href="#aboutPage"
                    underline="none"
                    className={styles.content}
                  >
                    About Us
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link
                    href="#whatWeDoPage"
                    underline="none"
                    className={styles.content}
                  >
                    What we do
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link
                    href="#projectPage"
                    underline="none"
                    className={styles.content}
                  >
                    Project
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default NavBar;
