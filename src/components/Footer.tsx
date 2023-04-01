import React from 'react'
import { Box, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import { useTheme } from '@mui/material';
import { Grid } from '@mui/material';
import { Stack } from '@mui/material';
import { Typography } from '@mui/material';
import { TwitterLogo, FacebookLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';

const footer_links = [
    {
        name: "About",
        id: "about"
    },
    {
        name: "Services",
        id: "services"
    },
    {
        name: "Contact Us",
        id: "contact-us"
    },
    {
        name: "Become a Provider",
        id: "become-provider"
    },
]

const Footer = () => {
    const theme = useTheme()
    const mdMatches = useMediaQuery('(min-width:900px)');
    const smMatches = useMediaQuery('(min-width:600px)');

    return <>
        <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            rowGap={4}
            sx={{
                width: "100%",
                maxHeight: "380px",
                padding: {
                    xs:"60px 80px"
                    , md: "120px 160px"
                },
                backgroundColor: `${theme.palette.secondary.main}`
            }}
        >
            <Grid item xs={2} md={4}>
                <Image src={"/images/Logo@2x.png"}
                    width={mdMatches ? `${209}` : smMatches ? 150 : 150}
                    height={mdMatches ? `${90}` : smMatches ? 60 : 60}

                    alt={"Afeela Logo"} />
            </Grid>
            <Grid item xs={6} md={true}>
                <Stack direction={{ xs: "column", md: "row" }} gap={2} justifyContent={"center"} sx={{ width: "100%" }} alignItems={"center"}>
                    {footer_links.map((link) => {
                        return <>
                            <Stack direction={"row"} alignItems={"center"} gap={1} sx={{ width: "100%" }}>
                                <Box
                                    sx={{
                                        height: "8px",
                                        width: "8px",
                                        borderRadius: "50%",
                                        backgroundColor: `${theme.palette.primary.main}`
                                    }}></Box>
                                <Typography sx={{ font: "normal normal medium 20px/20px Montserrat" }}>
                                    {link.name}
                                </Typography>
                            </Stack>
                        </>
                    })}
                </Stack>
            </Grid>
            <Grid item xs={12} container justifyContent={"center"} rowGap={2}>
                <Grid item>
                    <Typography>
                        All rights reserved for Afeela Copyright @2023.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stack sx={{ width: "100%" }} gap={8} justifyContent={"center"} direction={"row"}>
                        <LinkedinLogo weight={"fill"} size={32} />
                        <FacebookLogo weight={"fill"} size={32} />
                        <InstagramLogo weight={"fill"} size={32} />
                        <TwitterLogo weight={"fill"} size={32} />
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    </>
}

export default Footer