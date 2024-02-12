import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Container,
  Drawer,
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
      <Container maxWidth={false} sx={{ maxWidth: "1920px" }}>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            height: 144,
            pl: "76px",
            pr: "70px",
            pt: "24px",
          }}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box display={"flex"} justifyContent={"center"}>
            <Typography
              sx={{
                color: "#0E204E",
                fontFamily: "Playfair Display",
                fontSize: 32,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Pineapple <br />
              Island
            </Typography>
          </Box>

          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ display: { sm: "flex" } }}
          >
            <Box sx={{ marginX: 6, marginY: 5 }}>
              <Link
                href="#aboutPage"
                underline="none"
                sx={{
                  color: "#232323",
                  fontFamily: "Manrope",
                  fontSize: 20,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                About Us
              </Link>
            </Box>
            <Box sx={{ marginX: 6, marginY: 5 }}>
              <Link
                href="#whatWeDoPage"
                underline="none"
                sx={{
                  color: "#232323",
                  fontFamily: "Manrope",
                  fontSize: 20,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                What we do
              </Link>
            </Box>
            <Box sx={{ marginX: 6, marginY: 5 }}>
              <Link
                href="#projectPage"
                underline="none"
                sx={{
                  color: "#232323",
                  fontFamily: "Manrope",
                  fontSize: 20,
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                }}
              >
                Project
              </Link>
            </Box>
          </Box>

          <Box display={"flex"} justifyContent={"flex-start"}>
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
          </Box>
        </Box>
      </Container>

      {/* NavBar Mobile */}
      <Container>
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
          <Box display={"flex"} justifyContent={"center"}>
            <Typography
              sx={{
                color: "#0E204E",
                fontFamily: "Playfair Display",
                fontSize: 20,
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              Pineapple <br />
              Island
            </Typography>
          </Box>
          <Box>
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
                    sx={{
                      color: "#232323",
                      fontFamily: "Manrope",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    About Us
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link
                    href="#whatWeDoPage"
                    underline="none"
                    sx={{
                      color: "#232323",
                      fontFamily: "Manrope",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    What we do
                  </Link>
                </MenuItem>

                <MenuItem onClick={handleClose}>
                  <Link
                    href="#projectPage"
                    underline="none"
                    sx={{
                      color: "#232323",
                      fontFamily: "Manrope",
                      fontSize: 20,
                      fontStyle: "normal",
                      fontWeight: 400,
                      lineHeight: "normal",
                    }}
                  >
                    Project
                  </Link>
                </MenuItem>
              </Box>
            </Drawer>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default NavBar;
