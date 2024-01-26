import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Button, FormControl, FormHelperText, Grid, IconButton, ImageList, ImageListItem, InputBase, OutlinedInput, Paper, Tab, Tabs, TextField, Toolbar, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import { positions } from '@mui/system';
import { Copyright, Padding } from '@mui/icons-material'

import img1Desktop from '@/images/IMG1Desktop.png'
import img1Mobile from '@/images/IMG1Mobile.png'
import img2Desktop from '@/images/IMG2Desktop.png'
import img2Mobile from '@/images/IMG2Mobile.png'
import img3Desktop from '@/images/IMG3Desktop.png'
import img3Mobile from '@/images/IMG3Mobile.png'
import img4Desktop_L from '@/images/IMG4LeftDesktop.png'
import img4Desktop_R from '@/images/IMG4RightDesktop.png'
import img4Mobile from '@/images/IMG4Mobile.png'
import img6Desktop_L from '@/images/img6Desktop_L.png'
import img6Desktop_R from '@/images/img6Desktop_R.png'
//
import BGPage3 from '@/images/background-Page3.png'
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
//
import IMGB1 from '@/images/ImageDesktop1.png'
import IMGB2 from '@/images/ImageDesktop2.png'
import IMGB3 from '@/images/ImageDesktop3.png'
import IMGB4 from '@/images/ImageDesktop4.png'
import IMGB5 from '@/images/ImageDesktop5.png'
import IMGB6 from '@/images/ImageDesktop6.png'
import IMGB7 from '@/images/ImageDesktop7.png'
import IMGB8 from '@/images/ImageDesktop8.png'
import IMGB9 from '@/images/ImageDesktop9.png'
//
import IMGB1M from '@/images/ImageMobile1.png'
import IMGB2M from '@/images/ImageMobile2.png'
import IMGB3M from '@/images/ImageMobile3.png'
import IMGB4M from '@/images/ImageMobile4.png'
import IMGB5M from '@/images/ImageMobile5.png'
import IMGB6M from '@/images/ImageMobile6.png'
import IMGB7M from '@/images/ImageMobile7.png'
import IMGB8M from '@/images/ImageMobile8.png'
import IMGB9M from '@/images/ImageMobile9.png'
import IMGB10M from '@/images/ImageMobile10.png'
import IMGB11M from '@/images/ImageMobile11.png'
import IMGB12M from '@/images/ImageMobile12.png'
import IMGB13M from '@/images/ImageMobile13.png'
//
import ArrowIcon from '@/icons/Arrow.png'
//
import CopyRightIcon from '@/icons/copyrightIcon.png'


