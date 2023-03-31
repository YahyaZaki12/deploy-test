import { Stack, Button, Typography, Box } from '@mui/material'
import React from 'react'
import { Grid, useTheme } from '@mui/material';
import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import Link from 'next/link';
import { Element, } from 'react-scroll'


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
            <Grid item xs={6} sx={{ padding: 16, paddingBottom: "0", paddingRight: "0" }}>
                <Stack spacing={2}>
                    <Box>
                        <Typography sx={{ font: "normal normal bold 40px/50px Montserrat" }}>
                            We promise you being
                            <span style={{ color: theme.palette.primary.main, marginLeft: "5px" }}>
                                safe
                            </span>
                            <span style={{ margin: "0px 5px" }}>
                                and
                            </span>
                            <span style={{ color: theme.palette.primary.main, }}>
                                on-time!
                            </span>
                        </Typography>
                        <Typography color={"secondary.dark"} sx={{ font: "normal normal medium 16px/20px Montserrat" }}>
                            Rerum quos quaerat quis.
                            Mollitia consequatur nobis. Dolor perferendis qui minima at labore. Quis aut quia earum non enim aut nam.
                        </Typography>
                    </Box>
                    <Button variant={"contained"}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "266px",
                            marginTop: "8px"
                        }}>
                        Contact Us
                        <ArrowRight color={"white"} size={32} />
                    </Button>
                    <Typography sx={{ font: "normal normal medium 18px/20px Montserrat" }}>Download the app:</Typography>
                    <Stack direction={"row"} spacing={3}>
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
            <Grid item >
                <Image src={"/images/Hero_Image.png"} width={654} height={650} alt={"Hero Image"} />
            </Grid>
        </Grid>
    )
}

export default HeroSection