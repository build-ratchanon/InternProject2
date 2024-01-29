import styles from "@/styles/Home.module.css";
import React from "react";
import { useState, MouseEvent } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";

import Page1 from "@/components/page1";
import Page2 from "@/components/page2";
import Page3 from "@/components/page3";

function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid>
      {/* NavBar Desktop*/}
      <Grid
        className="NavBar"
        sx={{ height: "100px", px: 6 }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Grid item display={"flex"} justifyContent={"center"}>
          <Typography variant="h5" className={styles.logo}>
            Pineapple <br />
            Island
          </Typography>
        </Grid>

        <Grid
          item
          sx={{ display: { xs: "none", sm: "flex" } }}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid item sx={{ margin: 5 }}>
            <Link href="#aboutPage" underline="none" className={styles.content}>
              {'About Us'}
            </Link>
          </Grid>
          <Grid item sx={{ margin: 5 }}>
            <Link href="#whatWeDoPage" underline="none" className={styles.content}>
              {'What we do'}
            </Link>
          </Grid>
          <Grid item sx={{ margin: 5 }}>
            <Link href="#projectPage" underline="none" className={styles.content}>
              {'Project'}
            </Link>
          </Grid>
        </Grid>

        <Grid
          item
          display={"flex"}
          justifyContent={"flex-start"}
          height={"60px"}
        >
          <Button
            variant="contained"
            disableElevation
            style={{ background: "#0E204E", color: "#FFF" }}
            sx={{ display: { xs: "none", sm: "flex" }}}
            href="#inTouchPage"
          >
            Get in touch
          </Button>
        </Grid>

        {/* NavBar Mobile */}
        <Grid sx={{ display: { xs: "flex", sm: "none" } }}>
          <IconButton 
            size="large" 
            edge="start" 
            color="inherit" 
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu 
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            sx={{ display: { xs: "flex", sm: "none" } }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="#aboutPage" underline="none" className={styles.content}>
                {'About Us'}
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link href="#whatWeDoPage" underline="none" className={styles.content}>
                {'What we do'}
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link href="#projectPage" underline="none" className={styles.content}>
                {'Project'} 
              </Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;
