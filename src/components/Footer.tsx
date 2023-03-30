import React from 'react'
import { Box } from '@mui/material';
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
    return <>
        <Grid
            container
            alignItems={"center"}
            justifyContent={"space-between"}
            sx={{
                width: "100%",
                maxHeight: "380px",
                padding: "120px 160px",
                backgroundColor: `${theme.palette.secondary.main}`
            }}
        >
            <Grid item xs={4}>
                <Image src={"/images/Logo@2x.png"} width={209} height={90} alt={"Afeela Logo"} />
            </Grid>
            <Grid item>
                <Stack direction={"row"} gap={2} alignItems={"center"}>

                    {footer_links.map((link) => {
                        return <>
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