import { Typography, Stack, Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

const DownloadAppSection = () => {
    const theme = useTheme()
    return (
        <>
            <Stack sx={{ width: "100%", position: "relative", height: "928px" }} alignItems={"center"} justifyContent={"center"}>
                <Stack spacing={2} ml={14} >
                    <Typography sx={{ font: "normal normal bold 40px/50px Montserrat" }}>
                        Download the app
                        <span style={{
                            color: theme.palette.primary.main,
                            marginLeft: "5px",
                            borderBottom: `1px solid ${theme.palette.primary.main}`
                        }}>
                            Now!
                        </span>
                    </Typography>
                    <Typography color={"secondary.dark"} sx={{ font: "normal normal medium 16px/20px Montserrat", textAlign: "left" }}>
                        Rerum quos quaerat quis. Mollitia consequatur nobis. Dolor
                        <br />
                        perferendis qui minima at labore. Quis aut quia earum non
                        <br />
                        enim aut nam.
                    </Typography>
                    <Stack direction={"row"} spacing={3}>
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
                <Box sx={{ position: "absolute", left: 140, top: 150, }}>
                    <Image src={"/images/Phone-13-Pro-Max-Mockup@2x.png"} width={280} height={550} alt={"Iphone App"} />
                </Box>
            </Stack>
        </>
    )
}

export default DownloadAppSection