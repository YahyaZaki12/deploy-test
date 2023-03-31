import { Stack, Button, Typography, Box } from '@mui/material'
import React from 'react'
import { Grid, useTheme } from '@mui/material';
import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import Link from 'next/link';
import { Element, } from 'react-scroll'
// import "../styles/HeroSection.scss"

const HeroSection = () => {
    const theme = useTheme()
    return (
        <Grid container
            columnSpacing={0}
            justifyContent={"space-between"}
            sx={{ backgroundColor: "#F8F8F8", borderRadius: "32px", position: "relative", overflow: "hidden" }}
        >
            <Box sx={{
                position: "absolute",
                backgroundColor: theme.palette.primary.main,
                top: "95px",
                left: "-340px",
                width: "376px",
                borderRadius: "50%",
                height: "376px",
            }}>

            </Box>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} sx={{ padding: { xs: 5, sm: 8, md: 16 }, paddingBottom: "0", paddingRight: "0" }}>
                <Stack spacing={2} alignItems={{ xs: "center", sm: "flex-start" }}>
                    <Box>
                        <Typography sx={{ font: "normal normal bold 40px/50px Montserrat", wordBreak: "break-word" }}>
                            We promise you being
                            <span style={{ color: theme.palette.primary.main, marginLeft: "5px",wordBreak: "break-word" }}>
                                safe
                            </span>
                            <span style={{ margin: "0px 5px", wordBreak: "break-word" }}>
                                and
                            </span>
                            <span style={{ color: theme.palette.primary.main, wordBreak: "keep-all" }}>
                                on-time!
                            </span>
                        </Typography>
                        <Typography color={"secondary.dark"} sx={{ font: "normal normal medium 16px/20px Montserrat" }}>
                            Rerum quos quaerat quis.
                            Mollitia consequatur nobis. Dolor perferendis qui minima at labore. Quis aut quia earum non enim aut nam.
                        </Typography>
                    </Box>
                    <Button fullWidth variant={"contained"}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "266px",
                            marginTop: "8px"
                        }}>
                        Contact Us
                        <ArrowRight color={"white"} size={32} />
                    </Button>
                    <Typography sx={{ font: "normal normal medium 18px/20px Montserrat", textAlign: { xs: "center", sm: "left" } }}>Download the app:</Typography>
                    <Stack direction={{ xs: "column", sm: "row", md: "row" }} alignItems={{ xs: "center", sm: "flex-start" }} spacing={3} sx={{ width: "100%" }}>
                        <Link href={"/#"}>
                            <Image src={"/images/App Store@2x.png"} width={137} height={40} alt={"App Store Download"} />
                        </Link>
                        <Link href={"/#"}>
                            <Image src={"/images/Google Play@2x.png"} width={137} height={40} alt={"App Store Download"} />
                        </Link>
                        <Link href={"/#"}>
                            <Image src={"/images/Explore It On Huawei AppGallery@2x.png"} width={137} height={40} alt={"App Store Download"} />
                        </Link>
                    </Stack>
                </Stack>
            </Grid>
            <Grid item className={'image-container'} md={12} lg={6} xl={6} >
                <Image src={"/images/Hero_Image.png"} fill alt={"Hero Image"} className='image' />
            </Grid>
        </Grid>
    )
}

export default HeroSection