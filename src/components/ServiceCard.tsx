import React from 'react'
import { Button, Grid, Typography, Box } from '@mui/material';
import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import { Stack } from '@mui/material';

interface ServiceCardProps {
    title: string,
    subtitle: string,
    desc: string,
    image: { link: string, width: number, height: number },
    redirectionLink: string,
    styles?: React.CSSProperties
}

const ServiceCard = (props: ServiceCardProps) => {
    const { title, desc, image, subtitle, redirectionLink, styles } = props
    return (
        <Box>
            <Grid container
                sx={{
                    width: "380px",
                    minHeight: "473px",
                    borderRadius: "16px",
                    paddingLeft: "32px",
                    ...styles
                }}
                rowSpacing={2}
            >
                <Grid item xs={12}>
                    <Stack direction={"row"} sx={{ width: "100%", height: "100%" }} justifyContent={"space-between"}>
                        <Stack justifyContent={"flex-end"} sx={{ height: "100%" }}>
                            <Typography color={"primary.main"} sx={{ font: "normal normal 800 30px/35px Montserrat" }}>{title}</Typography>
                            <Typography color={"secondary.dark"} sx={{ font: "normal normal 600 16px/20px Montserrat" }}>{subtitle}</Typography>
                        </Stack>
                        <Image src={image.link} width={image.width} height={image.height} alt={"Service Image"} />
                    </Stack>
                </Grid>
                <Grid item xs={12} sx={{ paddingRight: "32px" }}>
                    <Typography sx={{ font: "normal normal medium 16px/20px Montserrat" }}>{desc}</Typography>
                </Grid>
                <Grid item xs={12} sx={{ paddingRight: "32px" }}>
                    <Button
                        fullWidth
                        variant='contained'
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginTop: "8px",

                        }}>
                        Try Now
                        <ArrowRight color={"white"} size={32} />
                    </Button>
                </Grid>
            </Grid>
        </Box>

    )
}

export default ServiceCard