import styles from "@/styles/Home.module.css";
import React from "react";

import {
  Box,
  Button,
  Grid,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

function Page7() {
  return (
    <Grid id='inTouchPage'>
      {/* Page 7 Desktop */}
      <Grid
        container //hole
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ display: { xs: "none", sm: "none ", md: "flex" } }}
        mt={"10%"}
        px={"20%"}
        pb={"15%"}
      >
        <Grid>
          <Typography
            variant="h4"
            className={styles.title5}
            fontSize={70}
            sx={{ display: { lg: "none", xl: "flex" } }}
          >
            Stay In Touch
          </Typography>

          <Typography
            variant="h4"
            className={styles.title5}
            fontSize={55}
            sx={{ display: { lg: "flex", xl: "none" } }}
          >
            Stay In Touch
          </Typography>
        </Grid>

        <Grid>
          <Typography
            className={styles.subtitle7}
            fontSize={25}
            py={"2%"}
            paddingY={4}
            sx={{ display: { lg: "none", xl: "flex" } }}
          >
            Are you curious about Pineapple Island? Send a message
          </Typography>

          <Typography
            className={styles.subtitle7}
            fontSize={20}
            py={"2%"}
            paddingY={4}
            sx={{ display: { lg: "flex", xl: "none" } }}
          >
            Are you curious about Pineapple Island? Send a message
          </Typography>
        </Grid>

        <Box width={"100%"}>
          <Grid py={"2%"}>
            <TextField
              id="outlined-multiline-flexible"
              label="Name"
              multiline
              fullWidth
            />
          </Grid>

          <Grid py={"2%"}>
            <TextField
              id="outlined-multiline-flexible"
              label="Phone Name"
              multiline
              fullWidth
            />
          </Grid>

          <Grid py={"2%"}>
            <TextField
              id="outlined-multiline-flexible"
              label="Email"
              multiline
              fullWidth
            />
          </Grid>

          <Grid py={"2%"}>
            <TextField
              id="outlined-multiline-static"
              label="Message"
              multiline
              rows={10}
              fullWidth
            />
          </Grid>

          <Grid display={"flex"} justifyContent={"center"}>
            <Button
              variant="contained"
              disableElevation
              sx={{
                width: 170,
                height: 50,
                fontSize: 17,
                background: "#0E204E",
                paddingY: 1,
                display: { lg: "none", xl: "flex" },
              }}
            >
              Send
            </Button>
            <Button
              variant="contained"
              disableElevation
              style={{background: '#0E204E', color: '#FFF'}}
              sx={{
                width: 150,
                paddingY: 1,
                display: { lg: "flex", xl: "none" },
              }}
            >
              Send
            </Button>
          </Grid>
        </Box>
      </Grid>

      {/* Page 7 Mobile*/}
      <Grid
        container //hole
        sx={{ display: { xs: "flex", sm: "flex ", md: "none" } }}
        px={"5%"}
        py={"15%"}
      >
        <Grid justifyContent={"center"} alignItems={"center"}>
          <Typography variant="h5" className={styles.title7M}>
            Stay In Touch
          </Typography>

          <Typography
            className={styles.subtitle7M}
            px={"7%"}
            pt={"5%"}
            pb={"2%"}
          >
            If you are interested in finding out more about The Discovery
            Village, leave a message
          </Typography>

          <Grid paddingX={"8%"}>
            <TextField
              sx={{ py: "2%" }}
              label="Name"
              variant="standard"
              fullWidth
            />
            <TextField
              sx={{ py: "2%" }}
              label="Phone No"
              variant="standard"
              fullWidth
            />
            <TextField
              sx={{ py: "2%" }}
              label="Email"
              variant="standard"
              fullWidth
            />

            <Typography
              sx={{ pt: "7%", pb: "2%" }}
              style={{
                color: "rgba(0, 0, 0, 0.60)",
                fontStyle: "normal",
                fontWeight: 300,
                lineHeight: "normal",
              }}
            >
              Message
            </Typography>
            <OutlinedInput multiline rows={4} fullWidth sx={{ mb: "8%" }} />

            <Grid display={"flex"} justifyContent={"center"}>
              <Button
                variant="contained"
                disableElevation
                style={{background: '#0E204E', color: '#FFF'}}
                sx={{ paddingX: "9%", paddingY: "2%" }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Page7;
