import { Typography, Stack, Box, useMediaQuery } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const DownloadAppSection = () => {
    const theme = useTheme()
    const matches = useMediaQuery('(min-width:900px)');

    return (
        <>
            <Stack sx={{ width: "100%", position: "relative", height: "928px" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent={"center"}>
                <Stack spacing={2} ml={{ xs: 3, md: 14 }} sx={{
                    xs: {
                        width: "60%"
                    },

                }}>
                    <Typography sx={{ font: "normal normal bold 40px/50px Montserrat" }}>
                        Download the app
                        <Typography sx={{
                            color: { xs: theme.palette.primary.main, sm: theme.palette.primary.main },
                            marginLeft: "5px",
                            font: "normal normal bold 40px/50px Montserrat",
                            borderBottom: { xs: "none", sm: `1px solid ${theme.palette.primary.main}` }
                        }}
                            component={"span"}
                        >
                            Now!
                        </Typography>
                    </Typography>
                    <Typography color={"secondary.dark"} sx={{ font: "normal normal medium 16px/20px Montserrat", textAlign: "left" }}>
                        Rerum quos quaerat quis.
                        <br />
                        Mollitia consequatur nobis. Dolor
                        <br />
                        perferendis qui minima at labore. Quis aut quia earum non
                        <br />
                        enim aut nam.
                    </Typography>
                    <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} spacing={3} sx={{ zIndex: 3 }}>
                        <Link href={"/#"}>
                            <Image src={"/images/App Store@2x.png"} width={180} height={53} alt={"App Store Download"} />
                        </Link>
                        <Link href={"/#"}>
                            <Image src={"/images/Google Play@2x.png"} width={180} height={53} alt={"App Store Download"} />
                        </Link>
                        <Link href={"/#"}>
                            <Image src={"/images/Explore It On Huawei AppGallery@2x.png"} width={180} height={53} alt={"App Store Download"} />
                        </Link>
                    </Stack>
                </Stack>
                <Box sx={{ position: "absolute", left: { xs: 290, md: 140 }, top: 150, zIndex: { xs: -4, md: 232 } }}>
                    <Image src={"/images/Phone-13-Pro-Max-Mockup@2x.png"} width={280} height={550} alt={"Iphone App"} />
                </Box>
            </Stack>
        </>
    )
}

export default DownloadAppSection