export default function Home() {
  return (
    <>
      <Box>
        {/* NavBar */}

        <Grid className='NavBar'
          sx={{height: "100px", px: 6}}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Grid item
            display={'flex'}
            justifyContent={'center'}
          >
            <Typography variant='h5' className={styles.logo}> Pineapple <br />Island </Typography>
          </Grid>

          <Grid item
            sx={{display: {xs: 'none', sm: 'flex'}}}
            display={'flex'}
            justifyContent={'center'}
          >
            <Grid item
              sx={{margin: 5}}
            >
              <Typography className={styles.content}> About Us </Typography>  
            </Grid>
            <Grid item
              sx={{margin: 5}}
            >
              <Typography className={styles.content}> What we do </Typography>
            </Grid>
            <Grid item
              sx={{margin: 5}}
            >
              <Typography className={styles.content}> Project </Typography>
            </Grid>
          </Grid>

          <Grid item 
            display={'flex'}
            justifyContent={'flex-start'}
            height={'60px'}
          >
            <Button 
              variant='contained'
              disableElevation
              sx={{background: '#0E204E', display: {xs: 'none', sm: 'flex'}}} 
              className={styles.navButton}
            > 
              Get in Touch 
            </Button>

          </Grid>
            
          <Grid sx={{display: {xs: 'flex', sm: 'none'}}}>
            <IconButton size='large' edge= 'start' color='inherit'>
              <MenuIcon/>
            </IconButton>
          </Grid>

        </Grid>
      </Box>

      <Grid className='Body content'>

        {/* Page1 */}

        <Grid container             //hole
          // display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          right={0}
          sx={{display: {xs: 'none', sm: 'flex', md: 'flex'}}}
        >
          <Grid item    //box
            className={styles.box1}
            sx={{
              // width: '35%',
              // height: '55%',
              backgroundColor: '#0E204E', 
              position: 'absolute', 
              left: '5%', 
              zIndex: (1),
              px: '4%', py: '4%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden'
            }}
          >
            <Grid>
              <Typography variant='h3'className={styles.title1}>
                Pineapple Island: <br />
                GenZ and Millenial <br />
                Abode
              </Typography>

              <Typography variant='subtitle1' className={styles.subtitle1} fontSize={20} sx={{display: {lg: 'none', xl: 'flex'}}}>
              a community that gives you a taste of happiness, a place you’ll love to <br />
              live and an opportunity to build a home.
              </Typography>

              <Typography variant='subtitle1' className={styles.subtitle1} sx={{display: {lg: 'flex', xl: 'none'}}}>
              a community that gives you a taste of happiness, a place you’ll love to <br />
              live and an opportunity to build a home.
              </Typography>
            </Grid>
          </Grid>

          <Grid item      //pic
            sx={{
              width: '75%', 
              position: 'relative',
              right: '-12.9%',
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
        <Grid container
          sx={{display: {xs: 'flex', sm: 'none', md: 'none'}}}
          justifyContent={'center'}
          alignItems={'center'}
          position={'relative'}
        >
          <Grid>
            <Image
              className={styles.img1M}
              src={img1Mobile}
              alt="Image1 Mobile"
            />
          </Grid>

          <Grid position={'absolute'} 
            px={5} 
            display={'flex'} 
            justifyContent={'center'} 
            alignItems={'center'}
            flexDirection={'column'}
          >
            <Typography className={styles.title1} fontSize={24} textAlign={'center'}>
                Pineapple Island: <br />
                GenZ and Millenial Abode
            </Typography>

            <Typography className={styles.subtitle1} textAlign={'center'} mb={4}>
              a community that gives you a taste of happiness, a place you’ll love to <br />
              live and an opportunity to build a home.
            </Typography>

            <Button 
                variant='contained'
                disableElevation
                sx={{background: '#FFF', color: '#0E204E', fontSize: '13px', fontWeight: '400', fontStyle: 'normal'}} 
              > 
                Get in Touch 
            </Button>
          </Grid>
        </Grid>

        {/* Page 2 */}
        <Grid container             //hole
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{display: {xs: 'none', sm: 'none ', md: 'flex'}}}
          my={'10%'}
          px={'10%'}
        >
          <Grid width={'23%'}>
            <Typography variant='h3' className={styles.title2}>
              About <br /> Pineapple <br /> Island
            </Typography>
          </Grid>

          <Grid item display={'flex'} width={'77%'}>
            <Image
              src={img2Desktop}
              alt="Image2 Desktop" 
              className={styles.img2D}
            />

            <Grid item 
              className={styles.subtitle2}
              sx={{
                background: '#0E204E', color: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',              
                px: '5%'
              }}
            >
              <Typography className={styles.subtitle2} variant='subtitle1' fontSize={18} p={4} sx={{display: {lg: 'none', xl: 'flex'}}}>
                Pineapple Island is the most sought-after community in Ibadan that values 
                and puts the needs of their clients first. It is a territory with loft complexes that 
                creates a country life and homely feeling that is integrated with industrial development. 
                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>

              <Typography className={styles.subtitle2} variant='subtitle1' fontSize={14} sx={{display: {lg: 'flex', xl: 'none'}}}>
                Pineapple Island is the most sought-after community in Ibadan that values 
                and puts the needs of their clients first. It is a territory with loft complexes that 
                creates a country life and homely feeling that is integrated with industrial development. 
                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Page2 Mobile */}
        <Grid 
          sx={{display: {xs: 'flex', sm: 'flex', md: 'none'}}}
          justifyContent={'center'}
          alignItems={'center'}
          // position={'relative'}
          flexDirection={'column'}
        >
          <Grid>
            <Typography className={styles.title2M} pt={'20%'} pb={'5%'}>
            About <br /> Pineapple Island
            </Typography>
          </Grid>
          
          <Grid 
            display={'flex'} 
            justifyContent={'center'}
            alignItems={'center'}
            position={'relative'}
          >
            <Image
              src={img2Mobile}
              alt='Image2 Mobile'
              className={styles.img2M}
            />

            <Grid
              position={'absolute'}
              display={'flex'}
              textAlign={'center'}
              px={6} 

            >
              <Typography className={styles.subtitle2}>
                Pineapple Island is the most sought-after community in Ibadan that values 
                and puts the needs of their clients first. It is a territory with loft complexes that 
                creates a country life and homely feeling that is integrated with industrial development. 
                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>
            </Grid>
          </Grid>

        </Grid>

        {/* Page 3 */}
        <Grid container             //hole
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{display: {xs: 'none', sm: 'none ', md: 'flex'}}}
          mt={'10%'}
          px={'10%'} pt={"10%"}
          className='Page3Desktop'
        >
          <Grid width={'22%'}>
            <Typography variant='h3' className={styles.title3}>
              Why <br /> Choose <br /> Pineapple <br /> Island              
            </Typography>
          </Grid>

          <Grid item display={'flex'} width={'78%'}>
          
            <Grid item 
              className={styles.subtitle3}
              sx={{
                background: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',              
                // px: '7%'
                boxShadow: 5
              }}
            >
              <Typography variant='subtitle1' className={styles.subtitle3} fontSize={16} p={4} sx={{display: {lg: 'none', xl: 'flex'}}} px={13}>
                Pineapple Island is the most sought-after community in Ibadan that values 
                and puts the needs of their clients first. It is a territory with loft complexes that 
                creates a country life and homely feeling that is integrated with industrial development. 
                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>

              <Typography variant='subtitle1' className={styles.subtitle3} fontSize={14} sx={{display: {lg: 'flex', xl: 'none'}}} px={7}>
                Pineapple Island is the most sought-after community in Ibadan that values 
                and puts the needs of their clients first. It is a territory with loft complexes that 
                creates a country life and homely feeling that is integrated with industrial development. 
                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
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
          sx={{display: {xs: 'flex', sm: 'flex', md: 'none'}}}
          justifyContent={'center'}
          alignItems={'center'}
          // position={'relative'}
          flexDirection={'column'}
        >
          <Grid>
            <Typography className={styles.title2M} pt={'20%'} pb={'5%'}>
            Why Choose <br /> Pineapple Island              
            </Typography>
          </Grid>
          
          <Grid
              display={'flex'}
              textAlign={'center'}
              p={4} 
            >
              <Typography className={styles.subtitle3}>
                Pineapple Island is the most sought-after community in Ibadan that values 
                and puts the needs of their clients first. It is a territory with loft complexes that 
                creates a country life and homely feeling that is integrated with industrial development. 
                A perfect, professional built  abode that gives you the true taste of beauty and happiness.
              </Typography>
            </Grid>

          <Image
              src={img3Mobile}
              alt='Image3 Mobile'
              className={styles.img3M}
              style={{justifyContent: 'center'}}
            />

        </Grid>

        {/* Page 4 Desktop */}
        <Grid container             //hole
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{display: {xs: 'none', sm: 'none ', md: 'flex'}}}
          mt={'10%'}
          px={'10%'} 
        >
          <Typography variant='h3' className={styles.title4} py={'5%'} fontSize={60} sx={{display: {lg: 'none', xl: 'flex'}}}>
            What Pineapple Land Offers
          </Typography>

          <Typography variant='h3' className={styles.title4} py={'5%'}  sx={{display: {lg: 'flex', xl: 'none'}}}>
            What Pineapple Land Offers
          </Typography>

          <Grid
            container
            display={'flex'}
            flexDirection={'row'}
          >
            <Grid 
              width={'50%'} 
              display={'flex'}
              alignItems={'center'}
            >
              <Image
                src={img4Desktop_L}
                alt='Image4 Desktop Left'
                className={styles.img4DL}
              />
              <Box
                sx={{width: '27%', height: '60%', bgcolor: '#0E204E'}}
              />
            </Grid>

            <Grid 
              width={'50%'} 
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Grid className={styles.icon}>
                <Image
                  src={treeIcon}
                  alt='tree icon'
                  style={{paddingBottom: '25%'}}
                />
                <Typography>
                Eco Friendly
                </Typography>
              </Grid>
                
              <Grid className={styles.icon}>
                <Image
                  src={networkIcon}
                  alt='network icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography>
                  Smart Homes
                </Typography>
              </Grid>
                
              <Grid className={styles.icon}>
                <Image
                  src={payIcon}
                  alt='payment icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography>
                  Good Rates
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          
          <Grid
            container
            display={'flex'}
            flexDirection={'row'}
          >
            <Grid 
              width={'50%'} 
              display={'flex'}
              alignItems={'center'}
              justifyContent={'flex-end'}
            >
              <Grid className={styles.icon}>
                <Image
                  src={serviceIcon}
                  alt='service icon'
                  style={{paddingBottom: '25%'}}
                />
                <Typography>
                  Serviced Apartment
                </Typography>
              </Grid>
                
              <Grid className={styles.icon}>
                <Image
                  src={privateIcon}
                  alt='private icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography>
                  Private Security
                </Typography>
              </Grid>
                
              <Grid className={styles.icon}>
                <Image
                  src={lightIcon}
                  alt='24/7 icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography>
                  24/7 Electricity
                </Typography>
              </Grid>
            </Grid>

            <Grid 
              width={'50%'} 
              // style={{background: '#1ebd33'}} 
              display={'flex'}
              alignItems={'center'}
            >
              <Box
                sx={{width: '27%', height: '60%', bgcolor: '#0E204E'}}
              />
              <Image
                src={img4Desktop_R}
                alt='Image4 Desktop Right'
                className={styles.img4DR}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Page4 Mobile */}
        <Grid 
          sx={{display: {xs: 'flex', sm: 'flex', md: 'none'}}}
          flexWrap={'wrap'}
          // flexDirection={'column'}
          justifyContent={'center'}
          // alignItems={'center'}
          // position={'relative'}
        >
          <Grid>
            <Typography className={styles.title2M} pt={'25%'} pb={'10%'}>
              Pineapple Island Offers
            </Typography>
          </Grid> 

          <Image
            src={img4Mobile}
            alt='Image3 Mobile'
            className={styles.img3M}
            style={{justifyContent: 'center', position: 'relative'}}
          />

          <Grid
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            sx={{width: 300, height: 'auto', bgcolor: '#0E204E'}}
            p={4}
            top={-60}
            position={'relative'}
            boxShadow={4}
          >
            <Grid display={'flex'} width={'100%'}>
              <Grid className={styles.iconM}>
                <Image
                  src={treeIconMobile}
                  alt='tree icon'
                  style={{paddingBottom: '25%'}}
                />
                <Typography className={styles.subtitle4M}  sx={{color: '#FFF'}}>
                  Eco Friendly
                </Typography>
              </Grid>
                
              <Grid className={styles.iconM}>
                <Image
                  src={networkIconMobile}
                  alt='network icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography className={styles.subtitle4M}  sx={{color: '#FFF'}}>
                  Smart Homes
                </Typography>
              </Grid>
                
              <Grid className={styles.iconM}>
                <Image
                  src={payIconMobile}
                  alt='payment icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography className={styles.subtitle4M}  sx={{color: '#FFF'}}>
                  Good Rates
                </Typography>
              </Grid>
            </Grid>

             <Grid display={'flex'}>
              <Grid className={styles.iconM}>
                <Image
                  src={serviceIconMobile}
                  alt='service icon'
                  style={{paddingBottom: '25%'}}
                />
                <Typography className={styles.subtitle4M}  sx={{color: '#FFF'}}>
                  Serviced Apartment
                </Typography>
              </Grid>
                  
              <Grid className={styles.iconM}>
                <Image
                  src={privateIconMobile}
                  alt='private icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography className={styles.subtitle4M} sx={{color: '#FFF'}}>
                  Private Security
                </Typography>
              </Grid>
                
              <Grid className={styles.iconM}>
                <Image
                  src={lightIconMobile}
                  alt='24/7 icon'
                  style={{paddingBottom: '25%'}}
                />

                <Typography className={styles.subtitle4M} sx={{color: '#FFF'}}>
                  24/7 Electricity
                </Typography>
              </Grid>
            </Grid>

          </Grid>

        </Grid>


        {/* Page 5 Gallery */}
        <Grid container             //hole
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{display: {xs: 'none', sm: 'none ', md: 'flex'}}}
          mt={'10%'}
          px={'5%'} 
        >
          <Typography variant='h3' className={styles.title5} py={'2%'} fontSize={60} sx={{display: {lg: 'none', xl: 'flex'}}}>
            Galleries
          </Typography>

          <Typography variant='h3' className={styles.title5} py={'2%'}  sx={{display: {lg: 'flex', xl: 'none'}}}>
            Galleries
          </Typography>

          <Typography variant='subtitle1' className={styles.subtitle5} fontSize={20} sx={{display: {lg: 'none', xl: 'flex'}}}>
            a community that gives you a taste of happiness, a place you’ll love to live and an <br />
            opportunity to build a home.
          </Typography>

          <Typography variant='subtitle1' className={styles.subtitle5} sx={{display: {lg: 'flex', xl: 'none'}}}>
            a community that gives you a taste of happiness, a place you’ll love to live and an <br />
            opportunity to build a home.
          </Typography>
          
          <Box
          sx={{display: 'flex', justifyContent: 'center'}}
          >
            <ImageList cols={3} gap={25}>
              <Image src={IMGB1} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB2} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB3} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB4} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB5} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB6} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB7} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB8} alt='Box Image 1' className={styles.imgBox_D}/>
              <Image src={IMGB9} alt='Box Image 1' className={styles.imgBox_D}/>
            </ImageList>
          </Box>

        </Grid>

        {/* Page 5 Gallery Mobile*/}
        <Grid container             //hole
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{display: {xs: 'flex', sm: 'flex ', md: 'none'}}}
          px={'5%'} 
          pb={'10%'}
        >
          <Grid>
            <Typography className={styles.title2M}pb={'10%'}>
              Available Homes
            </Typography>
          </Grid>
          
          <Grid
              display={'flex'}
              textAlign={'center'}
              px={4}
              py={2}
            >
              <Typography className={styles.subtitle5}>
                a community that gives you a taste of happiness, 
                a place you’ll love to live and an opportunity to build a home.
              </Typography>
            </Grid>

          <Box>
            <ImageList cols={2} gap={15}>
              <Image src={IMGB1M} alt='Box Image 1' className={styles.imgBox_M}/>
              <Image src={IMGB2M} alt='Box Image 2' className={styles.imgBox_M}/>
              <Image src={IMGB3M} alt='Box Image 3' className={styles.imgBox_M}/>
              <Image src={IMGB4M} alt='Box Image 4' className={styles.imgBox_M}/>
            </ImageList>
            
            <ImageList cols={2} variant='masonry' gap={15}>
              <ImageListItem>
                <Image src={IMGB5M} alt='Box Image 5' className={styles.imgBox_M}/>
                <Image src={IMGB6M} alt='Box Image 6' className={styles.imgBox_M}/>              
              </ImageListItem>

              <ImageListItem>
                <Image src={IMGB7M} alt='Box Image 7' className={styles.imgBox_M}/>
              </ImageListItem>
            </ImageList>

            <ImageList cols={2} variant='masonry' gap={15}>
              <ImageListItem>
                <Image src={IMGB8M} alt='Box Image 10' className={styles.imgBox_M}/>   
              </ImageListItem>

              <ImageListItem>
                <Image src={IMGB9M} alt='Box Image 8' className={styles.imgBox_M}/>
                <Image src={IMGB10M} alt='Box Image 9' className={styles.imgBox_M}/>
              </ImageListItem>
            </ImageList>
            
            <ImageList cols={2} gap={15}>
              <Image src={IMGB11M} alt='Box Image 11' className={styles.imgBox_M}/>
              <Image src={IMGB12M} alt='Box Image 12' className={styles.imgBox_M}/>
            </ImageList>

            <ImageList cols={1}>
              <Image src={IMGB13M} alt='Box Image 13' className={styles.imgBox_M}/>
            </ImageList>

          </Box>
        </Grid>

        {/* Page 6 Desktop */}
        <Grid container             //hole
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{display: {xs: 'none', sm: 'none ', md: 'flex'}}}
          mt={'10%'}
          px={'15%'} 
        >
          <Grid
            container
            display={'flex'}
            py={8}
          >
            <Grid 
              width={'55%'} 
              display={'flex'}
              alignItems={'center'}
            >
              <Image
                src={img6Desktop_L}
                alt='Image6 Desktop Left'
                className={styles.img6DL}
              />
              <Box
                sx={{width: '27%', height: '60%', bgcolor: '#0E204E'}}
              />
            </Grid>

            <Grid 
              width={'45%'} 
              // display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              pl={'5%'}
              // style={{background: '#1ebd33'}} 
            >
              <Typography variant='h4' className={styles.title5} py={'2%'} fontSize={55} paddingY={4} sx={{display: {lg: 'none', xl: 'flex'}}}>
                Amazing Features
              </Typography>

              <Typography variant='h4' className={styles.title5} py={'2%'} fontSize={40} paddingY={4} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Amazing Features
              </Typography>

              <Box bgcolor={'rgba(14, 63, 51, 0.20)'} sx={{display: 'flex', justifyContent: 'space-between', paddingY: 1, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>

              <Box sx={{display: 'flex', justifyContent: 'space-between', paddingY: 3, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>

              <Box bgcolor={'rgba(14, 63, 51, 0.20)'} sx={{display: 'flex', justifyContent: 'space-between', paddingY: 1, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>

              <Box sx={{display: 'flex', justifyContent: 'space-between', paddingY: 3, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>
              
              <Box bgcolor={'rgba(14, 63, 51, 0.20)'} sx={{display: 'flex', justifyContent: 'space-between', paddingY: 1, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>

              <Box sx={{display: 'flex', justifyContent: 'space-between', paddingY: 3, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>
              
              <Box bgcolor={'rgba(14, 63, 51, 0.20)'} sx={{display: 'flex', justifyContent: 'space-between', paddingY: 1, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>

              <Box sx={{display: 'flex', justifyContent: 'space-between', paddingY: 3, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>
              
              <Box bgcolor={'rgba(14, 63, 51, 0.20)'} sx={{display: 'flex', justifyContent: 'space-between', paddingY: 1, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>

              <Box sx={{display: 'flex', justifyContent: 'space-between', paddingY: 3, paddingX: 3}}>
                <Typography className={styles.subtitle6} fontSize={21} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>
                
                <Typography className={styles.subtitle6} fontSize={15} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Lorem ipsum dolor sit amet, consectetur
                </Typography>

                <Image
                  src={ArrowIcon}
                  alt='arrow'
                  // className={styles.arrowIcon}
                />
              </Box>
            </Grid>
          </Grid>
          
          {/* /////////////////////// */}

          <Grid
            container
            display={'flex'}
            flexDirection={'row'}
            py={8}
          >
            <Grid 
              width={'45%'} 
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
              // style={{background: '#1ebd33'}} 
              pr={'10%'}
            >
              <Grid>
                <Typography variant='h3' fontSize={70} className={styles.title2} pb={4} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  Become an <br /> Agent
                </Typography>

                <Typography variant='h3' className={styles.title2} pb={4} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  Become an <br /> Agent
                </Typography>


                <Typography pb={4} fontSize={22} sx={{display: {lg: 'none', xl: 'flex'}}}>
                  a community that gives you a taste of happiness, a place you’ll love to 
                  live and an opportunity to build a home.
                </Typography>

                <Typography pb={4} sx={{display: {lg: 'flex', xl: 'none'}}}>
                  a community that gives you a taste of happiness, a place you’ll love to 
                  live and an opportunity to build a home.
                </Typography>

                <Button 
                  variant='contained'
                  disableElevation
                  sx={{width: 250, height: 50, fontSize: 17, background: '#0E204E', paddingY: 1, display: {lg: 'none', xl: 'flex'}}}
                > 
                  Join Now
                </Button>
                <Button 
                  variant='contained'
                  disableElevation
                  sx={{width: 200, background: '#0E204E', paddingY: 1, display: {lg: 'flex', xl: 'none'}}}
                > 
                  Join Now
                </Button>
              </Grid>
            </Grid>

            <Grid 
              width={'55%'} 
              display={'flex'}
              alignItems={'center'}
            >
              <Box
                sx={{width: '27%', height: '60%', bgcolor: '#0E204E'}}
              />
              <Image
                src={img6Desktop_R}
                alt='Image6 Desktop Right'
                className={styles.img6DR}
              />
            </Grid>
          </Grid>
        </Grid>

        {/* Page 6  Mobile*/}
        <Grid container             //hole
          sx={{display: {xs: 'flex', sm: 'flex ', md: 'none'}}}
          style={{background: '#0E204E'}}
          px={'5%'}
        >
          <Grid
            display={'flex'}
            flexWrap={'wrap'}
            justifyContent={'center'}
            alignItems={'center'}
            px={3}
            py={5}
          >
            <Typography variant='h5' className={styles.title6M}>
              Become an Agent
            </Typography>

            <Typography className={styles.subtitle6M} px={'7%'} pt={'5%'} pb={'8%'}>
            A community that gives you a taste of happiness, a place you’ll love to live and 
            an opportunity to build a home.
            </Typography>

            <Button
             variant='contained'
             disableElevation
             style={{background: '#FFF', color: '#0E204E'}}
            >
              Join Now
            </Button>
          </Grid>
        </Grid>

        {/* Page 7 Desktop */}
        <Grid container             //hole
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{display: {xs: 'none', sm: 'none ', md: 'flex'}}}
          mt={'10%'}
          px={'20%'} 
          pb={'15%'}
        >
          <Grid>
            <Typography variant='h4' className={styles.title5} fontSize={70} sx={{display: {lg: 'none', xl: 'flex'}}}>
              Stay In Touch
            </Typography>

            <Typography variant='h4' className={styles.title5} fontSize={55} sx={{display: {lg: 'flex', xl: 'none'}}}>
              Stay In Touch
            </Typography>
          </Grid>

          <Grid>
            <Typography className={styles.subtitle7} fontSize={25} py={'2%'} paddingY={4} sx={{display: {lg: 'none', xl: 'flex'}}}>
              Are you curious about Pineapple Island? Send a message
            </Typography>

            <Typography className={styles.subtitle7} fontSize={20} py={'2%'} paddingY={4} sx={{display: {lg: 'flex', xl: 'none'}}}>
              Are you curious about Pineapple Island? Send a message
            </Typography>
          </Grid>

          <Box width={'100%'}>
            <Grid py={'2%'}>
              <TextField
                id="outlined-multiline-flexible"
                label="Name"
                multiline
                fullWidth
              />
            </Grid>

            <Grid py={'2%'}>
              <TextField
                id="outlined-multiline-flexible"
                label="Phone Name"
                multiline
                fullWidth
              />
            </Grid>

            <Grid py={'2%'}>
              <TextField
                id="outlined-multiline-flexible"
                label="Email"
                multiline
                fullWidth
              />
            </Grid>

            <Grid py={'2%'}>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={10}
                fullWidth
              />
            </Grid>

            <Grid
            display={'flex'}
            justifyContent={'center'}
            >
              <Button 
                variant='contained'
                disableElevation
                sx={{width: 170, height: 50, fontSize: 17, background: '#0E204E', paddingY: 1, display: {lg: 'none', xl: 'flex'}}}
              > 
                Send
              </Button>
              <Button 
                variant='contained'
                disableElevation
                sx={{width: 150, background: '#0E204E', paddingY: 1, display: {lg: 'flex', xl: 'none'}}}
              > 
                Send
              </Button>
            </Grid>

          </Box>
        </Grid>
            
        {/* Page 7 Mobile*/}
        <Grid container             //hole
          sx={{display: {xs: 'flex', sm: 'flex ', md: 'none'}}}
          px={'5%'}
          py={'15%'}
        >
          <Grid
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Typography variant='h5' className={styles.title7M}>
              Stay In Touch
            </Typography>

            <Typography className={styles.subtitle7M} px={'7%'} pt={'5%'} pb={'2%'}>
              If you are interested in finding out more about The Discovery Village, leave a message
            </Typography>

            <Grid paddingX={'8%'}>
              <TextField sx={{py: '2%'}} label="Name" variant="standard" fullWidth/>
              <TextField sx={{py: '2%'}}label="Phone No" variant="standard" fullWidth/>
              <TextField sx={{py: '2%'}} label="Email" variant="standard" fullWidth/>
              
              <Typography sx={{pt: '7%', pb: '2%'}} style={{color: 'rgba(0, 0, 0, 0.60)', fontStyle: 'normal', fontWeight: 300, lineHeight: 'normal'}}>
                Message
              </Typography>
              <OutlinedInput multiline rows={4} fullWidth sx={{mb: '8%'}}/>
              
              <Grid display={'flex'} justifyContent={'center'}>
                <Button
                  variant='contained'
                  disableElevation
                  sx={{background: '#0E204E', paddingX: '9%', paddingY: '2%',}}
                > 
                  Send
                </Button>
              </Grid>
              
            </Grid>

          </Grid>
        </Grid>

      </Grid>
          
      <Grid className='footer'>
        <Grid
          sx={{display: {xs: 'none', sm: 'none ', md: 'flex'}}}
          display={'flex'}
          px={'20%'}
        >
          <Grid width={'50%'} paddingX={'10%'} paddingTop={'6%'} display={'flex'} flexWrap={'wrap'} >
            <Typography variant='h4' className={styles.titleFooter1}>
              Banana <br /> Island
            </Typography>

            <Typography className={styles.subFooter1} py={'10%'}>
              a community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.
            </Typography>
          </Grid>

          <Grid width={'50%'} paddingLeft={'10%'} paddingRight={'4%'} paddingTop={'7%'} paddingBottom={'3%'}>
            <Typography className={styles.titleFooter2}>
              Follow up
            </Typography>

            <Typography className={styles.subFooter2} pb={'5%'} pr={'10%'}>
              Keep up with our newsletter to get
              updates about projects and offers
            </Typography>

            <Grid display={'flex'} style={{background: '#FFF'}}>
              <InputBase
                sx={{ ml: 3,my: 1, flex: 1 }}
                placeholder="Email"
                fullWidth
              />
              <Button style={{color: '#0E204E'}}>
                subscribe
              </Button>
            </Grid>
          </Grid>

        </Grid>

        <Grid
          sx={{display: {xs: 'flex', sm: 'flex ', md: 'none'}}}
          style={{background: '#0E204E'}}
          px={'5%'}
          justifyContent={'center'}
        >
          <Grid
            px={3}
            py={3}
            width={'100%'}
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
          >
            <Typography variant='h5' className={styles.titlefooterM} pb={'6%'}>
              Pineapple Island
            </Typography>
            
            <Grid display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'}>
              <Image
                src={CopyRightIcon}
                alt='copy right icon'
                style={{paddingRight: '2%'}}
              />
              <Typography fontSize={13} style={{color: '#FFF'}}>
                Copyright2021 Glowdsgn All Rights Reserved
              </Typography>
            </Grid>

          </Grid>
        </Grid>
        
      </Grid>
      
      

    </>
  )
}
